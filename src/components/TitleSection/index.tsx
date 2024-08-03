import { TitleSectionProps } from "./@types";
import * as S from './style'

export function TitleSection({children}: TitleSectionProps) {
    return (
        <S.Title>{children}</S.Title>
    )
}