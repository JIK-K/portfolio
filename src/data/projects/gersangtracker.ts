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
      title: "Tesseract OCR 인식률 저하 및 오인식",
      description:
        "게임 특유의 폰트와 배경색으로 인해 기본 OCR 인식률이 실사용 불가 수준으로 낮았습니다. OpenCV 기반 전처리 파이프라인(3배 확대, HighQualityBicubic 보간, 이진화)을 구축하고 Levenshtein 알고리즘을 도입해 유사도 매칭으로 오타를 자동 보정하여 인식 성공률을 95% 이상으로 끌어올렸습니다.",
    },
    {
      title: "UI와 비즈니스 로직의 강한 결합",
      description:
        "초기 구조에서 OCR 처리·DB 접근 로직이 코드비하인드에 혼재되어 유지보수와 테스트가 불가능했습니다. CommunityToolkit.Mvvm 기반 MVVM 패턴을 전면 도입하여 OcrService·DatabaseService를 ViewModel에서 분리하고 단위 테스트 가능한 구조로 개선했습니다.",
    },
    {
      title: "1초 주기 캡처 루프의 UI 쓰레드 차단",
      description:
        "이미지 처리 작업이 메인 UI 스레드에서 동기 실행되어 화면 버벅임이 발생했습니다. Task 기반 비동기 루프로 전환하고 관심 영역(Crop)만 처리하도록 최적화하여 CPU 점유율을 낮추고 매끄러운 UI 응답성을 확보했습니다.",
    },
  ],
  details: {
    overview: {
      description:
        "GersangTracker는 온라인 게임 '거상'의 사냥 세션 중 발생하는 아이템 드랍 메시지를 OCR로 자동 파싱하고, 획득 아이템의 가치를 합산하여 시간당 수익·효율 통계를 실시간으로 제공하는 WPF 데스크톱 도구입니다.\n\n기존에는 플레이어가 사냥 후 수동으로 드랍 목록을 기록하고 계산해야 했습니다. GersangTracker는 게임 화면의 특정 영역을 1초 주기로 캡처하고, OpenCV 전처리와 Tesseract OCR을 결합한 파이프라인으로 드랍 텍스트를 추출·정규화하여 SQLite에 저장합니다. 세션 종료 후 Excel 내보내기 기능을 통해 데이터를 외부로 활용할 수 있습니다.",
      period: "2026.04 — 2026.05",
      role: "Single Developer",
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
        { label: "Vision", items: ["OpenCvSharp4", "Tesseract OCR"] },
        { label: "Data", items: ["SQLite", "EF Core", "EPPlus"] },
      ],
      mainLibraries: [
        {
          name: "Tesseract OCR",
          reason:
            "게임 화면 내 한글 드랍 메시지를 텍스트로 추출하는 핵심 엔진. 한국어 학습 데이터(kor.traineddata)를 적용하여 게임 폰트에 특화된 인식률을 확보했습니다.",
        },
        {
          name: "OpenCvSharp4",
          reason:
            "Tesseract 입력 전 이미지 전처리(3배 확대, Otsu 이진화, 노이즈 제거)를 담당합니다. 전처리 유무에 따라 인식률이 60%대에서 95% 이상으로 개선되었습니다.",
        },
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
      ],
    },
    architecture: {
      description:
        "MVVM 패턴을 기반으로 View(XAML)·ViewModel·Service·Model의 4계층을 명확히 분리했습니다. \nOcrService가 캡처→전처리→OCR→정규화 파이프라인을 담당하고, DatabaseService가 EF Core를 통해 SQLite 읽기/쓰기를 처리합니다. \nViewModel은 두 서비스를 조율하며 ObservableCollection을 통해 View에 실시간 바인딩을 제공합니다.",
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
│   ├── OcrService.cs       # 캡처→전처리→OCR 파이프라인
│   ├── DatabaseService.cs  # EF Core CRUD
│   └── ExcelService.cs     # EPPlus 내보내기
└── Converters/             # XAML 바인딩 변환기`,
    },
    features: [
      {
        title: "실시간 드랍 감지",
        description:
          "1초 주기로 게임 화면의 드랍 메시지 영역을 캡처하고, OpenCV 전처리와 Tesseract OCR을 거쳐 아이템 이름을 자동 추출합니다. 추출된 텍스트는 Levenshtein 유사도 매칭으로 DB 아이템 목록과 비교하여 오인식을 보정합니다.",
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
        title: "게임 폰트 OCR 인식률 개선 (60% → 95%+)",
        problem:
          "거상의 고유 비트맵 폰트와 반투명 메시지 배경이 Tesseract 기본 설정과 맞지 않아 인식 성공률이 60%대에 그쳤습니다. 특히 유사 자형('ㄹ'/'ㄴ', '0'/'O')의 혼동이 빈번했습니다.",
        solution:
          "OpenCV로 관심 영역을 3배 확대(HighQualityBicubic 보간)한 뒤 Otsu 이진화를 적용해 배경 노이즈를 제거했습니다. Tesseract 출력값에 Levenshtein 거리 알고리즘을 적용하여 DB 아이템 목록과 유사도를 비교하고, 거리 임계값 이하의 후보를 자동으로 보정합니다.",
        result:
          "실사용 환경 기준 OCR 인식 성공률 95% 이상 달성. 오인식으로 인한 수동 수정 작업이 사실상 제거되었습니다.",
      },
      {
        title: "UI 스레드 차단 없는 1초 캡처 루프 구현",
        problem:
          "캡처→전처리→OCR 전 과정이 메인 UI 스레드에서 동기 실행되어, 처리 시간(약 300~500ms)만큼 화면이 버벅이고 버튼 입력이 지연되었습니다.",
        solution:
          "캡처 루프 전체를 Task.Run 기반 비동기 구조로 분리하고, UI 업데이트는 Dispatcher.InvokeAsync를 통해 메인 스레드로 마샬링했습니다. ObservableCollection의 변경 알림이 바인딩 엔진을 통해 View를 자동 갱신하도록 설계하여 스레드 간 동기화 코드를 최소화했습니다.",
        result:
          "캡처 루프 실행 중에도 UI 응답 지연 0ms. 세션 중 버튼 조작 및 통계 화면 전환이 즉각적으로 반응합니다.",
      },
      {
        title: "MVVM 도입으로 코드비하인드 의존 제거",
        problem:
          "초기 프로토타입에서 OCR 로직, DB 접근, UI 이벤트 핸들러가 MainWindow.xaml.cs에 혼재되어 기능 추가 시마다 부작용이 발생하고 단위 테스트가 불가능했습니다.",
        solution:
          "CommunityToolkit.Mvvm의 소스 생성기([ObservableProperty], [RelayCommand])를 도입하여 보일러플레이트를 제거하고, OcrService·DatabaseService·ExcelService를 독립 클래스로 분리했습니다. ViewModel은 서비스 인터페이스만 의존하도록 설계하여 Mock 교체가 가능한 구조를 확보했습니다.",
        result:
          "코드비하인드 로직 100% 제거. 서비스 단위 테스트 작성이 가능해졌고, 신규 기능(Excel 내보내기) 추가 시 기존 코드 수정 없이 서비스 클래스 추가만으로 구현 완료했습니다.",
      },
    ],
    optimizations: [
      {
        title: "관심 영역(ROI) 기반 이미지 처리",
        description:
          "전체 화면(1920×1080) 대신 드랍 메시지가 표시되는 고정 영역(약 400×80px)만 캡처하고 전처리합니다. 처리 픽셀 수를 약 98% 절감하여 OCR 1회 수행 시간을 단축했습니다.",
        metric: "처리 픽셀 수 약 98% 절감 / OCR 처리 시간 단축",
      },
      {
        title: "Levenshtein 캐싱으로 반복 연산 제거",
        description:
          "드랍 목록은 세션 중 변경되지 않으므로, 앱 시작 시 DB 아이템 목록을 메모리에 로드하고 Levenshtein 비교 결과를 Dictionary로 캐싱합니다. 동일 아이템 재인식 시 연산 없이 즉시 반환합니다.",
        metric: "반복 드랍 아이템 매칭 시간 O(n) → O(1)",
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
        "단순한 기능 구현을 넘어 '왜 이 구조여야 하는가'를 고민하는 계기가 되었습니다. \nMVVM을 처음 도입하면서 관심사 분리의 이점을 체감했고, 비동기 처리을 실전에서 직접 다루며 WPF의 스레딩 모델을 깊이 이해하게 되었습니다. \nOCR 파이프라인 구축을 통해 알고리즘 선택(Levenshtein)이 사용자 경험에 직결된다는 점도 배웠습니다.",
      achievement:
        "웹 개발 외의 영역인 데스크톱 애플리케이션에서 컴퓨터 비전(OpenCV)과 OCR(Tesseract)을 결합한 실용적인 도구를 처음부터 끝까지 혼자 완성했습니다. \n실제 게임 플레이에서 사용 가능한 수준(인식률 95%+, UI 무응답 0ms)의 품질을 달성했고, 코드 구조 개선(MVVM 전환)을 통해 유지보수성과 확장성을 동시에 확보한 점이 가장 큰 성취입니다.",
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
