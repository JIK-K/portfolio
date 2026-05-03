import { ProjectData } from "../../types/project";

export const rastreador: ProjectData = {
  slug: "Rastreador",
  title: "Rastreador",
  description:
    "Windows 커널 수준의 이벤트를 추적하여 시스템 리소스(CPU, Memory, Network)를 실시간 모니터링하고, 병목 현상을 분석해 투명 오버레이 UI로 제공하는 C++ 기반 시스템 분석 도구입니다.",
  tags: [
    "C++ 20",
    "Win32 API",
    "ETW",
    "PDH",
    "GDI+",
    "Multithreading",
    "CMake",
  ],
  icon: "/projects/Rastreador_icon.png",
  link: "/projects/Rastreador",
  imagePosition: "left",
  problems: [
    {
      title: "프로세스별 실시간 네트워크 사용량 측정 불가 문제",
      description:
        "일반적인 Win32 API로는 프로세스 단위의 실시간 대역폭 측정이 어렵다는 한계를 극복하기 위해, 커널 수준의 ETW(Event Tracing for Windows)를 활용했습니다. StartTrace와 이벤트 콜백을 통해 PID별 패킷 크기를 직접 추출하고 누적하는 로직을 구현하여 정밀한 데이터를 확보했습니다.",
    },
    {
      title: "멀티스레딩 환경에서의 데이터 경합 및 UI 지연 해결",
      description:
        "1초 주기의 데이터 수집 루프와 UI 렌더링 루프 간의 병목을 방지하기 위해 더블 버퍼링 구조를 도입했습니다. 특히 ETW 데이터를 처리할 때 스왑(Swap) 방식을 사용하여 락 경합(Lock Contention)을 최소화하고, UI 메시지 루프를 독립적인 스레드로 분리해 끊김 없는 오버레이를 구현했습니다.",
    },
    {
      title: "누적 CPU 시간 기반의 실시간 점유율 산출 로직 구현",
      description:
        "시스템이 제공하는 누적 CPU 시간을 실시간 점유율로 변환하기 위해 Delta(차분) 계산 방식을 적용했습니다. 이전 주기의 CPU 틱을 캐싱하고 현재 값과의 차이를 경과 시간으로 나누는 수식을 직접 구현하여, 작업 관리자와 유사한 신뢰도의 데이터를 도출했습니다.",
    },
  ],
  details: {
    overview: {
      description:
        "Rastreador는 Windows 시스템의 리소스(CPU, Memory, Network)를 실시간 모니터링하고, 병목 현상을 분석하여 사용자에게 오버레이(Overlay) UI로 정보를 제공하는 도구입니다. 특정 프로세스가 시스템 자원을 과도하게 사용하는 경우 이를 식별하여 알려줍니다.",
      period: "2023.10 — 2023.12",
      role: "Single Developer",
      goal: "시스템 리소스 병목의 근본 원인을 프로세스 레벨에서 실시간 식별",
    },
    techStack: {
      categories: [
        { label: "Language", items: ["C++ 20"] },
        {
          label: "API / OS",
          items: [
            "Win32 API",
            "ETW (Event Tracing for Windows)",
            "PDH (Performance Data Helper)",
          ],
        },
        { label: "Graphics", items: ["GDI+ (Layered Window)"] },
        { label: "Build", items: ["CMake"] },
      ],
      mainLibraries: [
        {
          name: "ETW",
          reason:
            "프로세스별 실시간 네트워크 트래픽 정밀 캡처를 위한 유일한 커널 수준 경로",
        },
        {
          name: "GDI+",
          reason: "투명 배경 위에 안티앨리어싱된 텍스트 렌더링을 위해 채택",
        },
      ],
    },
    architecture: {
      description:
        "Monitor 클래스가 중심이 되어 데이터 수집(Collector)과 렌더링(Display)을 독립적인 스레드에서 관리합니다.",
      tree: `Rastreador/
├── include/
│   ├── analyzer/   # BottleneckAnalyzer
│   ├── collector/  # ETWMonitor, ProcessMonitor, SystemMonitor
│   ├── core/       # Monitor (Orchestration)
│   └── display/    # OverlayDisplay
└── src/            # Implementation Files`,
    },
    features: [
      {
        title: "실시간 리소스 모니터링",
        description:
          "CPU, 메모리, 네트워크 전체 사용량을 1초 주기로 갱신하여 표시합니다.",
      },
      {
        title: "프로세스별 정밀 추적",
        description:
          "리소스 점유율이 높은 상위 프로세스를 식별하고 오버레이에 노출합니다.",
      },
    ],
    challenges: [
      {
        title: "프로세스별 네트워크 대역폭 측정",
        problem:
          "Win32 API 수준에서는 어떤 PID가 네트워크를 얼마나 사용하는지 직접적으로 알 수 없음",
        solution:
          "커널 수준의 ETW 세션을 생성하여 모든 네트워크 패킷의 헤더에서 PID를 추출하고 실시간으로 누적",
        result:
          "작업 관리자보다 정밀한 프로세스 단위 네트워크 전송 속도 도출 성공",
      },
      {
        title: "멀티스레드 데이터 경합",
        problem:
          "1초 주기 수집 스레드와 수시로 발생하는 렌더링 스레드 간의 메모리 접근 충돌",
        solution:
          "더블 버퍼링(Swap) 구조와 std::mutex를 활용하여 락 경합을 최소화하고 UI 프리징 방지",
        result: "자원 수집 부하와 무관하게 60FPS 수준의 부드러운 오버레이 유지",
      },
    ],
    optimizations: [
      {
        title: "CPU 계산 로직 최적화",
        description:
          "GetProcessTimes의 누적 틱 차분을 이용한 Delta 계산 방식으로 오차율 1% 미만 달성",
        metric: "CPU 사용률 오차 5% -> 1% 미만",
      },
    ],
    retrospective: {
      learned:
        "Windows 커널 아키텍처와 이벤트 추적 시스템에 대한 깊은 이해를 얻었습니다.",
      achievement:
        "복잡한 시스템 프로그래밍에서 멀티스레딩 안정성을 확보하는 경험을 쌓았습니다.",
    },
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/JIK-K/Rastreador",
      },
    ],
  },
};
