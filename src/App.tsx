
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeButton } from './components/ThemeButton'
import { useEffect, useState } from 'react'
import { useTheme } from './store/themeAtom'
import { Button } from './components/ui/button'


function App() {
    const [count, setCount] = useState(0)
    const theme= useTheme()

    useEffect( () => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(theme)
    }, [theme] )


    return (
        <>
            <ThemeButton />
            <div className='flex justify-center items-center gap-10 m-20'>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className='flex flex-col justify-center items-center gap-10 m-20'>
                <Button variant={'secondary'} onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </Button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}

export default App
