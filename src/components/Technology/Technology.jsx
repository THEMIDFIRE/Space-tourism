import { useState, useEffect } from "react";
import "./Tech.scss";
import data from '../../data.json';

const Tech = () => {
    const [technologies, setTechnologies] = useState([]);
    const [selectedTech, setSelectedTech] = useState(null);

    useEffect(() => {
        document.body.className = '';
        document.body.classList.add('tech-bg');

        setTechnologies(data.technology);
        setSelectedTech(data.technology[0]);
    }, []);

    const handleTechClick = (tech) => {
        setSelectedTech(tech);
    };

    return (
        <section className="tech">
            <h5><span>03</span>Space launch 101</h5>
            {selectedTech && (
                <>
                    <div className="content">
                        <nav className="techNav">
                            {technologies.map((tech, index) => (
                                <button
                                    aria-label={tech.name}
                                    key={tech.name}
                                    onClick={() => handleTechClick(tech)}
                                    className={selectedTech.name === tech.name ? 'active' : ''}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </nav>
                        <div className="body">
                            <p>the terminology …</p>
                            <h3>{selectedTech.name}</h3>
                            <p className="description">{selectedTech.description}</p>
                        </div>
                    </div>

                    <div className="techImg">
                        <img src={selectedTech.images.portrait} alt={selectedTech.name} />
                    </div>
                </>
            )}
        </section>
    );
}

export default Tech;
