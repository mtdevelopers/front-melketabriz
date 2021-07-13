import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Area from "./Area";
import Branch from "./Branch";
import Breadcrumb from "../../../components/settings/breadcrumb/globalBread";

const Sublocation = (props) => {
    const routes = [
        {
            path:"area",
            component:Area,
            name:"area",
        },
        {
            path:"branch",
            component:Branch,
            name:"branch",
        }
    ]
    return(
        <>
            <Breadcrumb navArr={[{root:"setting",secondLevel:"sublocation",addr:"area",title:"منطقه" ,active:true},{root:"setting",secondLevel:"sublocation",addr:"branch",title:"شعبه"}]}/>
            <Switch exact>
                {routes.map((route,index) => (
                <Route
                    key={index}
                    path={`/setting/sublocation/${route.path}`}
                    children={route.component} />
                ))}
            </Switch>
        </>
    )
}

export default Sublocation;



