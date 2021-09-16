import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {createEvent} from "../actions/events"

const AddEvent = () => {
  const [title, setTitle] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      alert('Please add a Event')
    }else{
      dispatch(createEvent({title, day, reminder}))
      setTitle('')
      setDay('')
      setReminder(false)
    }
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Event</label>
        <input
          type='text'
          placeholder='Add Event'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Event' className='btn btn-block' />
    </form>
  )
}

export default AddEvent