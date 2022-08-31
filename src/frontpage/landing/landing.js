import React,{Component} from 'react';
import './landing.css'
import '../../cursor/cursor.css'
import { Link } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css'
import scrol from "../../images/scrol.svg"

class Landing extends Component{
  componentDidMount()
  {
    Aos.init({

      offset: 40,
      duration: 300,
      easing: 'ease-in-sine',
    });
  }
   render()
   {
   
       return (
        <>
        <div className='home' id='landing'>
   
        <div>
            
      <p className='intro-1'>Hey There 👋, I am </p>
      <p className='intro-2' > Ujjwal Singh</p>
      <p className='intro-3'> &lt; Web Developer &amp; Programming Geek /&gt; </p>

        </div>
        <div>
          <div className='mypic'></div>
        </div>
     
       
    </div>
    <div className='scrol'>
    <Link  to="Exp" smooth={true} duration={1000} data-aos="fade-up">
      <img src={scrol}/>
      </Link>
      </div>
    </>

       )
   }
}
export default Landing
{/* <Link  to="Exp" smooth={true} duration={1000} data-aos="fade-up"> */}
// data-aos="fade-up"