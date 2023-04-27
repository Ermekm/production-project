import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { type FC } from 'react'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation()

    const reloadPage = (): void => {
        location.reload()
    }

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Something went wrong')}</p>
            <Button onClick={reloadPage}>
                {t('Reloade page')}
            </Button>
        </div>
    )
}
