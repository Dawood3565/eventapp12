
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/createevent.module.css'
import {db, collection, addDoc } from '/pages/firebase'

const CreateEvent = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [invitees, setInvitees] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()
  const [lists, setlists] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault()

    // Add event to Firebase
    try {
        const docRef = await addDoc(collection(db, "events"), {
          title: title,
          date: date,
          time: time,
          location: location,
          description: description,
          invitees: invitees
        });
        console.log("Document written with ID: ", docRef.id);
        router.push('/')
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    // If successful, redirect the user to the event page
    
  }

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.h1}>Create Event</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Title:
            <input
              className={styles.input}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <br />
          <label>
            Date:
            <input
              className={styles.input}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <br />
          <label>
            Time:
            <input
              className={styles.input}
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>
          <br />
          <label>
            Location:
            <input
              className={styles.input}
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <br/>
          <label>
            <p>Description:</p>
            <textarea
              className={styles.textarea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <br/>
          <label>
            Invitees:
            <input
              className={styles.input}
              type="text"
              value={invitees}
              onChange={(e) => setInvitees(e.target.value)}
            />
          </label>
          <br/>
          <button className={styles.button} type="submit">
            Create Event
          </button>
        </form>
      </div>
      <div className={styles.cardcontainer}>
      {lists.map((event) => (
        <div className={styles.card} key={event.id}>
          <div className={styles.cardbody}>
            <h2 className={styles.cardtitle}>{`title: ${event.title}`}</h2>
            <p className={styles.carddiscription}>{event.description}</p>
            <p className={styles.carddate}>{event.date}</p>
            <p className={styles.location}>{event.location}</p>
            <p className={styles.time}>{event.time}</p>
            <p className={styles.invitees}>{event.invitees}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  )
}

export default CreateEvent
