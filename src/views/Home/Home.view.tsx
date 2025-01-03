import React, { useState } from 'react';
import './Home.styles.css';

function Home() {
    interface Event {
        id: number;
        name: string;
    }

    const [events, setEvents] = useState<Event[]>([]);

    return (
        <div className="home-wrapper">
            {events.length === 0 ? (
                <div className='no-events-wrapper'>
                    <div className='no-events'>
                        <h1>No Events Found</h1>
                    </div>
                </div>
            ) : (
                <ul>
                    {events.map((event) => (
                        <li key={event.id}>{event.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Home;
