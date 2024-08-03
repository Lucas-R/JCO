import { SectionProps } from "./@types";
import * as S from './style'

export function Section({ children, color }: SectionProps) {
    return (
        <S.WrapperSection $color={color}>
            <S.ContainerSection>
                { children }
            </S.ContainerSection>
        </S.WrapperSection>
    )
}