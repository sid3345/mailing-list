import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchSurveys} from '../../actions'

class surveyList extends Component {

    componentDidMount(){
        this.props.fetchSurveys()
    }

    renderSurveys(){
        return this.props.surveys.reverse().map(survey =>{
            return(
                <div className = 'card blue-grey darken-1' key = {survey._id}>
                    <div className = 'card-content'>
                        <span className = 'card-title white-text' >
                            {survey.title}
                        </span>
                        <p className = 'white-text'>
                            {survey.body}
                        </p>
                        <p className = 'right white-text'>
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>

                </div>
            )
        })
    }

    render() {
        return (
            <div>
              {this.renderSurveys()}  
            </div>
        )
    }
}

function mapStateToProps({ surveys }){
    return { surveys }
}

export default connect(mapStateToProps , {fetchSurveys})(surveyList)
