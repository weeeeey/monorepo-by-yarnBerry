# [monorepo-yarn](https://beomy.github.io/tech/etc/monorepo-yarn-berry/)

## install

### yarn 전역 설치

```shell
npm i -g yarn
```

### yarn berry 초기화

```shell
yarn init -2
```

## set up

### yarn workspace 설정하기 (in pacage.json)

- 워크스페이스란 모노레포의 하위 프로젝트를 의미함

```
  "workspaces": [
    "packages/*"
  ]
```

### packages 디렉터리 안에 design-system 폴더 생성 후 package.json 생성

```
{
  "name": "@monorepo/design-system",
  "version": "0.0.0"
}
```

### 패키지 생성

```
yarn workspace @monorepo/design-system add -D typescript react react-dom @emotion/react @emotion/styled @types/react @types/react-dom

```

- yarn workspace 명령어
- - yarn workspace <workspaceName> <commandName> 형태로 특정 워크스페이스의 스크립트를 실행할 수 있습니다.
- - yarn workspace @monorepo/design-system add -D typescript: @monorepo/design-system 프로젝트에 개발자 의존성을 가진 TypeScript를 설치하는 명령어입니다.
- - yarn workspace @monorepo/design-system run test: @monorepo/design-system 프로젝트의 test 스크립트(package.json에 scripts의 기록된...)를 실행하는 명령어입니다.
