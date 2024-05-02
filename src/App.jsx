import { useState } from 'react'
import { BrowserRouter, Routes, HashRouter, Route } from 'react-router-dom'
import Products from './components/products/Products'
import Add from './components/add/Add'
import Navbar from './components/navBar/NavBar'

import './App.css'

function App() {
  return (
    <div className='app'>
      <h1>App</h1>
      <div>
        <h2>Задача 1. Вывести список продуктов</h2>
        <p>
        На странице /products вывести список карточек продуктов по несколько в ряд (Использовать display: grid). Должны отображаться картинка, название и цена. Реализовать api запрос При первоначальной загрузке, вывести 8 продуктов Добавить три кнопки для загрузки разного количества товаров. кнопка – 8 продуктов кнопка – 16 продуктов кнопка – все продукты (или 20 штук)
        </p>
        <ul><li>Реализовать поиск, вывести список существующих категорий и реализовать фильтрацию при нажатии</li></ul>
      </div>
      <div>
        <h2>Задача 2. Создание продукта</h2>
        <p>
        На отдельной странице реализовать создание продукта. Создать форму с полями: название, цена, описание, опубликован (чекбокс/свитч). Поля обязательные и с минимальной валидацией.
        </p>
        <ul><li>Для формы создания можно использовать react-hook-form После успешной отправки формы, сохранить данные в памяти (введенные поля в форме) для вывода в списке.</li></ul>
        <p>API url – <a href="https://fakestoreapi.com/products">https://fakestoreapi.com/products</a></p>
        <p>Для решения задачи необходимо использовать React, Zustand, Antd</p>
      </div>
    </div>
  )
}

export default App
