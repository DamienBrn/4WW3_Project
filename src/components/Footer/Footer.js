
import React from 'react';
import './Footer.css'

class Footer extends React.Component {

    render() { 
        return (  

            <footer className="footer_container">
              
              <div className="content center_vertically">
                <div>
                    Contact Info
                </div>

                <div>
                    Site Map
                </div>

                <div>
                    Social Media
                </div>
            </div>

            </footer>

        )
    }




    constructor(props) {
        super(props);
    }

}
 
export default Footer