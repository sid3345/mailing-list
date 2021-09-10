import React from 'react'
import { Link } from 'react-router-dom'
import SurveyList from './surveys/SurveyList'

function Dashboard() {
    return (
        <div>
            <SurveyList />
            <h2>This is admin page.</h2>
            <h4>You will see the email you sent over here.</h4>
                    <h4>Click on add icon at the bottom right of the page to send email to the mailing list</h4>
            <div className = "fixed-action-btn" style = {{paddingRight : "13%"}}>
                <Link to = "/surveys/new" className = "btn-floating btn-large #536dfe indigo accent-2">
                    <i className = "material-icons">add_circle</i>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard
