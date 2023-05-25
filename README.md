# react-github-search
React search app with Github GraphQL API
![image](https://github.com/gnulitskaya/react-github-search/assets/63544167/1697942c-57cb-4d53-96c0-2e5deb219937)

# Github Graphql API React client

Project developed for interview. It is a react client application that consumes Github GraphQL API to display information about repositories.

Check out the [Demo](http://graphql-react.gnulitskaya.ru/)!

1. Главная страница – список репозиториев с возможностью поиска и страницами
2. Карточка репозитория – страница с детальной информацией по репозиторию

## Stack
- React
- Create React App
- Apollo Client
- Redux
- React Router

## Requirements
- Github API token

## Installation
1) Clone this repo

2) Install dependencies
```
npm install
```
3) Add [enviroment variables](#env)
   
4) Run the app in development mode
```
npm run dev
```
5) Access application at http://localhost:3000

## <a id="env"></a>Enviroment variables
Create a .env file in the root of the project and add these variables:
```
VITE_GITHUB_ACCESS_TOKEN
```

