import React from 'react';
import './About.css';
import '../../cursor/cursor.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
class About extends React.Component {
    componentDidMount()
    {
  
      Aos.init({
   
       offset: 40,
       duration: 500,
       easing: 'ease-in-sine',
     });
    }
    render(){
        return (
            <div className="About Hover">
             <div className="cover row"><div className="col-sm-6 cover2"></div><div className="col-sm-6 cover2"></div></div> 
               <div data-aos="fade-up" className="heading"><div className="content">About Me 👨‍🎓</div></div>
                 <div data-aos="fade-up" className="para">
                Hi, I'm Ujjwal, a self-taught Web developer and Competitive Programmer. I'm currently working as a mentor and full-stack developer at Software Incubator(Research &amp; Development centre of our college), Pursuing B.TECH from Ajay Kumar Garg Engineering College Ghaziabad.
 I'm an absolute geek and love geeking out on all things. 
 My favorite development stack at the moment is React.Js.
                 </div>

            </div>
        )
    }
}
export default About