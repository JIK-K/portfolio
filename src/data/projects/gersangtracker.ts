import { ProjectData } from "../../types/project";

export const gersangtracker: ProjectData = {
  slug: "GersangTracker",
  title: "GersangTracker",
  description:
    "온라인 게임 '거상'의 아이템 드랍을 실시간으로 감지하여 수익 및 사냥 효율을 계산하는 WPF 기반 데스크톱 애플리케이션입니다.",
  tags: [
    ".NET 10",
    "C#",
    "WPF",
    "MVVM",
    "OpenCV",
    "Tesseract OCR",
    "SQLite",
    "EF Core",
  ],
  image: "/projects/GersangTracker.png",
  icon: "/projects/GersangTracker_icon.png",
  link: "/projects/GersangTracker",
  imagePosition: "right",
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
  details: {
    overview: {
      description:
        "GersangTracker는 온라인 게임 '거상'의 사냥 중 아이템 드랍을 실시간으로 감지하고, 이를 기반으로 수익 및 시간당 효율을 계산해주는 도구입니다. OCR 기술을 통해 게임 화면에서 발생하는 드랍 메시지를 자동으로 파싱하여 기록함으로써 수동 입력의 번거로움을 제거했습니다.",
      period: "2024.03 — 2024.06",
      role: "Single Developer",
      goal: "게임 화면 분석 자동화를 통한 사냥 데이터 수집 및 수익 통계 제공",
    },
    techStack: {
      categories: [
        { label: "Language", items: ["C# / .NET 10"] },
        {
          label: "UI Framework",
          items: ["WPF (Windows Presentation Foundation)"],
        },
        {
          label: "Libraries",
          items: [
            "OpenCvSharp4",
            "Tesseract OCR",
            "EF Core",
            "SQLite",
            "EPPlus",
          ],
        },
        { label: "Pattern", items: ["MVVM (CommunityToolkit.Mvvm)"] },
      ],
      mainLibraries: [
        {
          name: "Tesseract OCR",
          reason: "화면 내 한글 텍스트 추출을 위한 핵심 엔진",
        },
        {
          name: "OpenCvSharp4",
          reason: "OCR 인식률 향상을 위한 이미지 전처리(이진화, 확대) 용도",
        },
      ],
    },
    architecture: {
      description:
        "MVVM 패턴을 사용하여 비즈니스 로직(OcrService)과 UI(View)를 분리하고, SQLite를 통해 로컬 데이터를 영속적으로 관리합니다.",
      tree: `GersangTracker/
├── Models/       # Data Structure (Item, Log)
├── ViewModels/   # UI Logic (MVVM)
├── Views/        # XAML Layout
└── Services/     # OcrService, DatabaseService, ExcelService`,
    },
    features: [
      {
        title: "실시간 드랍 인식",
        description:
          "게임 화면 특정 영역을 상시 캡처하여 아이템 획득 메시지를 감지합니다.",
      },
      {
        title: "자동 수익 계산",
        description:
          "획득한 아이템의 가치를 합산하여 시간당 수익 통계를 시각화합니다.",
      },
    ],
    challenges: [
      {
        title: "낮은 OCR 인식률 보정",
        problem:
          "게임 내 특정 폰트와 배경색으로 인해 Tesseract의 기본 인식률이 현저히 낮음",
        solution:
          "OpenCV로 3배 확대 및 이진화 전처리를 수행하고, Levenshtein 알고리즘으로 오타를 유사 매칭",
        result: "인식 성공률을 실사용 가능 수준인 95% 이상으로 개선",
      },
      {
        title: "UI 쓰레드 차단 방지",
        problem:
          "1초 주기 이미지 처리 작업이 메인 UI 스레드에서 실행되어 화면 버벅임 발생",
        solution:
          "비동기(Task) 기반의 수집 루프를 설계하고 ObservableCollection을 통해 안전하게 데이터 바인딩",
        result: "모니터링 중에도 매끄러운 UI 응답성 확보",
      },
    ],
    optimizations: [
      {
        title: "이미지 처리 영역 최적화",
        description:
          "전체 화면이 아닌 메시지가 발생하는 특정 영역(Crop)만 처리하여 CPU 점유율 대폭 절감",
      },
    ],
    retrospective: {
      learned:
        "WPF와 MVVM 패턴을 활용한 복잡한 데스크톱 앱 아키텍처 설계를 익혔습니다.",
      achievement:
        "OCR과 이미지 처리 기술을 실무적인 문제 해결에 적용하는 역량을 길렀습니다.",
    },
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/JIK-K/GersangTracker",
      },
    ],
  },
};
