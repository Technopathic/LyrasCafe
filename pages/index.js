import Photo from '../components/Photo'
import data from '../data'

const Home = () => (
    <main className="flex flex-col min-h-screen w-full max-w-5xl m-auto relative items-center">
        <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 my-16">
            {data.content.map((content, i) => (
                <Photo rotate={content.rotate} url={content.url} title={content.title} content={content.content} />
            ))}
        </section>
    </main>
)

export default Home