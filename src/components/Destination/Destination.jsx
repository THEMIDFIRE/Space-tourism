import { useState, useEffect } from 'react';
import './Destination.scss';
import data from '../../data.json';

const Destination = () => {

    useEffect(() => {
        document.body.className = '';
        document.body.classList.add('destination-bg');
    }, []);

    const { destinations } = data;
    const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

    const handleDestinationClick = (destination) => {
        setSelectedDestination(destination);
    };

    return (
        <section className="destination">
            <div className='head'><h5><span>01</span> Pick your destination</h5></div>
            <div className='body'>
                <div className="destinationImg">
                    <img src={selectedDestination.images.webp} alt={selectedDestination.name} />
                </div>
                <div className="content">
                    <nav className="destinationNav">
                        {destinations.map((destination) => (
                            <button
                                aria-label='{destination.name}'
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
                            <p className="description">{selectedDestination.description}</p>
                            <div className="destinationInfo">
                                <div className="destinationDistance">
                                    <h5 className='subTitle'>avg. distance</h5>
                                    <p className='subTxt'>{selectedDestination.distance}</p>
                                </div>
                                <div className="destinationTime">
                                    <h5 className='subTitle'>est. travel time</h5>
                                    <p className='subTxt'>{selectedDestination.travel}</p>
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