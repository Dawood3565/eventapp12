import { useEffect, useState } from 'react';
import styles from '../styles/joinevent.module.css';
import {db,doc, getDocs, collection} from '/pages/firebase'
const seedetail = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    async function fetchEventsData() {
      const querySnapshot = await getDocs(collection(db, 'events'));
      const eventsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDetails(eventsData);
    }

    fetchEventsData();
  }, []);
  return (
    <div className={styles.cardcontainer}>
      <h1>Events</h1>
      {details.map((event) => (
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
  );
};

export default seedetail;
