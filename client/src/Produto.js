import React from "react"

export default class Produto extends React.Component {
    state = {
        views: 0
    }

    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <span>R$ {this.props.value}</span>
                <br/>
                <div>{this.state.views}</div>
            </div>
        )
    }
}