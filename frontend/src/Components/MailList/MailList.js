import './MailList.css'

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Save time, Save money!</h1>
      <span className='mailDesc'> Sign Up and We'll Send The Best Deals To You</span>
      <div className='mailInputContainer'>
        <input type='text' placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
