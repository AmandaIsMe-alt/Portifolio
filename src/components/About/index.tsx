import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";

import { AboutSection } from "./styles";

export const About = () => {
    return (
        <>
            <AboutSection id="About">
                <Container>
                    <Text as="h2" type="heading4" color="grey4" style={{marginBottom: "20px"}}>
                        About me
                    </Text>
                    <Text as="p" type="body1" color="grey2" style={{textAlign: "justify"}} >
                    Sou uma profissional em transição de carreira, da área de Ciências Biológicas, para investir na minha verdadeira paixão: Programação. E, para me aprofundar na minha paixão, hoje faço o curso de Desenvolvedor Full-Stack na melhor escola de programação do Brasil, a Kenzie Academy.
                    E, graças ao curso, estou constantemente trabalhando em projetos utilizando linguagens e tecnologias como: HTML5, CSS3, JavaScript (ES6), ReactJS, Typescript, Web Semântica, Lógica de programação, Controle de versão com git, Programação Orientada a Objetos, Programação Funcional, Metodologias Ágeis, Scrum, Kanban, JIRA, Trello, Github, TDD com Jest, BDD com Cucumber, Noções de UX, Hooks, State Management, Redux, Consumo de APIs, NodeJs, Express, Banco de dados SQL, PostgreSQL, Construção de APIs RESTfull, Programação assíncrona, Python e Django.
                    </Text>
                </Container>
            </AboutSection>
        </>
    );
}