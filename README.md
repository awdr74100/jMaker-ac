# J-MAKER 實驗室門禁管制系統

此為未來大學專班地下室門禁管制系統後台，採取前後端分離架構，硬體端使用的 ESP8266、ESP32、Raspberry Pi 可透過開設出的 RESTful API 完成與資料庫的溝通，操作人員可由前端串接 API 後形成的網站後台線上管理所有用戶。

## 線上演示

Demo：https://jmaker-ac.netlify.app

## 更新日誌

- 2020/08/04：修復 Chrome 80+ 針對跨域 Cookie 的規則調整 (SameSite 必須從預設 Lax 改為 None 同時加上 Secure 屬性)

## 設計說明

解決硬體端傳統與它端整合上的困難，所有硬體都只需要透過基本的 HTTP Request 即可與資料庫做溝通，操作人員在使用前也不需要安裝任何的資料庫及程式，輸入網址即可進入操作介面。此專案支援 RWD、SPA、PWA，意即在手機上使用也不會有體驗低落的問題。

- 第一道進出入自動門 ✔
- 專題討論空間自動門 ✔
- 專題討論空間硬體設備 ✔
- CNC 器具間權限控管 ✔
- 違規事項訊息推播 ✔
- 3D 列印器材間權限控管
- 供影像辨識用圖片上傳

## 系統功能

- 硬體端

  - 用戶加入
  - 權限檢查
  - ...

- 控制台

  - 取得所有用戶
  - 取得指定用戶
  - 刪除指定用戶
  - 實體用戶註冊
  - 調整訪問權限
  - 圖片上傳
  - 發送郵件
  - ...

- 登入及驗證

  - 管理員註冊
  - 管理員登入
  - 檢查是否持續登入
  - 管理員登出

## 使用技術

1. 前端

   - Vue.js / Vuex / Vue Router / Vue CLI 4
   - Webpack
   - JavaScript (ES6+)
   - Web APIs (FileRender、FormData、DragEvent)
   - AJAX / Axios
   - SCSS
   - OOCSS / BEM / 7-1 Pattern
   - RWD
   - PWA
   - Netlify Deployment

2. 後端

   - Node.js / Express.js
   - MongoDB / Mongoose (ODM)
   - JWT / Cookie
   - RESTful API
   - Argon2
   - Nodemailer
   - Vercel Deployment

3. 代碼風格

   - ESLint (Airbnb)
   - Prettier

4. 第三方 API

   - Imgur API

5. 額外插件

   - vue-axios
   - vue-fontawesome
   - vue-js-modal
   - vue-loading-overlay
   - vue-loading-skeleton
   - vue-progressbar
   - vee-validate

6. 其他
   - 自製 Grid System
   - 自製 Spacing
   - 自製 Theme Color

## 系統介面

登入頁面

![login](https://i.imgur.com/foUsZcK.png)

載入動畫 (使用 CSS Animation)

![loading](https://i.imgur.com/R97MdCm.png)

骨架屏 (使用 vue-loading-skeleton)

![skeleton](https://i.imgur.com/uihkcRm.png)

實體用戶註冊

![register](https://i.imgur.com/ARK14Bs.png)

互動視窗 (註冊用戶)

![registerModal](https://i.imgur.com/1pGsy0G.png)

互動視窗 (刪除用戶)

![deleteModal](https://i.imgur.com/Lb09srh.png)

調整用戶權限

![adjust](https://i.imgur.com/xxmZSqh.png)

互動視窗 (調整用戶)

![adjustModal](https://i.imgur.com/NvSz47A.png)

違規訊息推播

![mail](https://i.imgur.com/PqCLijY.png)

違規訊息推播 (使用 DragEvent)

![mailDrop](https://i.imgur.com/NcVnoho.png)

互動視窗 (選擇用戶)

![mailModal](https://i.imgur.com/Gv5rIbe.png)

預覽圖片 (使用 FileRender)

![preview](https://i.imgur.com/GcJXsAA.png)

查詢用戶狀態

![search](https://i.imgur.com/PokIDlj.png)
