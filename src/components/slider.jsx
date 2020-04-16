import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("http://api.dev.cakeiteasy.no/api/store/bakeries/?country_code=no")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
        }
      )
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4

    }
    const items = this.state.items
    console.log(items)
    return (
      <div>
        <p style={{borderBottom:"0.5px gray solid",margin:"20px"}} >The best bakaries</p>
        <Slider style={{width:"90%",margin:"5%"}} {...settings}>
          {items.map((item) => (<div><img style={{width:"100%",height:"50px"}} src={`http://api.dev.cakeiteasy.no/api/store/images/${item.id}/?size=small_url&compress_type=webp`} /></div>))}
        </Slider>
      </div>
    );


    
  }
}