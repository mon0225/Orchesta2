import React, { Component } from 'react';
import Grid from '../components/gridMat';
import GridRight from '../components/gridMatRight'



class Home extends Component{
    render() {
        return(
            <div>
                <Grid/>
                <GridRight />
            </div>
           
           
        );
    }
}


export default Home;