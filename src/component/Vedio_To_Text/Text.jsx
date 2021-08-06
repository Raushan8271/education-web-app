import React from 'react'
import { useState, useEffect } from 'react'
import './Text.css'

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()
console.log(mic)

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const Text = () => {
  const [Listing, setListing] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])

  useEffect(() => {
    handleListen()
  }, [Listing])

  const handleListen = () => {
    if (Listing) {
      mic.start()
      mic.onend = () => {
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {}
    }
    mic.onstart = () => {
      console.log("you start caption")
    }

    mic.onresult = event => {
      let Translation = Array.from(event.results)

        .map(result => result[0])
        .map(result => result.Translation)
        .join('')
      //   console.log(Translation)
          Translation= Translation.charAt(0).toUpperCase() + Translation.slice(1);

      setNote(Translation)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')
  }
  return (
    <>
      <h1>Voice Notes</h1>
      <div className='container'>
        <div className='box'>
          <h2>Current Note</h2>
          {Listing ? <span>🎙️</span> : <span>🛑🎙️</span>}
          <button onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          <button onClick={() => setListing(prevState => !prevState)}>
            Start/Stop
          </button>
          <p>{note}</p>
        </div>
        <div className='box'>
          <h2>Notes</h2>
          {savedNotes.map((n, index) => (
            <li key={index}>{n}</li>
          ))}
        </div>
      </div>
    </>
  )
}

export default Text
