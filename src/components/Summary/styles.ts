import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: -8rem;

    div{
        background: var(--shape);
        border-radius: 0.25rem;
        padding: 1.5rem 2rem;
        color: var(--text-title);       

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-weight: 500;
            line-height: 3rem;
            font-size: 2rem;
        }
        &.light-background{
            background: var(--green);
        }
    }
`