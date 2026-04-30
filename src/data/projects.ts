import { ProjectData } from "../types/project";

export const projectsData: ProjectData[] = [
  {
    title: "LOLFIGHT",
    description:
      "롤파이트는 League of Legends의 사설 스크림 플랫폼 입니다. 수준 높은 스크림 게임을 즐길 수 있도록 하며, 실력 있는 유저의 스크림 서비스를 제공하고 PC방 대회와 사설 리그는 아우르는 통합 스크림 플랫폼 서비스를 목표로 개발했습니다.",
    tags: [
      "Nest.js",
      "TypeScript",
      "TypeORM",
      "MySQL",
      "Redis",
      "Nginx",
      "Docker",
      "Github Actions",
      "Next.js",
      "Tailwindcss",
      "Prometheus",
      "Grafana",
    ],
    image: "/projects/lolfight.png",
    icon: "/projects/LOLFIGHT_icon.png",
    problems: [
      {
        title: "Riot Esports API 응답 지연 개선",
        description:
          "리그 정보/순위/일정 데이터 Redis 캐싱 및 TTL 차등 적용(10분~6시간), 순차 호출되던 리그별 스케줄 API를 Promise.all 기반 병렬 구조로 개편",
      },
      {
        title: "스크림 서비스 부하 테스트",
        description:
          "순차적 DB 조회/저장을 Promise.all 기반 병렬 처리로 변경, k6를 활용한 부하 테스트로 성능 검증",
      },
      {
        title: "Next.js 웹 성능 최적화",
        description:
          "폰트 WOFF2 변환(6.5MB→2MB), Firebase/Toast UI 에디터 동적 import, next.config.js 이미지 최적화 설정, React.memo를 통한 BoardSection 메모이제이션, 이미지 priority/sizes 속성 추가, BetModal 에러 상태 처리",
      },
    ],
    link: "/projects/LOLFIGHT",
    imagePosition: "left",
  },
  {
    title: "GersangTracker",
    description:
      "온라인 게임 '거상'의 아이템 드랍을 실시간으로 감지하여 수익 및 사냥 효율을 계산하는 WPF 기반 데스크톱 애플리케이션입니다. 수동 입력의 번거로움을 해결하기 위해 OCR 기술을 도입했으며, 게임 화면 파싱부터 데이터 분석 및 통계 제공까지 전 과정을 자동화했습니다.",
    tags: [
      ".NET 10",
      "C#",
      "WPF",
      "MVVM",
      "OpenCV",
      "Tesseract OCR",
      "SQLite",
      "EF Core",
      "CommunityToolkit.Mvvm",
    ],
    image: "/projects/gersangtracker.png", // 경로에 맞춰 수정 필요
    icon: "/projects/GersangTracker_icon.png",
    problems: [
      {
        title: "Tesseract OCR 인식률 저하 및 오인식 해결",
        description:
          "게임 내 폰트 인식률 개선을 위해 OpenCV 기반 전처리 파이프라인(3배 확대, HighQualityBicubic 보간, 이진화)을 구축하고, Levenshtein 알고리즘을 도입해 유사도 매칭으로 오타를 자동 보정했습니다.",
      },
      {
        title: "UI와 비즈니스 로직의 강한 결합 문제 해결",
        description:
          "CommunityToolkit.Mvvm을 사용한 MVVM 패턴을 전면 도입하여 OCR 인식 로직(OcrService)과 DB 접근 로직을 분리, 유지보수성과 단위 테스트 용이성을 확보했습니다.",
      },
      {
        title: "실시간 데이터 동기화 및 성능 최적화",
        description:
          "1초 주기 타이머 기반의 화면 캡처 루프에서 발생하는 부하를 방지하기 위해 특정 영역(Crop)만 처리하도록 최적화하고, ObservableCollection과 데이터 바인딩을 통해 실시간 수익 통계를 UI 지연 없이 갱신했습니다.",
      },
    ],
    link: "/projects/GersangTracker",
    imagePosition: "right",
  },
  {
    title: "Rastreador",
    description:
      "Windows 커널 수준의 이벤트를 추적하여 시스템 리소스(CPU, Memory, Network)를 실시간 모니터링하고, 병목 현상을 분석해 투명 오버레이 UI로 제공하는 C++ 기반 시스템 분석 도구입니다. 단순한 상태 표시를 넘어, 특정 프로세스의 자원 독점 상태를 식별하고 시각화하는 데 집중했습니다.",
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
    link: "/projects/Rastreador",
    imagePosition: "left",
  },
];
