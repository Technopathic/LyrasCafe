import Photo from '../components/Photo'

const Home = () => (
    <main className="flex flex-col min-h-screen w-full max-w-5xl m-auto">
        <section className="flex flex-col h-full w-full max-w-3xl m-auto items-center">
            <a href="https://www.instagram.com/lyra.cafe/" className="no-underline" target="_blank"  rel="noopener noreferrer">
                <Photo />
            </a>
            {/*<h1 className="mb-4">Hi, I'm Lyra 👋</h1>*/}
        </section>
    </main>
)

export default Home