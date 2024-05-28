import { useState } from 'react';
import './Destination.scss';
import data from '../../../public/data.json'; // Import JSON data directly

const Destination = () => {
    const { destinations } = data;
    const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

    const handleDestinationClick = (destination) => {
        setSelectedDestination(destination);
    };

    return (
        <section className="destination">
            <div className='destinationHead'><h5><span>01</span> Pick your destination</h5></div>
            <div className='destinationBody'>
                <div className="destinationImg">
                    <img src={selectedDestination.images.webp} alt={selectedDestination.name} />
                </div>
                <div className="destinationContent">
                    <nav className="destinationNav">
                        {destinations.map((destination) => (
                            <button
                                key={destination.name}
                                onClick={() => handleDestinationClick(destination)}
                                className={selectedDestination && selectedDestination.name === destination.name ? 'active' : ''}
                            >
                                {destination.name}
                            </button>
                        ))}
                    </nav>
                    {selectedDestination && (
                        <div className="destinationDetails">
                            <h2 className="destinationName">{selectedDestination.name}</h2>
                            <p className="destinationDescription">{selectedDestination.description}</p>
                            <div className="destinationInfo">
                                <div className="destinationDistance">
                                    <h5>AVG. DISTANCE</h5>
                                    <p>{selectedDestination.distance}</p>
                                </div>
                                <div className="destinationTime">
                                    <h5>EST. TRAVEL TIME</h5>
                                    <p>{selectedDestination.travel}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Destination;