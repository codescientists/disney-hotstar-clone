import Banner from '../Banner'
import Row from '../Row'
import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../Requests";

const Home = () => {

    const [bannerMovies, setBannerMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [romanceMovies, setRomanceMovies] = useState([]);
    const [dramaMovies, setDramaMovies] = useState([]);
    const [animationMovies, setAnimationMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            axios
                .all([
                    axios.get(requests.fetchHotstarTrending),
                    axios.get(requests.fetchActionMovies),
                    axios.get(requests.fetchRomanceMovies),
                    axios.get(requests.fetchDramaMovies),
                    axios.get(requests.fetchAnimationMovies),
                ])
                .then(
                    axios.spread((...responses) => {
                        const hotstarTrending = responses[0].data.results;
                        const actionMov = responses[1].data.results;
                        const romanceMov = responses[2].data.results;
                        const dramaMov = responses[3].data.results;
                        const animationMov = responses[4].data.results;

                        setBannerMovies(hotstarTrending);
                        setActionMovies(actionMov);
                        setRomanceMovies(romanceMov);
                        setDramaMovies(dramaMov);
                        setAnimationMovies(animationMov);
                    })
                )
                .catch(function (error) {
                    console.log(error);
                })
        };

        fetchData();
    }, []);
    return (
        <>
            <Banner movies={bannerMovies} />

            <div className="mx-10 my-8">
                <h2 className="text-2xl font-bold mt-10">Action</h2>
                <Row movies={actionMovies} />
                <h2 className="text-2xl font-bold mt-10">Romance</h2>
                <Row movies={romanceMovies} />
                <h2 className="text-2xl font-bold mt-10">Drama</h2>
                <Row movies={dramaMovies} />
                <h2 className="text-2xl font-bold mt-10">Animation</h2>
                <Row movies={animationMovies} />
            </div>
        </>
    )
}

export default Home