# [Portfolio](https://wooniverse.kr/)

## 기술 스택

### Core
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

### Styling
- **CSS**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Design Concepts**: Glassmorphism, Dark Mode, Micro-animations

### Deployment & Environment
- **Runtime**: Node.js
- **Package Manager**: Yarn

---

## 프로젝트 구조

```text
src/
├── app/               # Next.js App Router (페이지 및 레이아웃)
├── assets/            # 로컬 폰트 및 이미지 자산
├── components/        # 재사용 가능한 UI 컴포넌트
├── css/               # 글로벌 스타일링 (Tailwind v4 설정 포함)
├── data/              # 프로젝트, 경력 등 정적 데이터 상수
├── layout/            # 공통 레이아웃 래퍼
├── lib/               # 공통 라이브러리 (폰트 설정 등)
└── types/             # TypeScript 타입 정의
```

## 주요 기술적 특징

### 1. 지능형 헤더 네비게이션 (Sticky Header)
- **Intersection Observer**: 사용자의 스크롤 위치를 감지하여 현재 보고 있는 섹션을 헤더 메뉴에 실시간으로 반영합니다.
- **Sliding Capsule Indicator**: 현재 활성화된 메뉴로 부드럽게 이동하는 캡슐 형태의 인디케이터를 구현하여 시각적 부드러움을 강조했습니다.
- **Backdrop Blur**: `backdrop-blur-md`를 적용한 콘텐츠의 가독성과 미적인 부분을 동시에 확보했습니다.

### 2. 데이터 기반 UI 구성
- **관심사 분리**: 모든 텍스트 콘텐츠(경력, 프로젝트 세부사항, 자격증 등)를 `src/data` 디렉토리에 상수로 관리하여, UI 로직과 콘텐츠 데이터를 엄격히 분리했습니다.
- **동적 렌더링**: 데이터 구조에 따라 상세 페이지(`/projects/[slug]`)를 생성하는 유연한 구조를 가집니다.

### 3. 일관된 디자인 시스템
- **유연한 레이아웃**: `margin` 대신 `padding`, `flex-gap`을 기반으로 설계하여 컴포넌트 간의 간섭을 최소화하고 레이아웃의 예측 가능성을 높였습니다.
- **커스텀 애니메이션**: `globals.css`의 키프레임을 활용한 무한 스크롤(Tech Stack), Reveal 효과 등을 통해 역동적인 인터페이스를 제공합니다.

---
