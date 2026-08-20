---
author: anchaewon
decided: 2026-08-20 16:34
---
# 레거시 Vuetify 타이포 클래스 대신 프로젝트 자체 `text-scale-*`를 표준으로 쓴다

이 프로젝트의 Vuetify(4.1.10)는 M3 타이포그래피 체계(`body-large/medium/small`, `title-*`, `label-*` 등)로 전환되면서, 예전 이름(`text-h1~h6`, `text-body-1`, `text-body-2`, `text-caption` 등)에 대응하는 CSS가 더 이상 생성되지 않는다 — 즉 이 클래스들은 현재 크기/굵기/줄간격에 아무 효과가 없는 죽은 클래스다(색 계열 유틸리티 `text-high-emphasis` 등은 별개 메커니즘이라 정상 작동). 반면 `App.vue`에는 이미 프로젝트 자체 타이포 스케일(`text-scale-h1/h2/h3/body/caption`)이 정의돼 있다. 따라서 앞으로 텍스트 크기/굵기를 지정할 땐 Vuetify의 레거시 이름이 아니라 `text-scale-*` 클래스를 쓴다. 이번 작업(섹션 페이지 설명문 재구성)에서 설명 블록 23곳을 이렇게 교체했다.
