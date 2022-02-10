import styled from "styled-components";
import { darken, transparentize } from "polished";


export const Container = styled.form`

    h2 {
        color: var(--text-title);
        font-size: 1.5rem;

        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding:0 1.5rem;
        height: 4rem;
        border-radius: 0.5em;

        border: 1px solid #d7d7d7;
        background: #444;
        color: #fff;

        font-size: 1rem;

        &::placeholder {
            color: #fff;
        }
        & + input {
            margin-top: 0.5rem;
        }

    }

    button[type="submit"] {
        width: 100%;
        padding:0 1.5rem;
        height: 4rem;
        border-radius: 0.5em;
        border: 0;
        color: #fff;
        font-size: 1rem;
        margin-top: 2rem;
        background: var(--blue);

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.7);
        }

    }

`

export const ContentButtons = styled.div`

    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`

interface ButtonRadiosProps {
    isActive: boolean;
    colorActive: 'green' | 'red'
}


const colors = {
    green: '#33cc95',
    red: '#e52e4d'
}

export const ButtonRadios = styled.button<ButtonRadiosProps>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #d7d7d7;

    font-size: 1rem;

    padding:0 1.5rem;
    height: 4rem;
    border-radius: 0.5em;

    background: ${(props) => props.isActive
        ? transparentize(0.7, colors[props.colorActive]) : 'transparent'

    };

    &:hover {
        border-color: ${darken(0.7, '#d7d7d7')}
    }

`