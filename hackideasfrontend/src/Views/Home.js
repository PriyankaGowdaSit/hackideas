import { Route, Switch , BrowserRouter} from 'react-router-dom';
import AppBarComponent from "../Components/AppBar";
import LoginUser from "../Components/LoginUser";
import MainPage from './MainPage';
export default function Home(){

  

    return(
        <>
        <AppBarComponent/>
        
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginUser} />
          <Route path='/ideas/id-:loginId' component={MainPage} />
        </Switch>
        </BrowserRouter>
       
        </>

    )
}