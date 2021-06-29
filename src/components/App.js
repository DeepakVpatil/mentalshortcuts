import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import ShortcutList from './ShortcutList';
import Footer from './Footer';
import { Button } from 'react-bootstrap';
import CamButton from './camButton'

class App extends Component{
    render() {
        return (
            <div>
  
                      <h2>Welcome to DevOps Guru</h2>
                      <hr/>
                      <ShortcutList/>
                      <hr/>
                    
                      <div className="card">
                      <Link to ='shortcut_form'>  <h4>Create a new shortcut</h4></Link>  
                      </div>
                      <hr/>
                     <CamButton/>
                     <Footer/>  
            </div>
        )
    }
}

export default App;
