import './Contact.css'
import { Link } from 'react-router-dom'
import arrow from '../about/arrow.svg'

function contact() {
  return (
   <>
    <div className='contactD'>
      <div className='contact'>
        <p>Number : </p>
        <a href="">+998 97 624 24 77</a>
      </div>
      <div className='contact'>
        <p>Instagram :</p>
        <a href="https://www.instagram.com/asror_bek_477/" >Asrorbek Saidmurodov</a>
      </div>
      <div className='contact'>
        <p>Telegram :</p>
        <a href="https://t.me/asrorbek_477">Asrorbek</a>
      </div>
    </div>
    <Link className='btnLink' to={"/"}><button className='btn'><img src={arrow} width={20} /><span>BACK HOME</span></button></Link>

   </>
  )
}

export default contact
