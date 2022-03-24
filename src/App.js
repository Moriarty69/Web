import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes , Route} from 'react-router-dom';


function App(props) {

    return (
        
        <div className="App-wrapper">
            <div className="container">

                 <Header/>
                 <Navbar/>

                <div className='App-wrapper-content'>
                    <Routes>
                           <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
                           <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                     </Routes>
                </div>

            </div>
        </div>
        
    );
}




export default App;
