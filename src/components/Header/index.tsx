import { HeaderProps } from "./@types"
import * as S from "./style"

export function Header({src, opacity = 0, children} : HeaderProps) {
    return (
        <S.WrapperHeader $src={src} $opacity={opacity}>
            <S.ContainerHeader>
                { children }
            </S.ContainerHeader>
        </S.WrapperHeader>
    )
}