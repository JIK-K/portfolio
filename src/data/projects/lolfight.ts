import { ProjectData } from "../../types/project";

export const lolfight: ProjectData = {
  slug: "LOLFIGHT",
  title: "LOLFIGHT",
  description:
    "롤파이트는 League of Legends의 수준 높은 스크림 게임을 즐길 수 있도록 하며, 실력 있는 유저의 스크림 서비스를 제공하고 PC방 대회와 사설 리그는 아우르는 통합 스크림 플랫폼 입니다.",
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
        "롤파이트는 League of Legends의 사설 스크림 플랫폼 입니다. 수준 높은 스크림 게임을 즐길 수 있도록 하며, 실력 있는 유저의 스크림 서비스를 제공하고 PC방 대회와 사설 리그는 아우르는 통합 스크림 플랫폼 서비스를 목표로 개발했습니다.\n\n기존에는 플레이어가 외부 메신저를 통해 수동으로 상대를 구하고 결과를 기록해야 했습니다. 롤파이트는 Riot API를 연동하여 게임 진행 상태부터 결과 처리까지 전 과정을 자동화합니다. NestJS와 Next.js 기반으로 구축되었으며, 외부 API 호출 지연과 다중 콜백 처리로 인한 DB 병목 문제를 Redis 캐싱 및 Promise.all 병렬 처리 구조로 개편하여 실시간 응답 성능을 최적화했습니다.",
      period: "2024.05 — 2024.12",
      role: "Backend & Lead Developer",
      team: "1인 개인 프로젝트",
      goal: "분산된 스크림 문화를 하나로 모으는 통합 플랫폼 구축 및 성능 최적화",
    },
    techStack: {
      categories: [
        { label: "Backend", items: ["Nest.js", "TypeORM", "MySQL", "Redis"] },
        { label: "Frontend", items: ["Next.js", "Tailwind CSS"] },
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
          name: "Riot Esports API",
          reason: "Riot API를 통한 리그 정보/순위/일정 데이터 수집 및 제공",
        },
      ],
    },
    architecture: {
      description:
        "Docker 컨테이너 환경에서 Next.js 프론트엔드와 NestJS 백엔드가 Nginx 리버스 프록시를 통해 연결되는 구조입니다. \nLet's Encrypt SSL 인증서를 Certbot으로 자동 갱신하며, TypeORM으로 MySQL에 접근합니다. Redis 캐시 레이어를 활용하고, Prometheus와 Grafana로 메트릭을 수집·시각화합니다. \nGitHub Actions 기반 CI/CD 파이프라인을 통해 자동 배포됩니다.",
      diagram: "/projects/LOLFIGHT_diagram.svg",
    },
    features: [
      {
        title: "길드 시스템",
        description:
          "길드를 창설하거나 합류하여 소속감 있는 팀 커뮤니티를 구축할 수 있습니다. 스크림 결과를 바탕으로 산정되는 길드 랭킹으로 서버 내 위상을 증명하세요.",
      },
      {
        title: "스크림 매칭 시스템",
        description:
          "길드원으로 팀을 구성하고 스크림 모집 페이지에 원하는 조건을 등록합니다. 신청 팀의 프로필과 전적을 확인 후 직접 매칭을 수락하며, Riot API를 통해 게임 진행부터 결과 저장까지 자동으로 처리됩니다.",
      },
      {
        title: "롤로세움",
        description:
          "게임 중 발생한 논쟁 장면을 영상으로 업로드하면 커뮤니티 투표로 판결이 결정됩니다. 채팅 싸움 대신 집단 지성으로 시시비비를 가리는 LOLFIGHT만의 문화입니다.",
      },
      {
        title: "LCK 인사이트",
        description:
          "Riot Esports API를 통해 프로 리그 실시간 일정과 순위를 제공합니다. 응원 팀 승리 시 LOLFIGHT 포인트가 지급되는 승부 예측 이벤트로 프로 씬을 더 즐겁게 즐길 수 있습니다.",
      },
      {
        title: "포인트 에코 시스템",
        description:
          "출석, 게시글 작성, 승부 예측 적중 등 커뮤니티 활동으로 포인트를 적립합니다. 획득한 포인트로 상점에서 전용 아이템을 구매해 프로필을 꾸밀 수 있습니다.",
      },
    ],
    challenges: [
      {
        title: "Riot Esports API 응답 지연 개선 (1,500ms → 20~100ms)",
        problem:
          "외부 Riot Esports API 의존으로 홈 화면 평균 1.5~2.2초 응답 지연 발생. 동일 리그 정보 중복 호출 및 다수 리그 일정 순차 조회로 대기 시간 누적.",
        solution:
          "리그 정보·순위·일정 데이터에 Redis 캐싱 및 TTL 차등 적용(10분~6시간). 순차 호출되던 리그별 스케줄 API를 Promise.all 기반 병렬 구조로 개편.",
        result:
          "응답 시간 90% 이상 단축(1,500ms → 20~100ms), 외부 API 호출 90% 이상 절감으로 Rate Limit 유연성 확보, 홈 화면 프리징 현상 제거.",
      },
      {
        title: "스크림 콜백 동시 처리 성능 최적화 (951ms → 510ms)",
        problem:
          "다수의 게임 종료 콜백 동시 처리 시 순차적 DB 작업으로 인한 응답 지연 및 처리 실패 발생.",
        solution:
          "순차적 DB 조회·저장을 Promise.all 기반 병렬 처리로 변경. k6를 활용한 부하 테스트로 성능 검증.",
        result:
          "성공률 85% → 98.6% (+13%p), 평균 응답 시간 951ms → 510ms (46% 단축), 처리량 19% 향상.",
      },
      {
        title: "Next.js 웹 성능 최적화 (LCP 4.1s → 개선)",
        problem:
          "PageSpeed Insights 분석 결과 LCP 4.1초, CLS 0.154로 성능 저하. 주요 원인은 폰트 파일 과대 용량(9.3MB), Firebase 동기 로딩, 불필요한 리렌더, API 실패 시 무한 로딩.",
        solution:
          "폰트 WOFF2 변환(6.5MB → 2MB), Firebase·Toast UI 에디터 동적 import, next.config.js 이미지 최적화. React.memo를 통한 BoardSection 메모이제이션, 이미지 priority·sizes 속성 추가, BetModal 에러 상태 처리.",
        result:
          "폰트 용량 70% 감소, 초기 번들 크기 약 100KB 절감, 불필요한 리렌더 방지 및 사용자 경험 개선.",
      },
      {
        title: "Prometheus·Grafana 기반 모니터링 시스템 구축",
        problem:
          "모니터링 시스템 미흡으로 실시간 장애 감지 및 성능 병목 지점 파악에 어려움 발생.",
        solution:
          "NestJS Middleware·Interceptor를 활용한 HTTP 요청·응답 로깅 및 API별 메트릭 수집 체계 구축. Docker 기반 Prometheus·Grafana 연동으로 시계열 데이터 시각화.",
        result:
          "실시간 지표 모니터링을 통한 장애 탐지 및 대응 시간 단축, 데이터 기반 성능 병목 구간 파악 및 최적화 활용.",
      },
    ],
    optimizations: [
      {
        title: "Next.js 초기 로딩 성능 개선",
        description:
          "폰트 WOFF2 변환, Firebase·Toast UI 동적 import, 이미지 priority·sizes 최적화, React.memo 메모이제이션 적용",
        metric: "LCP 4.1s → 1.8s / 번들 ~100KB 절감 / 폰트 용량 70% 감소",
      },
      {
        title: "Riot Esports API 캐싱",
        description:
          "Redis TTL 차등 캐싱(10분~6시간) 및 Promise.all 병렬 호출 구조 적용",
        metric: "응답 시간 1,500ms → 20~100ms / 외부 API 호출 90% 절감",
      },
      {
        title: "스크림 콜백 병렬 처리",
        description:
          "순차적 DB 조회·저장을 Promise.all 병렬 구조로 개편, k6 부하 테스트 검증",
        metric: "응답 951ms → 510ms / 성공률 85% → 98.6% / 처리량 19% 향상",
      },
    ],
    retrospective: {
      learned:
        "외부 API 의존 구조에서 Redis 캐싱과 병렬 처리가 성능에 미치는 영향을 수치로 직접 체감했습니다. \n단순한 기능 구현을 넘어 부하 테스트(k6)로 병목을 검증하고, 모니터링 시스템을 통해 데이터 기반으로 문제를 추적하는 경험이 인상 깊었습니다.",
      achievement:
        "길드·스크림·롤로세움·응원 시스템 등 서비스 전반을 설계부터 배포까지 주도했습니다. \n응답 시간 90% 단축, 스크림 처리 성공률 98.6% 달성 등 실제 수치로 증명할 수 있는 개선 결과를 만들어낸 점이 가장 큰 성취입니다.",
    },
    links: [
      {
        label: "Live Site",
        url: "https://lolfight.kr",
      },
    ],
  },
};
