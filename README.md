# 포켓몬 도감 - functionaly Component

<P>React를 이용하여 포켓몬 도감을 만들어보자 [적응형웹]</p>

## issue

- [x] 포켓몬 api를 활용한 포켓몬 데이터 fatch
- [x] 나열된 포켓몬들중 하나의 포켓몬 선택시 디테일 정보 렌더링
- [x] 좋아하는 포켓몬 찜기능
- [x] 검색기능

<hr>

## 사용 Api

포켓몬 API : [포켓몬 API 바로가기](https://pokeapi.co/)

## 단계별 이슈 기획

1. 계획된 컴포넌트 구성
2. api에서 제공해주는 포켓몬 데이터 불러온 후 랜더링
3. 선택된 포켓몬 데이터 디테일 페이지로 state 전달
4. 선택된 포켓몬 찜하기 기능, 선택받은 포켓몬들만 재배열 랜더링
5. 검색기능

<hr>

### 1. 계획된 컴포넌트 구성

**안내** : 포켓몬들의 리스트를 보여주는 리스트와 선택된 포켓몬의 디테일정보를 확인할수 있는 디테일로 구분합니다. 리스트페이지의 세부 컴포넌트는 [검색, 좋아요 , 포켓몬리스트] 로 구성되었습니다.<br>

```
// 컴포넌트 구상도

├── 디테일 컴포넌트
├── 리스트 컴포넌트
│ ├── 검색 컴포넌트
│ └── 좋아요 컴포넌트
│ └── 포켓몬 리스트 컴포넌트
│ └── 스켈레톤 UI 컴포넌트
```

<hr>

### 2. api에서 제공해주는 포켓몬 데이터 불러온 후 랜더링

Fatch 과정에서 json구조가 한번의 json에 모든 데이터가 들어있지 않다보니 모든 데이터를 이끌어 내기위해 도합 3번의 fetch를 진행해야 했습니다. (친철한 api는 아니었습니다.)
이러한 과정은 마음에 들지않지만 개선의 여지가 어려워보입니다.<br>
받아온 데이터를 **context api**의 전역 state로 만든후 pokemons 리스트에 렌더링 걸어주었습니다.

1. fetch 데이터
2. context api로 전달
3. 전역으로 저장된 데이터를 props로 전달하지않고 필요 컴포넌트에 바로 랜더링

데이터를 pagination 보다는 **useRef**와 **intersectionobserver**를 활용하여 infinity scroll로 처리하였습니다. 초기 데이터를 불러올시에는 skeleton ui를 불러오도록 대처하였습니다. <br />

<img src="./Kapture.gif"  width="320">

<hr>

### 3. 선택된 포켓몬 데이터 디테일 페이지로 state 전달

**안내** : 선택된 포켓몬의 데이터또한 각 컴포넌트의 단계를 거치지않고 선택된 데이터를 바로 **context** 전역 selectPokemon state에 전달하였습니다. 이후 해당 데이터를 디테일 페이지에서 리렌더링 하도록 하였습니다.
<br />
<img src="./detail.gif"  width="320">

<hr>

### 4. 선택된 포켓몬 찜하기 기능, 선택받은 포켓몬들만 재배열 랜더링

**안내** : ❤️(좋아요) 버튼을 클릭하면 해당 데이터는 **context**의 collectPokemons state 배열로 전달가도록 하였습니다. filter 함수처리로 만약 그 collectPokemons 배열안에 중복된 포켓몬이 있을시 포함되지않으며 collectPokemons 배열에서 존재하는 포켓몬의 데이터를 따로 정리하여
선택된포켓몬이 콜렉터안에 포함된다면 싫어요 버튼이 생성되도록 필터링하였습니다.
추가, 제거된 배열은 나의 포켓몬 버튼으로 확인이 가능하며 초기화를 통하여 다시금 기본 fetch 포켓몬 정보를 불러올수 있습니다.<br>
**정리**

- 선택된 데이터는 context전역 collectPokemons state로 전달
- filter 함수처리를 이용한 중복값 제거
- 선택받은 포켓몬의 좋아요 값의 boolean값에 따라 제거기능과 싫어요 버튼으로 변경값 추가

<br />
<img src="./like.gif"  width="640">

<hr>

### 5. 검색기능

**안내** : 검색된 포켓몬의 정보를 확인하여 기존 포켓몬 배열에서 동일한 값에 대하여 전달하도록 구현했습니다.
하지만 문제사항이 발생했습니다.

**문제점&방안** : 전체 데이터를 불러와 pagination하는 방식이 아닌 스크롤을 할수록 데이터를 불러오는
lazy loading방식이기때문에 아직 받아오지 못한 데이터를 검색할 시 값을 전달받지 못하는 결과가 생겼습니다.

이를 위한 해결 방안으로는

1. Next.js를 활용하여 서버사이드로 포켓몬데이터를 미리 불러오는 방안
   : 이방법이 현재로서는 제일 좋은 방면으로 보입니다.
2. 데이터를 모두 불러온다음 검색이 가능하게 한다.
   : 문제점 : lazy loading의 기능의미를 잃어버린다.
3. 검색된 포켓몬만을 다시 re fetch하여 데이터를 불러온다.
   : 문제점 : api 지원기능상 검색부분은 한글이 아닌 영어로 검색이 가능하기 때문에
   포켓몬의 영어이름을 알지않는 이상 어려움이 보인다.

**고로 1번 방안으로 진행하기 위해 Next.js를 좀더 상세하게 파악한 후 재작업 예정**
<br>
<img src="./search.gif"  width="640">

## 회고록

초기 기획예상과는 다르게 SPA형식의 간략한 도감 토이프로젝트이지만
진행하면서 많은 공부가 되었던 것 같습니다.
skeleton UI의 존재와 처음으로 리엑트에 적용해보는 레이징 로드와 컨텍스트 Api 등등
하나하나 빠뜨릴부분없이 확실하게 소화시킨 부분에 매우 긍정적이며 성취적인 프로젝트로 다가왔습니다.
뿐더러 어째서 레이징로드에서 스크롤보다는 옵져버를 활용하여야하는지의 공감과 이해등을 얻은 결과라 생각합니다.

새롭게 알게된 사실도 많지만 초기 아이디어를 구상하고 코드를 개발하기에 앞서
기획을 어떻게 하여야하는지 구상단계에서 많은 고민을 하여야하는것에 대한 중요성도 크게 느꼈습니다.
Next.js의 존재감 매우 중요합니다...

**프로젝트를 통하여 배운부분** : skeleton UI, lazy loading, styled components, context api<br>
