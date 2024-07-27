import type { FC, ReactNode } from 'react';
import { Navigator } from './navigator';

type Props={
    children:ReactNode
}

export const Layout:FC<Props> = ({children}) => {
    return (
        <div>
            {/* <Navigator /> */}
            {children}
        </div>
    );
};