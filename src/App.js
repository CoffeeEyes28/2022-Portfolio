import React from 'react';
import Display from './components/Display'
import background from './Assets/Images/background1.jpg'

const styles = {
    container: {
    backgroundImage: `url(${background})`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    },
}

function App (){
    return( 
        <div style={styles.container}>
         <Display />
        </div>
        
    );
}




export default App;