import React,{Component} from 'react';
import './items.css'
import 'aos/dist/aos.css'
import Aos from 'aos';
class Item extends Component{
    componentDidMount()
    {
    Aos.init({
 
        offset: 40,
        duration: 500,
        easing: 'ease-in-sine',
      });
    }
    render(){
        return(
           <div data-aos="fade-up" className="item2" >
              <div data-aos="fade-up" className="desk">{this.props.desc}</div>
             <img src={this.props.image}></img>
             <div className="overlay">
             </div>
             
           </div>
        )
    }
}
export default Item;