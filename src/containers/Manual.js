import React, { Component } from 'react';
import Card from '../components/card'
import CardNGVD from '../components/cardNGVD'
import CardRight from '../components/cardRigth'



class Manual extends Component{
    render() {
        return(
            <div>
                <Card/>
                <CardNGVD/>
                <CardRight/>
            </div>
           
           
        );
    }
}


export default Manual;