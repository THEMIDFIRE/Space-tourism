import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <>
        <section className="home">
            <div className="homeContent">
                <h5>so, you want to travel to</h5>
                <h1>space</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="homeBtn">
                <NavLink to="/Space-tourism/destination" className="btn">explore</NavLink>
            </div>
        </section>
        </>
    )
}
export default Home