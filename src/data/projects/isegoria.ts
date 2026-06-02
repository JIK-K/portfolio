import { ProjectData } from "../../types/project";

export const isegoria: ProjectData = {
  slug: "Isegoria",
  title: "ISEGORIA",
  description: "Discord를 모티브로 개발된 실시간 텍스트 및 음성 커뮤니케이션 플랫폼입니다. C#(WPF) 클라이언트, Spring API 서버, 고성능 C++ 코어 서버가 결합된 아키텍처를 통해 대용량 미디어 트래픽을 지연 없이 중계하는 자체 통신 생태계를 구현했습니다.",
  tags: ["C++ 20", "CMake", "asio", "nlohmann_json", "spdlog", "jwt-cpp"],
  image: "/projects/Isegoria.png",
  icon: "/projects/Isegoria_icon.png",
  link: "/projects/Isegoria",
  imagePosition: "left",
  problems: [
    {
      title: "무상태(Stateless) 기반 UDP 초고속 인증",
      description:
        "매 패킷마다 무거운 JWT를 파싱하는 대신 TCP 연결 시 1회 검증 후 32바이트 sessionToken 발급, 이후 UDP 패킷은 토큰만으로 O(1) 시간에 인증하여 초저지연 라우팅 달성",
    },
    {
      title: "TCP/UDP 이원화 아키텍처 구축",
      description:
        "로그인, 채팅 등 신뢰성이 중요한 제어 통신은 TCP로, 약간의 손실이 있어도 지연 없는 실시간 전달이 중요한 음성 미디어 전송은 UDP로 분리하여 효율 극대화",
    },
    {
      title: "비동기 네트워크 (Asio) 최적화",
      description:
        "별도의 스레드를 커넥션마다 생성하지 않고 단일 io_context 비동기 루프로 수많은 패킷을 효과적으로 수용해 서버 리소스 절약",
    },
  ],
  details: {
    overview: {
      description:
        "ISEGORIA는 Discord를 모티브로 기획된 텍스트 채팅 및 실시간 음성 커뮤니케이션 플랫폼입니다. \n\n전체 시스템은 역할에 따라 세 가지 메인 컴포넌트로 구성되어 있습니다. 프론트엔드 클라이언트는 C#(WPF)로 구현되었으며, 사용자 인증(로그인, 회원가입)과 메타데이터 관리(서버 생성, 입장 등)는 Spring Boot 기반의 API 서버가 담당합니다.\n\n이러한 구조 속에서 저는 전체 시스템의 흐름을 조율하고, 클라이언트 간의 실시간 미디어 스트리밍(UDP) 및 채팅 메시지 브로드캐스트(TCP)를 전담하는 고성능 C++ 코어 네트워크 서버인 'isegoria-core'의 개발을 담당했습니다. 뿐만 아니라, Figma를 활용해 플랫폼 전체의 UI를 직접 디자인했으며, C#(WPF) 클라이언트의 MVVM 아키텍처 중 View 영역(XAML)의 UI 마크업을 전담하여 클라이언트의 시각적 뼈대를 구축하는 데 기여했습니다.",
      period: "2026.05 — 2026.06",
      role: "C++ Core Developer & UI Designer",
      team: "3인 팀 프로젝트",
      goal: "대규모 실시간 미디어 트래픽 릴레이 및 브로드캐스팅에 최적화된 독립형 코어 네트워크 서버 구축",
    },
    techStack: {
      categories: [
        { label: "Core Server (C++)", items: ["C++ 20", "asio"] },
        { label: "Data Format", items: ["nlohmann_json", "JWT (jwt-cpp)"] },
        { label: "Build & Utils", items: ["CMake", "vcpkg", "spdlog"] },
        { label: "Design & View Markup", items: ["Figma", "C# (WPF XAML)"] },
      ],
      mainLibraries: [
        {
          name: "asio",
          reason:
            "TCP/UDP 이벤트 루프 구동을 위한 비동기 네트워크 통신 라이브러리",
        },
        {
          name: "nlohmann_json",
          reason: "클라이언트-서버 간 메시지 파싱 및 생성",
        },
        {
          name: "jwt-cpp",
          reason: "클라이언트의 초기 접속 시 JWT 유효성 암호학적 검증",
        },
      ],
    },
    architecture: {
      description:
        "asio의 단일 io_context를 활용하여 TCPListener(9000)와 UDPListener(9001)가 비동기로 패킷을 수신합니다. \nTCP를 통해 들어온 제어 및 채팅 데이터는 JSON으로 파싱되어 핸들러를 거치고, \nUDP 실시간 음성 데이터는 고정 크기(48바이트) 바이너리 헤더로 파싱되어 같은 채널 유저들에게 중계(Relay)됩니다.",
      diagram: "/projects/Isegoria-core_diagram.png",
    },
    features: [
      {
        title: "TCP 제어 채널 통신 (isegoria-core)",
        description:
          "인증, 텍스트 메시지 브로드캐스트, 채널 입장/퇴장 상태 등 신뢰성이 보장되어야 하는 주요 데이터 계층의 통신을 담당합니다. Length-Prefixed JSON 구조를 통해 스트림 경계를 구분합니다.",
      },
      {
        title: "UDP 실시간 미디어 라우팅 (isegoria-core)",
        description:
          "실시간 음성 데이터 전송을 위해 무거운 JSON 파싱을 배제하고 고정 48바이트 바이너리 헤더를 채택하여 Opus 음성 데이터를 고속 중계(Relay)합니다.",
      },
      {
        title: "고성능 비동기 멀티플렉싱",
        description:
          "asio를 통해 TCP와 UDP 소켓 모두 단일 io_context 비동기 이벤트 루프에서 처리되도록 설계하여 커넥션 스레드 생성 비용과 컨텍스트 스위칭 오버헤드를 극단적으로 줄였습니다.",
      },
      {
        title: "세션 생존 관리 (Heartbeat)",
        description:
          "HeartbeatManager를 통해 주기적으로 클라이언트 세션에 Ping/Pong 응답을 확인하고 비정상 종료된 커넥션(좀비 소켓)을 안정적으로 정리합니다.",
      },
    ],
    challenges: [
      {
        title: "무상태(Stateless) 기반 UDP 초고속 인증 구조 설계",
        problem:
          "매 미디어 패킷마다 무거운 JWT 복호화/파싱을 수행하면 극심한 딜레이가 발생해 실시간 음성 라우팅 성능이 저하되는 문제.",
        solution:
          "TCP 최초 연결 시 단 1회만 JWT를 검증해 32바이트 난수(sessionToken)를 발급하고, UDP 패킷은 헤더에 이 토큰만 탑재하여 전송하도록 프로토콜 이원화.",
        result:
          "UDP 수신 시 메모리 해시맵을 통해 O(1) 시간에 인증을 즉시 완료, 강력한 보안과 초저지연 라우팅을 동시에 달성.",
      },
      {
        title: "버퍼 오버플로우 방어 및 메모리 안정성 확보",
        problem:
          "클라이언트 발 악의적인 대용량 트래픽이나 비정상적인 데이터로 인해 서버에 메모리 초과(OOM) 사태나 과부하가 발생할 수 있는 위험.",
        solution:
          "ChatHandler 및 TCP 수신 단계에서 최대 메시지 크기를 4KB로 강제 제한. UDP 패킷 최대 크기 역시 256바이트로 제한하여 네트워크 단편화 방지.",
        result:
          "거대 데이터 수신 시 즉각 오류 응답 및 세션 제어를 통해 서버 과부하 원천 차단.",
      },
      {
        title: "네트워크 바이트 오더링 및 데이터 직렬화 무결성",
        problem:
          "크로스 플랫폼 간 통신 시 바이너리 헤더나 TCP 길이 필드의 바이트 순서(Endianness)가 일치하지 않아 파싱 오류가 발생하는 문제.",
        solution:
          "TCP 패킷 4바이트 길이에 Big-Endian(네트워크 바이트 오더) 일관 적용 및 UDP 헤더 구조체에 pragma pack을 사용하여 메모리 패딩 제거.",
        result:
          "플랫폼 종속성 없는 데이터 직렬화 무결성 확보 및 고속 바이너리 파싱 안정화.",
      },
    ],
    optimizations: [
      {
        title: "UDP 패킷 파싱 최적화",
        description:
          "미디어 패킷에서 JSON 파싱을 배제하고 고정 크기(48바이트) 바이너리 VoiceHeader 구조체 도입",
        metric: "파싱 오버헤드 제거를 통한 라우팅 속도 극대화",
      },
      {
        title: "토큰 인증 프로세스 경량화",
        description:
          "TCP 연결 시 1회 JWT 검증 후 32바이트 sessionToken을 발급하여 UDP 메모리 맵 기반 고속 인증 구현",
        metric: "인증 지연 시간 O(1) 달성",
      },
    ],
    retrospective: {
      learned:
        "비동기 I/O 기반 C++ 서버를 직접 설계하며 네트워크 소켓 프로그래밍, 멀티플렉싱, 패킷 직렬화에 대한 깊은 이해를 얻었습니다. 프로토콜 특성에 맞춰 TCP와 UDP를 이원화하고 바이너리 최적화를 통해 딜레이를 개선한 경험이 뜻깊었습니다.",
      achievement:
        "ISEGORIA 프로젝트 내에서 REST API에 의존하지 않고 오직 대용량 트래픽 릴레이에 집중하는 독립형 미디어 코어 네트워크 서버(isegoria-core)를 성공적으로 구축했습니다. 더 나아가 서버 개발에만 머물지 않고, Figma 기반의 디자인 기획부터 WPF 클라이언트의 View 레이어 마크업(퍼블리싱)까지 직접 소화하며 프로젝트의 초기 시각적 기틀을 마련한 경험이 큰 성취로 남았습니다.",
    },
    links: [
      {
        label: "Github",
        url: "https://github.com/RE-ACK/isegoria-core",
      },
      {
        label: "Release",
        url: "https://github.com/RE-ACK/isegoria-wpf/releases",
      },
    ],
  },
};
