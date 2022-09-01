import React,{Component} from 'react';
import './myskills.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
class Myskill extends Component{
  componentDidMount()
  {

    Aos.init({
 
     offset: 40,
     duration: 500,
     easing: 'ease-in-sine',
   });
  }
   render()
   {
       return (
         <div className="myskills">
             <div className="cover row"><div className="col-sm-6 cover2"></div><div className="col-sm-6 cover2"></div></div> 
                <div data-aos="fade-up" className="heading"><div className="content">My Skills 📖</div></div>
                <div data-aos="fade-up" className="row padding display">
                
                  <div className="col-sm-4 center"><img src="/assets/react.svg"></img><div class="label">React.JS</div></div>
                  <div className="col-sm-4 center"><img src="/assets/redux.svg"></img> <div class="label">Redux</div></div>
                  <div className="col-sm-4 center"><img  src="/assets/node.svg"></img><div class="label">Node.JS</div></div>
                </div>
                <div data-aos="fade-up" className="row padding display">
                  <div className="col-sm-4 center"><img src="/assets/c.svg"></img><div class="label">C++</div></div>
                  <div className="col-sm-4 center"><img src="/assets/sql.svg"></img><div class="label">SQL</div></div>
                  <div className="col-sm-4 center"><img src="/assets/git.svg"></img><div class="label">Github</div></div>
                </div>
                <div  data-aos="fade-up" className="row padding display">
                  <div className="col-sm-4 center"><img src="/assets/html5.svg"></img><div class="label">Html</div></div>
                  <div className="col-sm-4 center"><img src="/assets/css3.svg"></img><div class="label">Css</div></div>
                  <div className="col-sm-4 center"><img src="/assets/js.svg"></img><div class="label">Javascript</div></div>
                </div>
                <div data-aos="fade-up" className="display2">
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/redux.svg"></img><div class="label">Redux</div></div>
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/react.svg"></img><div class="label">React.JS</div></div>
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/node.svg"></img><div class="label">Node.Js</div></div>
                  </div>
                  <div data-aos="fade-up" className="display2">
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/c.svg"></img><div class="label">C++</div></div>
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/sql.svg"></img><div class="label">SQL</div></div>
                  <div style={{textAlign:"center",width:"33vw"}}><img src="/assets/git.svg"></img><div class="label">Github</div></div>
                  </div>
                  <div data-aos="fade-up" className="display2">
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/html5.svg"></img><div class="label">Html</div></div>
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/css3.svg"></img><div class="label">Css</div></div>
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/js.svg"></img><div class="label">Javascript</div></div>
                </div>
               
           
         </div>       
       )
   }
}
export default Myskill