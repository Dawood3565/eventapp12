import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/signup.module.css'
import { auth, createUserWithEmailAndPassword } from '/pages/firebase'
import { db, collection, addDoc } from '/pages/firebase'


const signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      // Sign up the user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      // Save the user's details to Firestore
      await addDoc(collection(db, 'users'), {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
      })
      // If successful, redirect the user to the login page
      router.push('/login')
    } catch (error) {
      // If there's an error, display it to the user
      setError(error.message)
    }
  }
  
  return (
    <div>
      <div className={styles.logincontainer}>
        <h1 className={styles.h1}>Sign Up</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Email:
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button className={styles.button} type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  )
}

export default signup
