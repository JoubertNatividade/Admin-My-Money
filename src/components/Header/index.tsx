import { Container, Content } from "./styles";

import logoImg from '../../assets/logo.svg'

interface HeaderPropsModal {
    onNewModalTransactions: () => void;
}


export function Header({ onNewModalTransactions }: HeaderPropsModal) {


    return (
        <Container>
            <Content>

                <img src={logoImg} alt="Logo" />

                <button onClick={onNewModalTransactions} >Novo cadastro</button>




            </Content>
        </Container>
    )
}