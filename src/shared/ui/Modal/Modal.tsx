import { useTheme } from 'app/providers/ThemeProvider';
import { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [cls.open]: isOpen,
    };

    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    };

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}>
                <div
                    className={cls.overlay}
                    onClick={closeHandler}
                    onKeyDown={handleKeyPress}
                >
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
