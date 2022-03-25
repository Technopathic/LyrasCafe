import Photo from '../components/Photo'
import ClickArrow from '../components/ClickArrow'

const Home = () => (
    <main className="flex flex-col min-h-screen w-full max-w-5xl m-auto relative items-center">
        <section className="flex flex-col h-full w-full max-w-3xl m-auto items-center relative">
            <ClickArrow />
            <a href="https://www.instagram.com/lyra.cafe/" className="no-underline" target="_blank"  rel="noopener noreferrer">
                <Photo />
            </a>
        </section>
        <div className="relative md:fixed bottom-0 md:right-5 flex justify-center">
            <img src="/site-images/cin.gif" alt="cinnamon roll" />
        </div>
    </main>
)

export default Home