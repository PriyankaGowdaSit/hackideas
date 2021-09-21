import { Route, Switch , BrowserRouter} from 'react-router-dom';
import AppBarComponent from "../Components/AppBar";
import LoginUser from "../Components/LoginUser";
import IdeasPage from './IdeasPage';
export default function Home(){

  

    return(
        <>
        <AppBarComponent/>
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginUser} />
          <Route path='/ideas' component={IdeasPage} />
        </Switch>
        </BrowserRouter>
       
        </>

    )
}