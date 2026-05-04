# 개발자 개인 포트폴리오 (Developer Portfolio)

개발자 개인 포트폴리오 웹사이트입니다. 프로젝트 경험, 기술 스택, 경력 및 학력 사항을 모던하고 고급스러운 UI로 소개합니다. 미니멀리즘과 다크 모드 기반의 프리미엄 에스테틱, 완벽한 반응형 웹 디자인, 그리고 유지보수가 용이한 모듈화된 컴포넌트 아키텍처를 특징으로 합니다.

## 🚀 주요 기능 (Key Features)

- **메인 랜딩 페이지**: 자기소개(Hero), 보유 기술(TechStack), 주요 프로젝트 목록(Projects), 경력(Career), 학력(Education)을 직관적인 타임라인 및 카드 형태로 제공합니다.
- **동적 프로젝트 상세 페이지**: 네비게이션 스크롤 스파이(ScrollSpy) 기능이 포함된 좌측 사이드바와 프로젝트 상세 정보(문제 해결, 아키텍처, 회고 등)를 제공하는 반응형 레이아웃을 구현했습니다.
- **인터랙티브 UI**: 요소별 Hover 이펙트, 맥박(Pulse) 애니메이션, 커스텀 스크롤바 숨김(`no-scrollbar`) 처리 등으로 부드러운 사용자 경험을 제공합니다.
- **반응형 디자인 (Responsive Design)**: 모바일, 태블릿, 데스크탑 디바이스에 완벽히 대응하는 Flex 및 Grid 기반의 유연한 레이아웃으로 설계되었습니다.

## 🛠 기술 스택 (Tech Stack)

- **Frontend**: Next.js 16.2 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, CSS Variables (글로벌 다크모드 `zinc-950` 적용)
- **Fonts**: Next/Font (Geist), 커스텀 로컬 폰트 (RixInooAriDuri)
- **Deployment & Tooling**: Docker, Docker Compose, Node.js, ESLint, PostCSS

## 📂 프로젝트 구조 (Project Structure)

```text
src/
├── app/          # Next.js App Router (페이지 및 라우팅)
├── components/   # 재사용 가능한 UI 컴포넌트 (Hero, TechStack, Projects 등)
├── data/         # 프로젝트, 경력 등 정적 데이터 (DB 대체용 TypeScript 객체)
├── types/        # TypeScript 인터페이스 및 타입 정의
└── css/          # 글로벌 CSS 및 스타일링 속성
```

## 💻 배포 (Deployment)

이 프로젝트는 Docker 컨테이너 환경에서 실행되도록 구성되어 있습니다 (`standalone` 출력 모드 활용).

```bash
# Docker 이미지 빌드 및 컨테이너 백그라운드 실행
docker-compose up -d --build
```
> **참고**: `docker-compose.yml`은 `lolfight_network`라는 외부 네트워크를 사용하도록 설정되어 있습니다. 필요에 따라 환경에 맞게 네트워크 설정을 수정하세요.

## ⚙️ 아키텍처 및 핵심 로직 (Architecture & Core Logic)

- **데이터 레이어 분리**: 데이터베이스 연동 없이 `src/data/` 폴더 내에 정적 데이터를 관리하여 유지보수성을 극대화했습니다.
- **Next.js App Router 기반**: `app/` 라우터를 사용하여 SSR/CSR을 효율적으로 분리하고 최적화된 라우팅을 제공합니다.
- **IntersectionObserver API**: 동적 페이지 내 스크롤 시 뷰포트 내 섹션을 감지하여 반응하는 ScrollSpy 네비게이션을 구축했습니다.
- **이미지 및 폰트 최적화**: `Next/Image`를 활용한 반응형 이미지 리사이징과 렌더링 성능 향상(LCP 최적화), `Next/Font`를 이용한 효율적인 폰트 로딩.
