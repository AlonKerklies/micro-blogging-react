import React, {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class TweetList extends Component {
    static contextType = ThemeContext;
    render() { 


        const {isLightMode,light,dark} = this.context;
        const theme = isLightMode? light : dark;

        return (



 <div className='Tweet-List' style={{background: theme.syntax, color: theme.bg}}>
<ul>
<li style={{background: theme.ui}}>test number 1</li>
<li style={{background: theme.ui}}>ach shli shomeaa?</li>
<li style={{background: theme.ui}}>its a lon night</li>
</ul>
</div> 
          );
    }
}
 
export default TweetList;