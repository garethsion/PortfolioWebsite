import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form>
            <input type="text" placeholder='Name'/>
            <br/>
            <input type="email" placeholder='Email'/>
            <br/>
            <textarea placeholder='Name'></textarea>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm