# monorepo-yarn

## install

### yarn 전역 설치

```shell
npm i -g yarn
```

### yarn berry 초기화

```shell
yarn init -2
```

### yarn workspace 설정하기 (in pacage.json)

- 워크스페이스란 모노레포의 하위 프로젝트를 의미함

```
  "workspaces": [
    "packages/*"
  ]
```
