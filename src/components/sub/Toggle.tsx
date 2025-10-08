'use client'
import React, { useEffect, useState, useRef, ReactNode } from "react"
import { moonIcon, sunIcon } from "@/assets"
import { reactLocalStorage } from "reactjs-localstorage"
import { motion } from "framer-motion"

interface ToggleProps {
    children: ReactNode;
}

const Toggle = ({ children }: ToggleProps): React.ReactElement => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false)
    const mainRef = useRef<HTMLElement>(null)

    const addDarkTheme = (): void => {
        if (mainRef.current) {
            mainRef.current.classList.add('dark')
        }
        document.documentElement.classList.add('dark')
        setDarkTheme(true)
    }

    const removeDarkTheme = (): void => {
        if (mainRef.current) {
            mainRef.current.classList.remove('dark')
        }
        document.documentElement.classList.remove('dark')
        setDarkTheme(false)
    }
    
    useEffect(() => {
        const darkTheme = reactLocalStorage.get('darkTheme')
        const darkThemeParsed = darkTheme !== undefined && JSON.parse(darkTheme as string)

        const systemTheme = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

        if(darkTheme === undefined) {
            systemTheme ? addDarkTheme() : removeDarkTheme()
        } else {
            darkThemeParsed ? addDarkTheme() : removeDarkTheme()
        }
    }, [])

    const handleToggleClick = (): void => {
        if(!darkTheme) {
            addDarkTheme()
            reactLocalStorage.set('darkTheme', true)
        } else {
            removeDarkTheme()
            reactLocalStorage.set('darkTheme', false)
        }
    }

    return (
        <main ref={mainRef}>
            <div className="bg-zinc-300 dark:bg-gradient-to-r dark:bg-neutral-900">
                <div className="max-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px] sm:pl-[80px] sm:pr-5 overflow-hidden">
                    <button 
                        onClick={handleToggleClick}
                        className="fixed right-14 s:right-10 top-10 text-yellow-600 hover:text-yellow hover:text-yellow-500 z-40"
                        aria-label={darkTheme ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        <motion.span 
                            animate={{scale: darkTheme ? 0 : 1}}
                            className="absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800"
                        >
                            {moonIcon}
                        </motion.span>
                        <motion.span 
                            animate={{scale: darkTheme ? 1 : 0}}
                            className="absolute block rounded-full bg-zinc-50 p-1 text-3xl dark:bg-zinc-800"
                        >
                            {sunIcon}
                        </motion.span>
                    </button>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Toggle