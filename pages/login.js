import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/login.module.css'
import {auth, signInWithEmailAndPassword } from '/pages/firebase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      router.push('/admindashboard')
    } catch (error) {
      alert('Invalid credentials')
    }
  }

  return (
    <div>
      <div className={styles.logincontainer}>
        <h1 className={styles.h1}>Login Page</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Email:
            <input className={styles.input} type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <br />
          <button className={styles.button} type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
