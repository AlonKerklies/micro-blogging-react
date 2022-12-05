import React, {createContext, Component} from 'react';

export const ThemeContext = createContext();


class ThemeContextProvider extends Component {
    state = { 
isLightMode: true,
dark:{ syntax: 'orange', ui: ' blue' , bg: 'black' },
light:{ syntax: 'grey', ui: 'black' , bg: 'yellow' }
     } 

     toggleTheme = () =>  {
        this.setState( { isLightMode: !this.state.isLightMode  }       )            
         } 



    render() { 
        return (
<ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme    }}>
    {this.props.children}
</ThemeContext.Provider>



        );
    }
}
 
export default ThemeContextProvider;