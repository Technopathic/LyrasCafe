import styled from '@emotion/styled'

const Container = styled.div`
    height: 540px;
    width: 480px;
    background: #FFFFFF;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.05);
    transform: rotate(-5deg);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section {
        background: gray;
        flex-grow: 1;
        max-width: 440px;
        max-height: 400px;
    }

    p {
        width: 100%;
        height: 140px;
        text-align: center;
        margin-top: 18px;
        font-family: Fall-In-Love;
        font-size: 3em;
    }

    @media(max-width: 425px) {
        width: 320px;
        height: 360px;

        section {
            max-width: 280px;
            max-height: 250px;
        }

        p {
            margin-top: 12px;
            height: 40px;
            font-size: 2rem;
        }
    }
`

const Photo = () => (
    <Container>
        <section>
            <img src="/content-images/strawberry-matcha-tartlets.png" alt="strawberry-matcha-tartlets" />
        </section>
        <p>Hi, I'm Lyra!</p>
    </Container>
)

export default Photo