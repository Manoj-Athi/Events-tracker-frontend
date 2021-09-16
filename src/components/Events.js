import Event from './Event'

const Events = ({ events }) => {
  return (
    <>
      {events.map((event, index) => (
        <Event key={index} event={event} />
      ))}
    </>
  )
}

export default Events