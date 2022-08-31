import React,{Component} from 'react';
import './items.css'
// import 'aos/dist/aos.css'
// import Aos from 'aos';
class Item extends Component{
    // componentDidMount()
    // {
    // Aos.init({
 
    //     offset: 40,
    //     duration: 500,
    //     easing: 'ease-in-sine',
    //   });
    // }
   
    render(){
        return(
           <div onMouseOver={this.props.unloop} onMouseOut={this.props.loop} data-aos="fade-up" className="Eitem" >
             
             <a  href={this.props.link}>
              <div data-aos="fade-up" className="desk">{this.props.desc}</div>
              <img src={this.props.image}></img>
             <div  className="overlay">
             </div>
             </a>
             
           </div>
        )
    }
}
export default Item;