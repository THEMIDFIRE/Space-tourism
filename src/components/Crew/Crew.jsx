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
            <div className="body">
                {selectedCrew && (
                    <>
                        <div className="content">
                            <h5><span>02</span>Meet your crew</h5>

                            <h4 className="crewRole">{selectedCrew.role}</h4>
                            <h3 className="crewName">{selectedCrew.name}</h3>
                            <p className="description">{selectedCrew.bio}</p>
                            <nav className="crewNav">
                                {crew.map((member, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleCrewClick(member)}
                                        className={selectedCrew && selectedCrew.name === member.name ? 'active' : ''}
                                    >
                                        <span>{member.name}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                        <div className="crewImg">
                            <img src={selectedCrew.images.webp} alt={selectedCrew.name} />
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Crew;