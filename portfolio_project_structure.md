# Portfolio Project Structure

## Project Overview (프로젝트 개요)
- **설명**: 개발자 개인 포트폴리오 웹사이트로, 프로젝트 경험, 기술 스택, 경력 및 학력 사항을 모던하고 고급스러운 UI로 소개합니다.
- **주요 목표**: 미니멀리즘과 다크 모드 기반의 프리미엄 에스테틱 달성, 완벽한 반응형 웹 디자인 적용, 유지보수가 용이한 모듈화된 컴포넌트 아키텍처 구축.

## Technical Stack (기술 스택)
- **Frontend**: Next.js 16.2 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, CSS Variables (글로벌 다크모드 `zinc-950` 적용)
- **Fonts**: Next/Font (Geist), 커스텀 로컬 폰트 (RixInooAriDuri)
- **Deployment & Tooling**: Node.js, ESLint, PostCSS

## System Architecture (시스템 아키텍처)
- **Next.js App Router 기반**: `src/app` 폴더 구조를 사용하여 페이지 및 라우팅 관리.
- **데이터 레이어 분리**: DB를 사용하지 않고 `src/data/` 디렉토리에 TypeScript 객체로 정적 데이터를 관리하여 모듈화 (예: `projectsData`).
- **UI 컴포넌트 구조**: `src/components/` 하위에 Hero, TechStack, Projects, Career 등 각 섹션을 독립적인 컴포넌트로 분리하여 조립.
- **동적 라우팅 (Dynamic Routing)**: `src/app/projects/[slug]/page.tsx`를 통해 개별 프로젝트의 상세 페이지를 동적으로 렌더링.

## Key Features (핵심 기능)
1. **메인 랜딩 페이지**: 자기소개(Hero), 보유 기술(TechStack), 주요 프로젝트 목록(Projects), 경력(Career), 학력(Education), 자격증(Certification)을 직관적인 타임라인 및 카드 형태로 제공.
2. **동적 프로젝트 상세 페이지**: 네비게이션 스크롤 스파이(ScrollSpy) 기능이 포함된 좌측 사이드바와 프로젝트 상세 정보(문제 해결, 아키텍처, 회고 등)를 제공하는 반응형 레이아웃.
3. **인터랙티브 UI**: 요소별 Hover 이펙트, 맥박(Pulse) 애니메이션, 커스텀 스크롤바 숨김(`no-scrollbar`) 처리 등으로 부드러운 사용자 경험 제공.
4. **반응형 디자인 (Responsive Design)**: 모바일, 태블릿, 데스크탑 디바이스에 완벽히 대응하는 Flex 및 Grid 기반의 유연한 레이아웃 설계.

## Technical Challenges & Troubleshooting (기술적 도전 및 해결)
- **동적 페이지 내 네비게이션 상태 동기화 (ScrollSpy)**:
  - **문제**: 프로젝트 상세 페이지에서 스크롤 시, 현재 뷰포트에 보이는 섹션에 맞게 사이드바 메뉴의 하이라이트를 실시간 동기화해야 함.
  - **해결**: `IntersectionObserver` API를 활용하여 각 섹션의 가시성을 감지하고, React State(`activeId`)를 업데이트하여 불필요한 리렌더링 없이 동적 하이라이트 적용.
- **반응형 레이아웃에서의 Flexbox 구조 충돌**:
  - **문제**: 화면 크기가 줄어들 때 사이드바와 메인 콘텐츠의 영역이 겹치거나 가독성이 떨어지는 문제 발생.
  - **해결**: `lg:` 중단점(breakpoint)을 기준으로 사이드바는 고정 폭(fixed width)을 주고 데스크탑에서만 보이도록 처리하며, 메인 콘텐츠에는 `flex-1 min-w-0`을 부여해 컨테이너 크기를 안정적으로 유지. 모바일에서는 사이드바 대신 뒤로 가기 버튼을 상단에 배치하는 방식으로 UX 개선.

## Core Logic & Optimization (핵심 로직 및 최적화)
- **데이터 중심 아키텍처 (Data-Driven Components)**:
  - `src/types/project.ts`에 엄격한 타입(Interface)을 정의하고, UI 컴포넌트는 이 타입 스키마에만 의존하도록 설계. 
  - 새로운 프로젝트 추가 시 UI 컴포넌트의 수정 없이 `src/data/` 폴더의 데이터 객체만 추가하면 되도록 유지보수성을 극대화.
- **이미지 최적화 및 로딩 성능**:
  - `Next/Image` 컴포넌트를 활용하여 화면 크기에 따른 동적 이미지 리사이징(`sizes` 속성) 적용. LCP(Largest Contentful Paint)에 영향을 주는 상단 이미지에는 `priority` 속성을 부여해 초기 로딩 속도 최적화.
- **디자인 토큰 및 유틸리티화**:
  - 글로벌 설정(`globals.css`)을 통해 일관된 스크롤바 숨김(`no-scrollbar`), 커스텀 폰트 변수, 배경 글로우 효과 등의 스타일을 재사용 가능한 형태로 구축.

## Retrospective (회고 및 성과)
- UI 컴포넌트의 철저한 모듈화와 정적 데이터 계층의 분리를 통해 프로젝트 확장성이 크게 향상되었음을 확인했습니다.
- Next.js의 App Router 아키텍처와 SSR/CSR 분리 개념을 심도 있게 이해하고 적용할 수 있었습니다.
- 미니멀리즘과 다크 모드 특유의 깊이감을 살리기 위해 `zinc`, `blue` 계열의 색상 팔레트와 테두리(border), 투명도(opacity)를 세밀하게 조합하여 프리미엄 수준의 프론트엔드 UI/UX 구현 역량을 입증했습니다.

## Links (관련 링크)
- **GitHub Repository**: 로컬 작업 중
- **Live Site**: 배포 시 업데이트 예정
