import useFetch from '../../Hooks/useFetch';
import './Featured.css'

const Featured = () => {

  const { data, loading, error } = useFetch("/hotels/countByCity?cities=berlin,madrid,london");

  return (
    <div className='featured'>
      { loading ? ("Loading plese wait") : (
      <> 
      <div className='featuredItem'>
      <img src='https://images.unsplash.com/photo-1552729434-cd6c86ce3378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='Nothing found' className='featuredImg'/>

        <div className='featuredTitles'>
            <h1>berlin</h1>
            <h2>{data[0]}</h2>
        </div>
      </div>

      <div className='featuredItem'>
      <img src='https://plus.unsplash.com/premium_photo-1661962713025-a225a4d2521f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='Nothing found' className='featuredImg' />

        <div className='featuredTitles'>
            <h1>madrid</h1>
            <h2>{data[1]}</h2>
        </div>
      </div>

      <div className='featuredItem'>
      <img src='https://plus.unsplash.com/premium_photo-1661962355847-9d03ce8bc740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='Nothing found' className='featuredImg'/>

        <div className='featuredTitles'>
            <h1>london</h1>
            <h2>{data[2]}</h2>
        </div>
      </div> 
       </>)}
    </div>
  )
}

export default Featured
