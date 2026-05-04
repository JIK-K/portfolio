import { ProjectData } from "../../types/project";

export const rastreador: ProjectData = {
  slug: "Rastreador",
  title: "Rastreador",
  description:
    "Windows 커널 수준의 ETW 이벤트를 직접 핸들링하여 프로세스별 CPU·Memory·Network 사용량을 실시간 추적하고, 클릭 통과(Pass-through) 투명 오버레이 UI로 렌더링하는 C++ 네이티브 시스템 모니터링 도구입니다.",
  tags: ["C++20", "Win32 API", "ETW", "PDH", "GDI+", "Multithreading", "CMake"],
  icon: "/projects/Rastreador_icon.png",
  link: "/projects/Rastreador",
  imagePosition: "left",
  problems: [
    {
      title: "프로세스별 실시간 네트워크 사용량 측정 불가",
      description:
        "일반 Win32 API(GetExtendedTcpTable 등)는 현재 연결 상태만 반환할 뿐, 프로세스 단위의 실시간 대역폭을 제공하지 않습니다. Windows 커널의 ETW 세션을 직접 열어 네트워크 패킷 이벤트를 수신하고, 이벤트 헤더에서 PID를 추출하여 PID별 수신량을 누적하는 ETWMonitor를 구현해 정밀한 프로세스 단위 대역폭 측정을 실현했습니다.",
    },
    {
      title: "멀티스레드 환경에서의 데이터 경합 및 UI 지연",
      description:
        "1초 주기의 수집 루프와 렌더링 루프가 동일한 메모리에 동시에 접근하면 데이터 경합이 발생합니다. ETW 콜백 데이터에 더블 버퍼링(s_pidBytes[2]) 구조를 적용하고 스왑 방식으로 Lock 구간을 최소화했으며, 수집·렌더링 스레드를 완전히 분리하여 UI 프리징 없는 오버레이를 구현했습니다.",
    },
    {
      title: "누적 CPU 시간 기반 실시간 점유율 산출",
      description:
        "Windows는 프로세스 CPU 사용률을 직접 제공하지 않고 누적 커널·유저 시간만 반환합니다. 이전 주기의 CPU 틱을 캐싱하고 현재 값과의 차분(Delta)을 경과 실시간으로 나누는 수식을 직접 구현하여 작업 관리자 수준의 신뢰도를 달성했습니다.",
    },
  ],
  details: {
    overview: {
      description:
        "Rastreador는 Windows 환경에서 시스템 자원(CPU, Memory, Network) 상태와 개별 프로세스의 리소스 점유를 실시간으로 추적하고, GDI+ 기반의 클릭 통과 투명 오버레이로 화면에 표시하는 경량 네이티브 모니터링 도구입니다.\n\n기존 작업 관리자는 프로세스별 네트워크 대역폭을 정확히 제공하지 않으며, 상시 전면에 띄워두기 어렵습니다. Rastreador는 Windows 커널 이벤트 추적 기술(ETW)을 직접 활용하여 어떤 프로세스가 얼마의 트래픽을 사용하는지 정밀하게 측정하고, WS_EX_LAYERED·WS_EX_TRANSPARENT 속성의 오버레이 창으로 게임이나 작업 중에도 방해 없이 정보를 제공합니다.\n\nQt, CEF 등 무거운 서드파티 라이브러리 없이 순수 C++20과 네이티브 Windows API만으로 구현되어, 백그라운드 실행 시 시스템 부하를 최소화합니다.",
      period: "2023.10 — 2023.12",
      role: "Single Developer",
      goal: "시스템 리소스 병목의 근본 원인을 프로세스 레벨에서 실시간 식별",
    },
    techStack: {
      categories: [
        { label: "Language", items: ["C++20"] },
        { label: "Build", items: ["CMake"] },
        {
          label: "OS / API",
          items: ["Win32 API", "Advapi32", "PSAPI", "Iphlpapi"],
        },
        {
          label: "Kernel",
          items: [
            "ETW (Event Tracing for Windows)",
            "PDH (Performance Data Helper)",
          ],
        },
        { label: "Graphics", items: ["GDI+ (Layered Window)"] },
        { label: "Concurrency", items: ["std::thread", "std::mutex"] },
      ],
      mainLibraries: [
        {
          name: "ETW (Event Tracing for Windows)",
          reason:
            "프로세스별 실시간 네트워크 트래픽을 측정할 수 있는 유일한 커널 수준 경로입니다. StartTrace로 세션을 열고 이벤트 콜백에서 PID별 패킷 크기를 직접 추출합니다. 관리자 권한이 필요하며 CMakeLists.txt에 /MANIFESTUAC 플래그로 이를 강제합니다.",
        },
        {
          name: "PDH (Performance Data Helper)",
          reason:
            "시스템 전체 CPU·메모리·네트워크 성능 카운터를 수집하는 고수준 Windows API입니다. ETW가 프로세스 단위 정밀 측정을 담당하고, PDH는 전체 시스템 수준의 집계 지표를 보완합니다.",
        },
        {
          name: "GDI+",
          reason:
            "WS_EX_LAYERED·WS_EX_TRANSPARENT 윈도우 속성과 조합하여 클릭이 통과되는 투명 오버레이를 구현합니다. 더블 버퍼링으로 깜빡임을 제거하고 안티앨리어싱된 텍스트를 렌더링합니다.",
        },
      ],
    },
    architecture: {
      description:
        "Monitor(Core)가 중앙 컨트롤러로 수집 스레드(collectLoop)와 렌더링 스레드(displayLoop)의 라이프사이클을 관리합니다. Collector 계층은 SystemMonitor·ProcessMonitor·ETWMonitor로 분리되어 각자의 데이터 소스를 담당하고, BottleneckAnalyzer가 임계치를 검사하여 병목 여부를 판별합니다. OverlayDisplay는 분석 결과를 GDI+로 렌더링하며, TrayIcon이 백그라운드 동작을 제어합니다.",
      tree: `Rastreador/
├── include/
│   ├── core/
│   │   └── Monitor.h          # 중앙 컨트롤러, 스레드 관리
│   ├── collector/
│   │   ├── SystemMonitor.h    # 전체 CPU·Memory·Network 수집 (PDH)
│   │   ├── ProcessMonitor.h   # 프로세스별 리소스 수집 (PSAPI)
│   │   └── ETWMonitor.h       # 커널 네트워크 이벤트 캡처 (ETW)
│   ├── analyzer/
│   │   └── BottleneckAnalyzer.h  # 임계치 기반 병목 판별
│   ├── display/
│   │   └── OverlayDisplay.h   # GDI+ 투명 오버레이 렌더링
│   └── tray/
│       └── TrayIcon.h         # 시스템 트레이 아이콘 제어
├── src/                       # 각 헤더 대응 구현 파일
└── CMakeLists.txt             # /MANIFESTUAC 관리자 권한 설정`,
    },
    features: [
      {
        title: "ETW 기반 프로세스별 네트워크 추적",
        description:
          "Windows 커널 ETW 세션을 직접 열어 모든 네트워크 패킷 이벤트를 수신합니다. 이벤트 헤더에서 PID를 추출하고 바이트를 누적하여 어떤 프로세스가 얼마의 트래픽을 사용하는지 1초 단위로 정밀하게 측정합니다.",
      },
      {
        title: "실시간 시스템·프로세스 리소스 모니터링",
        description:
          "PDH로 시스템 전체 CPU·메모리·네트워크 사용률을 수집하고, PSAPI의 GetProcessTimes Delta 계산으로 개별 프로세스의 CPU 점유율을 산출합니다. 리소스 상위 프로세스를 자동으로 정렬하여 오버레이에 표시합니다.",
      },
      {
        title: "클릭 통과 투명 오버레이",
        description:
          "WS_EX_LAYERED·WS_EX_TRANSPARENT 윈도우 속성을 조합하여 마우스 이벤트가 오버레이를 통과하도록 처리합니다. GDI+ 더블 버퍼링으로 깜빡임을 제거하여 게임·작업 중에도 방해 없이 정보를 표시합니다.",
      },
      {
        title: "병목 현상 감지 및 경고",
        description:
          "BottleneckAnalyzer가 CPU·메모리·네트워크 사용률을 임계치와 비교하여 과부하 상태를 판별합니다. 임계치 초과 시 오버레이에 경고 메시지를 실시간으로 노출합니다.",
      },
      {
        title: "시스템 트레이 백그라운드 동작",
        description:
          "TrayIcon을 통해 트레이에서 모니터링 시작·종료·설정을 제어할 수 있습니다. 창이 없는 상태로 백그라운드에서 동작하여 작업 표시줄을 점유하지 않습니다.",
      },
    ],
    challenges: [
      {
        title: "프로세스별 네트워크 대역폭 측정 (Win32 API 한계 극복)",
        problem:
          "GetExtendedTcpTable 등 일반 Win32 API는 현재 연결 상태만 반환하며 프로세스 단위의 실시간 송수신 대역폭을 제공하지 않습니다. 서드파티 드라이버 없이 이를 정확히 측정할 방법이 없었습니다.",
        solution:
          "Windows 커널의 ETW Microsoft-Windows-NDIS-PacketCapture 공급자를 구독하는 세션을 직접 생성했습니다. C++ 정적 콜백의 한계를 극복하기 위해 static 맵(s_pidBytes)과 std::mutex를 활용하여 Thread-Safe하게 PID별 수신 바이트를 누적하는 ETWMonitor를 구현했습니다.",
        result:
          "서드파티 드라이버 없이 작업 관리자보다 정밀한 프로세스 단위 네트워크 대역폭 측정 달성. 1초 주기로 MB/s 단위 전송 속도를 정확하게 도출합니다.",
      },
      {
        title: "ETW 고빈도 콜백의 Lock 경합 최소화",
        problem:
          "ETW 이벤트는 커널에서 초당 수천 번 이상 발생합니다. 콜백마다 mutex를 획득하면 Lock 경합이 심각해져 수집 스레드가 렌더링 스레드를 차단하는 문제가 발생했습니다.",
        solution:
          "s_pidBytes[2] 배열 기반 더블 버퍼링 구조를 도입했습니다. 콜백은 현재 활성 버퍼에만 쓰고, 데이터 읽기 시점에 버퍼 인덱스를 스왑하는 방식으로 Lock 구간을 스왑 순간으로 한정했습니다.",
        result:
          "ETW 콜백 스레드와 데이터 읽기 스레드 간의 Lock 경합을 최소화하여 수집 부하가 렌더링 주사율에 영향을 주지 않습니다.",
      },
      {
        title: "오버레이 깜빡임 제거",
        problem:
          "GDI+로 투명 오버레이를 매 프레임 갱신할 때 이전 프레임과 새 프레임 사이에 빈 화면이 노출되어 심각한 깜빡임이 발생했습니다.",
        solution:
          "메모리 DC(Device Context)에 먼저 전체 프레임을 렌더링한 뒤 화면 DC로 일괄 복사(BitBlt)하는 더블 버퍼링 기법을 적용했습니다. WS_EX_LAYERED 속성과 UpdateLayeredWindow API를 조합하여 투명도 합성을 OS 레벨에서 처리했습니다.",
        result:
          "렌더링 갱신 중 깜빡임 완전 제거. 60FPS 수준의 부드러운 오버레이 업데이트를 달성했습니다.",
      },
      {
        title: "누적 CPU 시간 기반 실시간 점유율 산출",
        problem:
          "Windows는 GetProcessTimes로 커널·유저 시간의 누적값만 반환하며 현재 CPU 사용률을 직접 제공하지 않습니다. 단순 값 비교로는 순간 점유율 계산이 불가능했습니다.",
        solution:
          "이전 주기의 커널·유저 시간 합계를 캐싱하고, 현재 값과의 차분(Delta)을 경과 실제 시간(QueryPerformanceCounter 기반)으로 나누는 수식을 직접 구현했습니다. 논리 코어 수로 나누어 코어당 점유율로 정규화했습니다.",
        result:
          "CPU 사용률 오차 5% 이상에서 1% 미만으로 개선. 작업 관리자와 동등한 신뢰도의 수치를 도출합니다.",
      },
    ],
    optimizations: [
      {
        title: "수집·렌더링 스레드 완전 분리",
        description:
          "collectLoop(데이터 수집)와 displayLoop(GDI+ 렌더링)를 독립 std::thread로 분리했습니다. 수집 로직의 처리 지연이 오버레이 갱신 주사율에 영향을 미치지 않도록 std::mutex 기반으로 공유 데이터 접근을 동기화했습니다.",
        metric: "수집 부하와 무관하게 렌더링 60FPS 유지",
      },
      {
        title: "ETW 더블 버퍼링으로 Lock 구간 최소화",
        description:
          "s_pidBytes[2] 배열로 콜백 쓰기 버퍼와 읽기 버퍼를 분리하고 스왑 방식으로 전환합니다. 콜백이 Lock을 보유하는 시간이 스왑 순간으로 한정되어 초당 수천 번 발생하는 ETW 이벤트에서도 Lock 경합이 발생하지 않습니다.",
        metric: "ETW 콜백 Lock 보유 시간 대폭 단축",
      },
      {
        title: "UAC 권한 빌드 레벨 강제",
        description:
          "ETW 세션 생성에는 관리자 권한이 필수입니다. CMakeLists.txt에 /MANIFESTUAC:level='requireAdministrator' 플래그를 설정하여 런타임 권한 부족으로 인한 오류를 빌드 산출물 레벨에서 원천 차단했습니다.",
        metric: "권한 오류로 인한 런타임 크래시 0건",
      },
      {
        title: "GDI+ 더블 버퍼링 렌더링",
        description:
          "메모리 DC에 전체 프레임을 완성한 뒤 화면 DC로 일괄 BitBlt하여 중간 상태가 화면에 노출되지 않도록 합니다. UpdateLayeredWindow로 투명도 합성을 OS에 위임하여 CPU 렌더링 부하를 최소화했습니다.",
        metric: "렌더링 깜빡임 제거 / 오버레이 CPU 점유 최소화",
      },
    ],
    retrospective: {
      learned:
        "상위 레벨 API 호출에 머물지 않고 Windows 커널의 ETW 이벤트 추적 원리를 직접 다루면서 운영체제가 네트워크 패킷을 처리하고 이벤트를 전달하는 내부 구조를 깊이 이해하게 되었습니다. 멀티스레드 환경에서 더블 버퍼링과 Lock 최소화 전략이 실제 성능에 미치는 영향을 수치로 확인하면서 동시성 설계의 중요성을 체감했습니다.",
      achievement:
        "Qt·CEF 등 무거운 서드파티 라이브러리 없이 순수 C++20과 네이티브 Windows API만으로 작업 관리자 수준의 측정 정확도(CPU 오차 1% 미만, 프로세스별 네트워크 대역폭)와 60FPS 오버레이를 동시에 달성했습니다. 커널 수준 프로그래밍부터 GDI+ 렌더링, 멀티스레드 동기화까지 시스템 프로그래밍 전 계층을 단독으로 구현하며 시스템 소프트웨어 개발 역량을 입증했습니다.",
    },
    links: [
      {
        label: "GitHub",
        url: "https://github.com/JIK-K/Rastreador",
      },
      {
        label: "Releases",
        url: "https://github.com/JIK-K/Rastreador/releases",
      },
    ],
  },
};
