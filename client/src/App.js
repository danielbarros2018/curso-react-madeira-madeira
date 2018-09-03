import React, { Component } from 'react';

const Line = (props) => (
        <div style={{borderBottom: "solid 2px gray", width: "30%", float: props.right ? "right" : "left"}} />
)

const TitleSection = (props) => (
    <div style={{display: "table", width: "100%"}}>
        <Line/>
        <div style={{width: "40%", float: "left", textAlign: "center"}} />{props.texto1} <strong>{props.texto2}</strong>
        <Line right/>
    </div>
)

export default class App extends Component {
    state = {
        dia: "Quinta-feira",
        semana: ""
    }

    saraiva = (event) => {
        console.log(event);
        this.setState({
            dia: event.target.value,
            semana: this.state.dia
        })
    }


  render() {
    return (
          <div>

              <TitleSection texto1="Semana Louca" texto2="Agosto 2018"/>
              <TitleSection texto1="Semana Louca" texto2="Agosto 2018"/>

              <input onChange={this.saraiva}/>
              <br/>
              <h1>
                {this.state.dia}
                <br/>
                {this.state.semana}
              </h1>
          </div>
    );
  }
}

