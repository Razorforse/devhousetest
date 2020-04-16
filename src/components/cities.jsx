import React from "react"

class Cities extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }


    componentDidMount() {
        fetch("http://api.dev.cakeiteasy.no/api/store/cities/?country_code=no&most_popular=true")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Загрузка...</div>;
        } else {
          return (
            <div>
              <p style={{margin:"20px",fontSize:"25px"}}>Our most popular location</p>
              <ul style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                {items.map(item => (
                  <li style={{listStyleType:"none",margin:"0 20% 0 10%",flex:"1"}} key={item.name}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      }
    
}

export default Cities
