import {type ClassValue } from 'clsx'

export type CommonProps = {
    className?: ClassValue;
    style?: React.CSSProperties;
}


export type CommonPropsWithoutChildren = Omit<CommonProps, 'children'>;