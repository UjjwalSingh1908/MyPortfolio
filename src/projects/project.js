import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import './project.css'
import { connectAdvanced } from "react-redux";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Item from './items/items'
export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: true,
    config: config.gentle,
    loop:"",
    items:[]
  };
  x=null
  y=null;
 componentDidMount()
 {
   this.loop();
   Aos.init({

    offset: 40,
    duration: 500,
    easing: 'ease-in-sine',
  });
 }

 MouseOver=()=>
 {
    this.unloop();
    // console.log("hovered")
 }
 loop=()=>
 {

    var self = this;
  this.x=setInterval(function() {
    self.setState({goToSlide:self.state.goToSlide+1})
    // console.log(self.state.goToSlide%5)
  }, 2100);
  this.setState({loop:this.x});
 }
 unloop=()=>
 {
    console.log("kjdfv");
    clearInterval(this.x);
 }
  slides = [
    {
      key: uuidv4(),
      content: <Item 
      
      desc={
        <ul>
          <li>
          A MERN stack web app based on the format of Internshala where students can apply for internships and employers can post internships.</li>
          <li>Tech Used :React Js, Bootstrap, Node Js, Express Js, Mongo dB.
          </li>
        </ul>
      } unloop={this.unloop} loop={this.loop} className={(this.state.goToSlide%5)==1?"up":"low"} link="https://github.com/abhay-111/InternBazaar" image="/assets/internb.jpeg"></Item>
    },
    {
      key: uuidv4(),
      content: <Item   desc={
        <ul>
          <li>
          A platform that connects people to their nearby hospitals having essential COVID facilities. </li>
          <li>Tech Used :React Js, Ant-design, Node Js, Express Js, Mongo dB.
          </li>
        </ul>
      }unloop={this.unloop}loop={this.loop} className={(this.state.goToSlide%5)==3?"up":"low"} link="https://chiranjeev.netlify.app/" image="/assets/chiranjeev.jpeg"> </Item>
    },
    {
      key: uuidv4(),
      content: <Item desc={
        <ul>
          <li>
          It is a fully responsive Youtube Clone made using React.js as FrontEnd, Node.js as a BackEnd, Redux Js for state management &amp; Sequelize (MYSQL) as a Database.
          </li>
        </ul>
      } unloop={this.unloop}loop={this.loop} className={(this.state.goToSlide%5)==3?"up":"low"} link="https://github.com/UjjwalSingh1908/Stremio" image="/assets/stremio.jpeg"> </Item>
    },
    {
      key: uuidv4(),
      content: <Item 
      
      desc={
        <ul>
          <li>
          Developed a platform for a construction business that connects the salespersons asscociated with the company to their respective clients.</li>
          <li>Tech Used :React Js, Ant-design, Hookstate.js, Node Js, Express Js, Mongo dB.
          </li>
        </ul>
      } unloop={this.unloop} loop={this.loop} className={(this.state.goToSlide%5)==1?"up":"low"} link="https://vc-customer.tghtech.com/" image="/assets/vc.jpeg"></Item>
    },
    {
      key: uuidv4(),
      content: <Item 
      
      desc={
        <ul>
          <li> A MERN stack web app in which NGOs and Self Help groups can register and launch a campaign. The campaign can be given different tags i.e education, health, food or Money Raise, etc.
          </li>
<li>People can come to the web app and can see the upcoming and ongoing campaigns in their city. And can donate the money or contact the NGO and Self help groups.</li>
          
        </ul>
      } unloop={this.unloop} loop={this.loop} className={(this.state.goToSlide%5)==1?"up":"low"} link="https://github.com/Abhishek-Srivas/Daan" image="/assets/daan.jpeg"></Item>
    },
  
  ].map((slide, index) => {
    return { ...slide};
  });
  
  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };
  Right=()=>
  { 
    this.setState((prevState) => ({
      goToSlide: prevState.goToSlide-1
  }))
  this.unloop();
  for(let i=0;i<20;i++)
  {
     if(i==9)
     {
        this.loop();
     }
  }
  }
  Left=()=>
  {
    this.setState((prevState) => ({
      goToSlide: prevState.goToSlide +1
  }))
  this.unloop();
  for(let i=0;i<20;i++)
  {
     if(i==9)
     {
        this.loop();
     }
  }
  
  }
  render() {
    return (
      
     <div className="projects">
       <div className="row position">
         <div  className="col-sm-6 col-xs-12 bg"></div>
         <div  className="col-sm-6 bg2"></div>
       </div>
       <div data-aos="fade-up" className="heading"><div className="content">My Projects 📚</div></div>
        <div data-aos="fade-up" className="arrows d-flex justify-content-between">
          <div  type="button" onClick={this.Right}  className="rButton"><img src="/assets/rightA.svg"></img></div>
          <div type="button" onClick={this.Left} className="lButton"><img src="/assets/leftA.svg"></img></div>
        </div>   
      <div data-aos="fade-up" className="setting">
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
      
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          
      </div>
      </div>
      </div>
    );
  }
}
