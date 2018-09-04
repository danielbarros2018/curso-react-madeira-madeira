import React from "react"

export default class Produto extends React.Component {
    state = {
        views: 0
    }

    componentWillMount = () => {
        this.state.title = "Cama de Casal"
        this.state.description = "Cama de Casal ué!"
        this.state.value = 1253.21
    }

    render () {
        console.log(this.props)
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.description}</p>
                <span>R$ {this.state.value}</span>
                <br/>
                <div>{this.state.views}</div>
            </div>
        )
    }
}