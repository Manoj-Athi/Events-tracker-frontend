import { delEvent } from "../actions/events"
import { useDispatch } from "react-redux"

const Event = ({ event}) => {

  const dispatch = useDispatch()

  const style = {
    color: 'red', 
    cursor: 'pointer',
    backgroundColor: "transparent",
    border: "none",
    fontSize: "20px"
  }

  return (
    <div
      className={`Event ${event.reminder && 'reminder'}`}
    >
      <h3>
        {event.title}{' '}
        <button
          type="button"
          style={style}
          onClick={() => dispatch(delEvent(event._id))}
        >X
        </button>
      </h3>
      <p>{event.day}</p>
    </div>
  )
}

export default Event