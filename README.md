# DouLab HomePage

## Basic tools
React(create-react-app), Tailwind.css, gh-page(for React)

## Instructions
1、确保电脑安装有Node.js

2、克隆此项目，在此项目路径使用npm install安装所有依赖

3、按照github page要求创建仓库(用户名.github.io)，链接到本地项目

4、在package.json中更新homepage

5、使用npm start在本地动态查看网页效果(可以边改边看效果)，修改完成后使用npm run deploy会创建生成网页所需要的build并上传至远程仓库gh-page分支以供生成网页(需要将页面分支设置为gh-page)

## To modify
 在src的components文件夹中存放复用组件（尽量不要动），在pages文件夹存放每个页面具体布局，需要改变时增删查改具体页面内的组件信息即可