import React, { Component } from 'react';
import CardVC from '../components/cardVC'
import CardVDVC from '../components/cardVDVC'
import CardRight from '../components/cardRigth'



class Manual extends Component{
    render() {
        return(
            <div>
                <CardVC/>
                <CardVDVC/>
                <CardRight/>
            </div>
           
           
        );
    }
}


export default Manual;