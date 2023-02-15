import { Suspense, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import AboutPageLazy from './pages/AboutPage/AboutPage.lazy'
import MainPageLazy from './pages/MainPage/MainPage.lazy'
import { Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy />} />
                    <Route path={'/'} element={<MainPageLazy />} />
                </Routes>
            </Suspense>

        </div>
    )
}

export default App