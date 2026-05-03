import { ProjectData } from "../../types/project";

export const lolfight: ProjectData = {
  slug: "LOLFIGHT",
  title: "LOLFIGHT",
  description:
    "롤파이트는 League of Legends의 사설 스크림 플랫폼 입니다. 수준 높은 스크림 게임을 즐길 수 있는 통합 서비스를 제공합니다.",
  tags: [
    "Nest.js",
    "TypeScript",
    "TypeORM",
    "MySQL",
    "Redis",
    "Next.js",
    "Docker",
    "Prometheus",
  ],
  image: "/projects/lolfight.png",
  icon: "/projects/LOLFIGHT_icon.png",
  link: "/projects/LOLFIGHT",
  imagePosition: "left",
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
  details: {
    overview: {
      description:
        "LOLFIGHT는 League of Legend 사설 스크림 플랫폼으로, 웹 서비스와 데스크톱 앱을 통해 사설 리그, 매칭, 개인 기록 관리 등 통합적인 게임 경험을 제공합니다.",
      period: "2024.05 — 2024.12",
      role: "Backend & Lead Developer",
      goal: "분산된 스크림 문화를 하나로 모으는 통합 플랫폼 구축 및 성능 최적화",
    },
    techStack: {
      categories: [
        { label: "Backend", items: ["Nest.js", "TypeORM", "MySQL", "Redis"] },
        { label: "Frontend", items: ["Next.js", "Tailwind CSS"] },
        { label: "Desktop", items: ["Electron", "Riot LCU API"] },
        {
          label: "DevOps",
          items: ["Docker", "Nginx", "Github Actions", "Prometheus", "Grafana"],
        },
      ],
      mainLibraries: [
        {
          name: "Redis",
          reason: "외부 API 응답 캐싱 및 부하 분산을 위한 고속 인메모리 저장소",
        },
        {
          name: "Electron",
          reason: "LCU API를 통한 로컬 클라이언트 제어 및 인게임 정보 수집",
        },
      ],
    },
    architecture: {
      description:
        "Nest.js 기반의 마이크로 서비스 아키텍처 지향형 설계를 따르며, Prometheus를 이용한 메트릭 수집 및 시각화를 지원합니다.",
      diagram:
        "Web/Desktop Client <-> Nginx <-> Nest.js API (Redis Cache) <-> MySQL",
    },
    features: [
      {
        title: "통합 스크림 시스템",
        description:
          "리그 생성부터 매칭, 전적 집계까지 전 과정을 자동화하여 관리합니다.",
      },
      {
        title: "실시간 데이터 수집",
        description:
          "Riot LCU API를 연동하여 게임 내 이벤트를 실시간으로 감지하고 기록합니다.",
      },
    ],
    challenges: [
      {
        title: "외부 API 응답 지연 (1.5s -> 0.1s)",
        problem: "Riot Esports API 호출 시 발생하는 대기 시간으로 인한 UX 저하",
        solution:
          "Redis 기반의 캐싱 레이어를 구축하고, TTL 전략 및 Promise.all을 활용한 병렬 API 호출 적용",
        result: "응답 시간을 최대 90% 이상 단축하고 외부 API 호출 비용 절감",
      },
      {
        title: "동시성 스크림 콜백 처리",
        problem:
          "다수의 게임 종료 콜백이 몰릴 때 순차적 DB 작업으로 인한 병목 발생",
        solution:
          "DB 조회 및 저장 로직을 병렬 구조로 개편하고 k6 부하 테스트로 검증",
        result: "성공률 98.6% 달성 및 평균 처리 속도 46% 향상",
      },
    ],
    optimizations: [
      {
        title: "프론트엔드 LCP 개선",
        description:
          "폰트 WOFF2 변환, 이미지 최적화 및 동적 import를 통해 초기 로딩 성능 개선",
        metric: "LCP 4.1s -> 1.8s",
      },
    ],
    retrospective: {
      learned:
        "대용량 데이터 관리와 API 성능 최적화의 중요성을 깊이 체감했습니다.",
      achievement:
        "실제 사용자 피드백을 바탕으로 시스템을 고도화하는 전 과정을 주도했습니다.",
    },
    links: [
      { label: "Web/Server Repo", url: "https://github.com/JIK-K/LOLFIGHT" },
      {
        label: "Desktop Repo",
        url: "https://github.com/JIK-K/LOLFIGHT-Desktop",
      },
    ],
  },
};
