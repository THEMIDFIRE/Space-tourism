import { useState, useEffect } from "react";
import "./Crew.scss";
import data from '../../data.json';

const Crew = () => {
    useEffect(() => {
        document.body.className = '';
        document.body.classList.add('crew-bg');
    }, []);

    const [crew, setCrew] = useState([]);
    const [selectedCrew, setSelectedCrew] = useState(null);

    useEffect(() => {
        setCrew(data.crew);
        setSelectedCrew(data.crew[0]);
    }, []);

    const handleCrewClick = (member) => {
        setSelectedCrew(member);
    };

    return (
        <section className="crew">
            <h5><span>02</span> Meet your crew</h5>

            {selectedCrew && (
                <div className="crewDetails">
                    <div className="crewContent">
                        <h4 className="crewRole">{selectedCrew.role}</h4>
                        <h2 className="crewName">{selectedCrew.name}</h2>
                        <p className="crewBio">{selectedCrew.bio}</p>
                    </div>
                    <div className="crewImg">
                        <img src={selectedCrew.images.webp} alt={selectedCrew.name} />
                    </div>
                </div>
            )}
            <nav className="crewNav">
                {crew.map((member, index) => (
                    <button
                        key={index}
                        onClick={() => handleCrewClick(member)}
                        className={selectedCrew && selectedCrew.name === member.name ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </nav>
        </section>
    );
};

export default Crew;
