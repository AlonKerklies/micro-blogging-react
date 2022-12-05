import React, {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class navBar extends Component {
//  static contextType = ThemeContext;


    render() { 


         return (     
            <ThemeContext.Consumer>{(context)  =>{
                 
                const {isLightMode,light,dark} =  context;
                const theme = isLightMode? light : dark;
                
                return(

    <nav style={{background: theme.ui, color: theme.syntax}}>
        <ul  >
        <li>home</li>
        <li>Profile</li>
        </ul>
    </nav>
            ) }} 

    </ThemeContext.Consumer>  
       );
    }
}
 
export default navBar;