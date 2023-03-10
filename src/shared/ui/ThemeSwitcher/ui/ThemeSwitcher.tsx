import { useTheme, Theme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button } from 'shared/ui/Button/Button'
import { type FC } from 'react'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}>
            {theme === Theme.DARK
                ? <DarkIcon />
                : <LightIcon />}
        </Button>
    )
}
