# 실행 방법


## 1. frontend
```
npm start serve
```
## 2. backend
```
npm start run
```

### **기본적으로 nodeJS,nestJS,vueJS 설치와 CORS 설정이 되어있어야 Chrome 브라우저로 실행가능합니다.

### - NodeJS 설치

### - NestJS 설치
```
npm i -g @nestjs/cli
```
nest 설치 명령어 안될 경우: https://singa-korean.tistory.com/21 참고

### - VueJS 설치
```
npm install -g @vue/cli
```

### - CORS 설정
Chrome 브라우저에서 Server API를 받아서 만든 앱을 실행하는 경우

CORS(Cross Origin Resource Sharing) error를 발생 -> Chrome 브라우저 실행시 보안 기능을 끄기

1. Terminal을 실행
2. Chrome.exe가 있는 폴더로 이동 ex) cd C:\Program Files\Google\Chrome\Application
3. chrome.exe --disable-web-security --user-data-dir=C:\Temp 를 실행

 <br>![1](https://user-images.githubusercontent.com/37142771/145857195-54f5a4b8-a72f-4bf7-b6d9-06a19039e4de.JPG)


![2](https://user-images.githubusercontent.com/37142771/145857366-7c8d5744-ce7b-4832-b5d0-df731f599163.JPG)

![3](https://user-images.githubusercontent.com/37142771/145857439-27cf7119-628a-42e1-b439-14837b7ed772.JPG)

![4](https://user-images.githubusercontent.com/37142771/145857467-24f981b3-aef5-4715-8881-f17eb3890a92.JPG)

