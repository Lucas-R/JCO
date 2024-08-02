import { styled, css } from "styled-components"

type BTNProps = {
    $type: string
    $color? : string
}

export const BTN = styled.button<BTNProps>`
    padding: 0 3.5rem;
    font-size: 1.3rem;
    min-height: 4.5rem;
    font-weight: 500;
    text-transform: uppercase;
    border-radius: ${props => props.theme.radius.sm};

    ${props => {
        switch (props.$type) {
            case "outline":
                return css`
                    border: .1rem solid ${props.$color};
                    color: ${props.$color};
                `
            case "primary":
            
                break;
        }
    }}
`;