import styled from '@emotion/styled'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 100px;
    left: -400px;
    transform: rotate(-15deg);

    p {
        text-align: center;
        font-family: Fall-In-Love;
        font-size: 4.25rem;
        color: #323232;
    }

    img {
        width: 30%;
        margin-left: 50%;
    }

    @media(max-width: 425px) {
        transform: rotate(-4deg);
        top: -70px;
        left: 0;
        right: 0;

        p {
            font-size: 2.25rem;
        }

        img {
            display: none;
        }
    }
`

const ClickArrow = () => (
    <Container>
        <p>˗ˋˏ°• Click here •°ˎˊ˗</p>
        <img src="/site-images/arrow.png" />
    </Container>
)

export default ClickArrow