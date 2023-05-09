import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Portal.module.scss';

interface PortalProps {
    children?: ReactNode;
    parent?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        parent = document.body,
    } = props;
    return createPortal(children, parent);
};
