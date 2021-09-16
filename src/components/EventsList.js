import { useState} from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Header from './Header'
import Events from './Events'
import AddEvent from './AddEvent'

const EventsList = () => {
    const [showAddEvent, setShowAddEvent] = useState(false)
    const events = useSelector((state) => state.eventsReducer)
    
    return (
        <div className='container'>
            <Header
            onAdd={() => setShowAddEvent(!showAddEvent)}
            showAdd={showAddEvent}
            />
            <Route
            path='/'
            exact
            render={(props) => (
                <>
                {showAddEvent && <AddEvent />}
                {events.length > 0 ? (
                    <Events
                    events={events}
                    />
                ) : (
                    <p>'No Events To Show'</p>
                )}
                </>
            )}
            />
        </div>
    )
}

export default EventsList
