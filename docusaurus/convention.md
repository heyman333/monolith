---
title: 컨벤션 가이드
description: 프로젝트를 구성하는 컨벤션 가이드를 제공합니다.
---

# 코드 작성 컨벤션

- `필수` 로 기재된 컨벤션의 경우 반드시 지켜야 합니다.
- `권장`으로 기재된 컨벤션의 경우 반드시 지켜야 할 사항은 아니긴 하지만 권장되는 컨벤션 입니다.

## 1. 네이밍 (필수)

네이밍의 경우는 아래와 같이 통일합니다.
| url 구성 | 폴더 | 파일(컴포넌트 파일 제외) | 컴포넌트 파일 |
| ---------- | ---------- | --------- | ---------- |
| kebab-case | kebab-case | camelCase | PascalCase |

| 함수      | 변수       | enum 및 상수     |
| --------- | ---------- | ---------------- |
| camelCase | snake_case | UPPER_SNAKE_CASE |

### 컴포넌트 Props

| 이벤트 핸들러 함수 | 데이터 전달용 변수 |
| ------------------ | ------------------ |
| camelCase          | snake_case         |

```jsx
<Component some_data={other_data} onButtonClick={handleButtonClick} />
```

### 이벤트핸들러 네이밍 가이드(권장)
- 컴포넌트 내부에서 사용하는 이벤트 핸들링 함수는 `handleXXXClick` 의 형식으로 작성합니다.
- props 로 전달받는 핸들링 함수는 `onXXXClick` 형식으로 작성합니다.

```tsx
interface Props {
  onSubmitButtonClick: () => void;
}
const Comp: FC<Props> ({ onSubmitButtonClick }) => {
  const handleCancelClick = () => {
   ...
  };

  return (
    <div>
      <button onClick={handleCancelClick}>cancel</button>
      <button onClick={onSubmitButtonClick}>submit</button>
    </div>
  )
}
```



### 예외케이스

common 폴더의 경우 폴더 리스트 최상단에 바로 보여지도록 앞에 \_ 를 추가 합니다.

```
domains
├── daily-mission
│   ├── _common
│   │   ├── graphqls
│   │   ├── ...
│   │   └── utils
│   │
│   └── up-and-down
│       ├── _common
│       │   ├── graphqls
│       │   ├── ...
│       │   └── utils
│       │
│       ├── main
│       ├── ...
│       └── special-ranking
│
└── README.md
```

## 2. barrel file 비생성 (필수)

barrel file 을 생성하지 않습니다.

```ts
// x
// module/hooks/index.ts
export * from './useFoo';
export * from './useBar';

// 외부에서 참조 할 때
import { useFoo, useBar } from '@/module/hooks';

// o
import { useFoo } from '@/module/hooks/useFoo';
import { useBar } from '@/module/hooks/useBar';
```

## 3. named export (필수)

Next Page 와 같은 강제로 default export 하는 경우를 제외하고 모두 `named export`로 작성합니다.

```ts
// x
const HomePage: FC = () => {
  return ( ... )
}

export default HomePage

// o
export const HomePage: FC = () => {
  return ( ... )
}
```

## 4. 컴포넌트 스타일링(권장) 
> 전사 프로젝트 대상이기 때문에 특정 서비스에 묶이는 스타일컴포넌트는 작성해선 안됩니다.

1. css props 스타일의 경우는 유틸성 목적의 스타일용도로만 사용하고 메인 스타일링은 `styled components`를 사용합니다.

- style object 를 활용한 inline styling 을 사용하는 것을 지양합니다.
- cssProps 와 styledComponent 를 동시에 사용하지 않는것을 권장합니다.

```ts
// x
const Func = () => {
  return
	 <div css={css`
		// 해당 컴포넌트의 모든 style 처리 한 경우
		//`}>
		{...}
	</div>
}


// o
const Func = () => {
  return
	 <StyledComp css={mb(10)}>
		{...}
	</StyledComp>
}

export const mb = (value: number) => css`
  margin-bottom: ${value}px;
`

const StyledComp = styled`
 ...
`;
```

2. 하나의 컴포넌트 파일에 다수의 styledComponent 가 존재하는 경우 컴포넌트 하단에 변수 이름을 SC(Styled Components)로 만들고 object 타입 변수를 선언하여 구성합니다.

- 스타일 컴포넌트를 사용할 때는 SC 객체 내의 컴포넌트를 사용하여 스타일링된 요소임을 명확히 합니다.

```ts
export const MyComponent = () => {
  return <SC.Container>{/* 추가적인 컴포넌트 내용 */}</SC.Container>;
};

// 스타일 컴포넌트 객체 SC 정의
const SC = {
  Container: styled.div`
    /* 스타일 정의 */
  `,
};
```
