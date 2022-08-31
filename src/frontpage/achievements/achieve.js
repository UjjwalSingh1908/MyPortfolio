import React,{Component} from 'react';
import './achieve.css'
import Item from '../achievements/items/items'
import Aos from 'aos';
import 'aos/dist/aos.css'
class Achieve extends Component{
    componentDidMount()
  {

    Aos.init({
 
     offset: 40,
     duration: 500,
     easing: 'ease-in-sine',
   });
  }
    state=
    {
        images:[
         
            {
                img:"/assets/cicada.jpeg",
                des:"Secured 5th position at Cicada 3301:reinvented, the National Level Hackathon."
            },
            {
                img:"/assets/ment.jpeg",
                des:"Mentored at SINTAX (Workshop on Competitive Programming) with 200+ Participants"
            },
            
            {
                img:"/assets/lc.jpeg",
                des:"Solved 250+ questions(Data Structures & Algorithms) on Leetcode."
            } ,{
                img:"/assets/si.jpeg",
                des:"Member of Software Incubator: the research and development centre of AKGEC. Working with  a team of 44 members for cultivating technical activities, developing and maintaining college projects."
            },
           
        ]
    }
   render()
   {
       return (
            <div className="achieve">
                <div data-aos="fade-up" className="heading"><div className="content">Achievements🌟</div></div>
             <div className="cover">
             
             <div className="padding">
             <div className="scroll d-flex justify-content-around flex-wrap">
                {
                    this.state.images.map(e=>{
                        return(
                            
                            <Item data-aos="fade-up" className="item"  image={e.img} desc={e.des}></Item>
                            
                        )
                    })
                }
             </div>
             </div>
             </div>
            </div>
       )
   }
}
export default Achieve