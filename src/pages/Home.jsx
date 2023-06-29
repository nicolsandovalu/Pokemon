import image from "../image/Pokemonfoto.jpg";

const Home = () => {

    return(

        <div className="home m-5">
            <h1>Descubre tu Pokemón</h1>
            <img className="Pokemonfoto" src={image} alt="Pokemon" />
        </div>
    )
}

export default Home