import styled from '@emotion/styled'

const Container = styled.a`
    height: 350px;
    width: 320px;
    background: #FFFFFF;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.05);
    transform: ${props => `rotate(${props.rotate}deg)`};
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: all ease-in 180ms;

    &:hover {
        transform: scale(1.2);
    }

    section {
        flex-grow: 1;
        max-width: 300px;
        max-height: 260px;
        overflow: hidden;
    }

    p {
        width: 100%;
        height: 20px;
        text-align: center;
        margin-top: 18px;
        font-family: Fall-In-Love;
        font-size: 1.5em;
    }

    @media(max-width: 425px) {
        section {
            max-width: 280px;
            max-height: 280px;
        }

        p {
            margin-top: 12px;
            height: 40px;
            font-size: 1.5rem;
        }
    }
`

const Photo = (props) => (
    <Container rotate={props.rotate} href={props.url} className="no-underline" target="_blank"  rel="noopener noreferrer">
        <section>
            <img src={`/content-images/${props.content}`} alt={props.content} />
        </section>
        <p>{props.title}</p>
    </Container>
)

export default Photo