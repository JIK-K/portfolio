import { ProjectData } from "../../types/project";

export const gersangtracker: ProjectData = {
  slug: "GersangTracker",
  title: "GersangTracker",
  description:
    "온라인 게임 '거상'의 아이템 드랍을 실시간으로 감지하여 수익 및 사냥 효율을 자동 계산하는 WPF 기반 데스크톱 애플리케이션입니다.",
  tags: [
    ".NET 10",
    "C#",
    "WPF",
    "MVVM",
    "SharpPcap",
    "Packet Sniffing",
    "Npcap",
    "SQLite",
    "EF Core",
  ],
  image: "/projects/GersangTracker.png",
  icon: "/projects/GersangTracker_icon.png",
  link: "/projects/GersangTracker",
  imagePosition: "right",
  problems: [
    {
      title: "Tesseract OCR 인식률 극복",
      description:
        "기존 컴퓨터 비전(OCR) 방식은 인게임 폰트와 투명한 배경으로 인해 오인식을 완벽하게 잡을 수 없었습니다. 이를 극복하기 위해 게임 클라이언트-서버 간의 패킷을 Npcap과 SharpPcap을 이용해 직접 가로채어 분석하는 네트워크 패킷 스니핑 방식으로 오인식률 0%를 달성했습니다.",
    },
    {
      title: "UI와 비즈니스 로직의 강한 결합",
      description:
        "초기 구조에서 네트워크 패킷, DB 접근 로직이 코드비하인드에 혼재되어 유지보수와 테스트가 불가능했습니다. CommunityToolkit.Mvvm 기반 MVVM 패턴을 전면 도입하여 PacketSnifferService·DatabaseService를 ViewModel에서 분리하고 단위 테스트 가능한 구조로 개선했습니다.",
    },
    {
      title: "가변 통신 포트 및 TCP 단편화(Fragmentation) 대응",
      description:
        "게임 실행 시마다 통신 포트가 동적으로 변하고, 네트워크 패킷이 쪼개져서(단편화) 수신되는 문제가 있었습니다. 백그라운드에서 실시간 PID 기반으로 가변 포트를 자동 추적하고, 커넥션별 패킷 버퍼링 및 스트림 재조립(Reassembly) 로직을 구현하여 데이터 유실 없이 안정적으로 패킷을 처리했습니다.",
    },
  ],
  details: {
    overview: {
      description:
        "GersangTracker는 온라인 게임 '거상'의 사냥 세션 중 발생하는 패킷을 자동 파싱하여, 획득 아이템의 가치를 합산하여 시간당 수익·효율 통계를 실시간으로 제공하는 WPF 데스크톱 도구입니다.\n\n기존에는 플레이어가 사냥 후 수동으로 드랍 목록을 기록하고 계산해야 했습니다. GersangTracker는 거상 프로세스의 통신 포트를 실시간으로 추적하여, 전투 종료 시 발생하는 패킷을 가로채 바이너리 수준에서 파싱합니다. 추출된 고유 아이템 ID를 실제 인게임 아이템명으로 1:1 변환하여 SQLite에 저장합니다.",
      period: "2026.04 — 2026.06",
      role: "Single Developer",
      team: "1인 개인 프로젝트",
      goal: "게임 화면 자동 분석을 통한 드랍 데이터 수집 및 시간당 수익 통계 자동화",
    },
    techStack: {
      categories: [
        { label: "Language", items: ["C#", ".NET 10"] },
        {
          label: "UI Framework",
          items: ["WPF (Windows Presentation Foundation)"],
        },
        { label: "Pattern", items: ["MVVM", "CommunityToolkit.Mvvm"] },
        { label: "Vision", items: ["SharpPcap", "PacketDotNet"] },
        { label: "Data", items: ["SQLite", "EF Core", "EPPlus"] },
      ],
      mainLibraries: [
        {
          name: "CommunityToolkit.Mvvm",
          reason:
            "RelayCommand, ObservableProperty 등의 소스 생성기를 활용해 보일러플레이트를 최소화하고 ViewModel과 View의 완전한 분리를 달성했습니다.",
        },
        {
          name: "EF Core + SQLite",
          reason:
            "드랍 로그와 아이템 가격 데이터를 로컬에 영속 저장합니다. 별도 서버 없이 단일 파일(.db)로 데이터를 관리할 수 있어 설치형 데스크톱 앱에 적합합니다.",
        },
        {
          name: "EPPlus",
          reason:
            "세션 종료 후 드랍 기록을 Excel 파일로 내보내는 기능을 구현합니다. 외부 Excel 설치 없이 .xlsx 파일을 직접 생성합니다.",
        },
        {
          name: "SharpPcap + PacketDotNet",
          reason: "거상 클라이언트와 서버 간의 네트워크 패킷을 Npcap을 통해 캡처하고 분석하는 핵심 라이브러리. 이미지 처리 방식 대비 오인식 없는 완벽한 아이템 감지를 구현했습니다."
        }
      ],
    },
    architecture: {
      description:
        "MVVM 패턴을 기반으로 View(XAML)·ViewModel·Service·Model의 4계층을 명확히 분리했습니다. \nPacketSnifferService가 가변 포트 추적-패킷 캡처-스트림 재조립-바이너리 파싱 파이프라인을 담당하고, DatabaseService가 EF Core를 통해 SQLite 읽기/쓰기를 처리합니다. \nViewModel은 두 서비스를 조율하며 ObservableCollection을 통해 View에 실시간 바인딩을 제공합니다.",
      tree: `GersangTracker/
              ├── Models/
              │   ├── DropLog.cs          # 드랍 이벤트 엔티티
              │   ├── Item.cs             # 아이템 가격 정보
              │   └── Session.cs          # 사냥 세션 집계
              ├── ViewModels/
              │   ├── MainViewModel.cs    # 메인 화면 상태·커맨드
              │   └── SessionViewModel.cs # 세션 통계 계산
              ├── Views/
              │   ├── MainWindow.xaml     # 실시간 드랍 목록
              │   └── SessionView.xaml    # 수익 통계 대시보드
              ├── Services/
              │   ├── PacketSnifferService.cs  # 네트워크 패킷 캡처 및 바이너리 파싱
              │   ├── ItemDatabaseService.cs   # 아이템 ID → 인게임 아이템명 1:1 매핑
              │   ├── DatabaseService.cs       # EF Core CRUD
              │   └── ExcelService.cs          # EPPlus 내보내기
              └── Converters/             # XAML 바인딩 변환기`,
      diagram: "/projects/GersangTracker_diagram.png",
    },
    features: [
      {
        title: "실시간 드랍 감지",
        description:
          "거상 프로세스의 통신 패킷을 백그라운드에서 캡처하여 전투 종료 시 발생하는 인벤토리 동기화 패킷을 분석합니다. 바이너리 데이터에서 고유 아이템 ID와 수량을 추출하여 100%의 정확도로 실시간 아이템 획득을 감지합니다.",
      },
      {
        title: "시간당 수익 통계",
        description:
          "세션 시작 시각과 현재 시각을 기준으로 획득 아이템의 시세 합산액을 나누어 시간당 수익(골드/시간)을 실시간으로 계산합니다. 세션 종료 후에는 드랍 분포와 총 수익을 요약한 통계 화면을 제공합니다.",
      },
      {
        title: "아이템 가격 관리",
        description:
          "플레이어가 직접 아이템별 시세를 입력하고 SQLite에 저장합니다. 동일 아이템의 반복 드랍 시 저장된 가격을 자동으로 참조하여 수익을 산정합니다.",
      },
      {
        title: "Excel 내보내기",
        description:
          "세션의 드랍 로그 전체를 EPPlus 기반으로 .xlsx 파일로 내보냅니다. 아이템명·수량·단가·합계·드랍 시각이 포함된 정형화된 시트를 외부 Excel 설치 없이 생성합니다.",
      },
    ],
    challenges: [
      {
        title: "완벽한 인식률 확보를 위한 아키텍처 대전환",
        problem:
          "기존 OCR 기반 구조는 게임의 배경 탓에 인식 성공률이 50%를 넘기 힘들었고, 알고리즘을 추가적으로 적용을 해도 오인식, 미인식 문제를 완전히 해결할 수 없었습니다.",
        solution:
          "네트워크 패킷 스니핑 방식으로 전면 교체 했습니다. Npcap기반의 SharpPcap을 사용하여 패킷을 직접 파싱하여 준비된 데이터셋과 비교하여 해결했습니다.",
        result:
          "화질 또는 배경에 구애받지 않고 아이템 오인식률 0%(등록되어 있는 아이템 한정). 아이템 사전 입력 작업 삭제되었습니다.",
      },
      {
        title: "가변 통신 포트 및 TCP 스트림 단편화",
        problem:
          "거상 클라이언트 실행시 포트 변경, TCP 특성상 패킷이 한번에 오지 않고 여러 개로 단편화되어 수신됨",
        solution:
          "백그라운드에서 netstat을 호출해 프로세스(PID) 기반으로 포트를 가져옵니다. IP:Port로 버퍼에 데이터를 누적시키고 헤더의 길이를 읽어서 패킷이 완전히 도착했을때만 자르는 기법을 사용했습니다.",
        result:
          "동적 포트 변경에도 대응되며, 패킷 유실 또는 구조적 깨짐에 대응가능합니다.",
      },
      {
        title: "MVVM 도입으로 코드비하인드 의존 제거",
        problem:
          "초기 프로토타입에서 스니핑 로직, DB 접근, UI 이벤트 핸들러가 MainWindow.xaml.cs에 혼재되어 기능 추가 시마다 부작용이 발생하고 단위 테스트가 불가능했습니다.",
        solution:
          "CommunityToolkit.Mvvm의 소스 생성기([ObservableProperty], [RelayCommand])를 도입하여 보일러플레이트를 제거하고, PacketSnifferService, DatabaseService, ExcelService를 독립 클래스로 분리했습니다. ViewModel은 서비스 인터페이스만 의존하도록 설계하여 Mock 교체가 가능한 구조를 확보했습니다.",
        result:
          "코드비하인드 로직 100% 제거. 서비스 단위 테스트 작성이 가능해졌고, 신규 기능(Excel 내보내기) 추가 시 기존 코드 수정 없이 서비스 클래스 추가만으로 구현 완료했습니다.",
      },
    ],
    optimizations: [
      {
        title: "비동기 논블로킹 네트워크 캡처",
        description:
          "UI Thread와 분리된 백그라운드 Task 기반 캡처 루프를 구성하여 부하를 최소화하고 캡처중에도 UI의 응답을 부드럽게 유지",
        metric: "UI 스레드 차단 / 저지연 패킷 분석",
      },
      {
        title: "TCP Sequence Number 캐싱으로 중복 패킷 방어",
        description:
          "TCP 재전송 또는 캡처 중복으로 동일 데이터가 여러번 처리되는 것을 막기 위해 시퀀스 번호를 HashSet에 캐싱하여 이미 처리된 패킷을 처리합니다. O(1)",
        metric: "동일 패킷 중복 파싱 원천 차단",
      },
      {
        title: "EF Core 배치 삽입으로 DB I/O 최소화",
        description:
          "드랍 이벤트 발생 시마다 즉시 SaveChanges를 호출하는 대신, 변경 사항을 ChangeTracker에 누적하고 일정 주기 또는 세션 종료 시점에 일괄 커밋합니다. SQLite 트랜잭션 오버헤드를 줄여 I/O 부하를 감소시켰습니다.",
        metric: "DB 커밋 횟수 최소화 / SQLite 쓰기 부하 감소",
      },
    ],
    retrospective: {
      learned:
        "단순한 기능 구현을 넘어 '왜 이 구조여야 하는가'를 고민하는 계기가 되었습니다. \nMVVM을 처음 도입하면서 관심사 분리의 이점을 체감했고, 비동기 처리을 실전에서 직접 다루며 WPF의 스레딩 모델을 깊이 이해하게 되었습니다. \n초기 OCR 방식의 한계를 겪고 네트워크 패킷 분석으로 아키텍처를 과감히 전환해 보면서, 요구사항을 해결하기 위한 문제 접근 방식의 시야를 크게 넓혔습니다.",
      achievement:
        "웹 개발 외의 영역인 데스크톱 애플리케이션에서 로우레벨 네트워크 프로그래밍(SharpPcap)을 활용한 실용적인 패킷 분석 도구를 처음부터 끝까지 혼자 완성했습니다. \n실제 게임 플레이에서 사용 가능한 수준초기 비전(Vision) 방식의 한계를 인정하고 패킷 분석 구조로 리팩토링하여 오인식률 0%의 상용 앱 수준 품질을 달성한 점이 가장 큰 성취입니다.",
    },
    links: [
      {
        label: "GitHub",
        url: "https://github.com/JIK-K/GersangTracker",
      },
      {
        label: "release",
        url: "https://github.com/JIK-K/GersangTracker/releases",
      },
      {
        label: "guide",
        url: "https://github.com/JIK-K/GersangTracker/wiki/GersangTracker-%EC%82%AC%EC%9A%A9-%EA%B0%80%EC%9D%B4%EB%93%9C",
      },
    ],
  },
};
