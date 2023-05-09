import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Sign in')}
            </Button>
            {/* eslint-disable */}
            <Modal isOpen={isModalOpen} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ut. Repellat, doloremque. Dolore laudantium ullam at. Repellendus nihil deleniti eum cumque aspernatur error. Eveniet, error. Obcaecati impedit commodi ab beatae!
            </Modal>
        </div>
    );
};
