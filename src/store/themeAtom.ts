import { AtomEffect, atom, useRecoilCallback, useRecoilValue } from "recoil";


export type Theme = 'light' | 'dark';


const localStorageEffect= (key: string): AtomEffect<Theme> => ({setSelf, onSet}) => {
    const stored= localStorage.getItem(key)
    if (stored === 'dark' || stored === 'light') {
        setSelf(stored)
    }

    onSet( (newValue, _, isReset) => {
        if (isReset) {
            localStorage.removeItem(key)
        }
        else {
            localStorage.setItem(key, newValue)
        }
    } )
}


export const ThemeAtom = atom<Theme>({
    key: 'ThemeAtom',
    default: 'light',
    effects: [localStorageEffect('theme')]
})


export const useTheme= () => {
    return useRecoilValue(ThemeAtom)
}


export const useToggleTheme= () => {
    return useRecoilCallback( (ctx) => () => {
        ctx.set(ThemeAtom, (theme) => (theme === 'light' ? 'dark' : 'light'))
    }, [] )
}