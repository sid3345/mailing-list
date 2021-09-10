const keys = require('../../config/keys')

module.exports = (survey) =>{
    return `
        <html>
            <body>
                <div style = "text-align : center">
                    <h3>This is mailing list mail</h3>
                    <p>${survey.body}</p>
                    
                </div>
            </body>
        </html>
    `

    
}