// SurveyNew shows SurveyForm and SurveyReview

import React, { Component } from 'react'
import SurveyForm from './SurveyForm'
import { reduxForm } from 'redux-form'
import SurveyFormReview from './SurveyFromReview'

class SurveyNew extends Component {
    
    state = {
        showFormReview : false
    }

    renderContent(){
        if(this.state.showFormReview){
            return <SurveyFormReview onCancel = {() =>this.setState({showFormReview : false})}/>    //callback function has defined
        }
        return <SurveyForm onSurveySubmit = {() =>this.setState({showFormReview : true})} />     //callback function has defined
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form : 'surveyForm'
}) (SurveyNew)
