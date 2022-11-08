import Container from '@mui/material/Container';
import React from 'react';
import { v1 } from 'uuid';
import './App.css';
import { Main } from './components/Main';
import {StackCards} from "./components/StackCards";

const Stack = [
  {id: v1(), title: 'JavaScript', description: 'Рефакторинг существующего кода, переход с JQ на нативный js', src: 'js.svg'},
  {id: v1(), title: 'HTML', description: 'Адаптивная, валидная, кросс-браузерная верстка', src: 'html.svg'},
  {id: v1(), title: 'CSS', description: 'Разработка анимаций, работа с SVG', src: 'css.svg'},
  {id: v1(), title: 'React', description: 'Функциональные компоненты', src: 'react.svg'},
  {id: v1(), title: 'TypeScript', description: 'Типизация', src: 'ts.svg'},
  {id: v1(), title: 'ECMAScript 6', description: 'Рефакторинг существующего кода', src: 'es6.svg'}
]

const linkSocial = [
    {id: v1(), url: 'https://github.com/Artem26r', src: 'git.svg'},
    {id: v1(), url: 'https://www.linkedin.com/in/artem-kr', src: 'link.svg'},
    {id: v1(), url: 'mailto:artem.kravetz@gmail.com', src: 'gmail.svg'},
    {id: v1(), url: 'https://t.me/akerror', src: 'telegram.svg'}
]

function App() {
  return (
      <Container fixed className='App'>
          <div>
              <Main linkSocial={linkSocial}/>
              <StackCards Stack={Stack}/>
          </div>
      </Container>
  );
}

export default App;
