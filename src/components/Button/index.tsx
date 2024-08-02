import { ButtonProps } from "./@types";
import * as S from './style'

export function Button({ children, type, color, fn, className }: ButtonProps) {
    return (
        <S.BTN 
            $type={type} 
            $color={color}
            onClick={fn}
            className={className}
        >{children}</S.BTN>
    )
}