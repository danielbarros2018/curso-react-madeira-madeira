import React from "react"
import {connect} from "react-redux"
import {changeCarninha} from "./actions";

class Home extends React.Component {
    render () {
        console.log(this.props)
        return (
            <div>
                <h1>Home! 123</h1>
                {this.props.carninha}
                <br />
                <br />
                <button onClick={() => this.props.changeCarninha("Maminha")}>
                    Click Aqui
                </button>
            </div>

        )
    }
}

const mapsStateToProps = (state) => ({
        carninha: state.carninha,
        outro: state.test
    })

const mapActionsToProps = {
    changeCarninha
}

export default connect(mapsStateToProps, mapActionsToProps)(Home);