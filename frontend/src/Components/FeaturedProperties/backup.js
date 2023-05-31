import useFetch from '../../Hooks/useFetch'
import './FeaturedProperties.css'

const FeaturedProperties = () => {

const {data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className='fp'>
       {loading ? ("loading...")  :  <> (  <div className='fpItem'>
      <img src='https://images.unsplash.com/photo-1613553483056-c8cb4c5d2a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' className='fpImg' alt='Nothing to post' />
      <span className='fpName'>Spared Hotels</span>
      <span className='fpCity'>Nairobi</span>
      <span className='fpPrice'>Starting from ksh. 5000</span>
      <div className='fpRating'>
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className='fpItem'>
      <img src='https://images.unsplash.com/photo-1634344656611-0773d8dbbe2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80' className='fpImg' alt='Nothing to post' />
      <span className='fpName'>Spared Hotels</span>
      <span className='fpCity'>Nairobi</span>
      <span className='fpPrice'>Starting from ksh. 5000</span>
      <div className='fpRating'>
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className='fpItem'>
      <img src='https://images.unsplash.com/photo-1679939153983-07827f66e672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' className='fpImg' alt='Nothing to post' />
      <span className='fpName'>Spared Hotels</span>
      <span className='fpCity'>Nairobi</span>
      <span className='fpPrice'>Starting from ksh. 5000</span>
      <div className='fpRating'>
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className='fpItem'>
      <img src='https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' className='fpImg' alt='Nothing to post' />
      <span className='fpName'>Spared Hotels</span>
      <span className='fpCity'>Nairobi</span>
      <span className='fpPrice'>Starting from ksh. 5000</span>
      <div className='fpRating'>
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>
      )</>}
    </div>
  )
}

export default FeaturedProperties
