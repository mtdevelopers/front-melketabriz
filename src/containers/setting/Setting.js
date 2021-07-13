import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Layout from "../layout";
import "../../assets/scss/newStyle.scss";

import Location from "./location/Location";
import User from "./user/User";
import Role from "./role/Role";
import Organization from "./organization/Organization";
import Sublocation from "./sublocation/Sublocation";
import BreadCrumb from "../../components/settings/breadcrumb/Titlebread";
import Template from "./template/Template";
const routes = [
    {
      path:"location",
      component:Location,
      name:"location",
    },
    {
      path:"sublocation",
      component:Sublocation,
      name:"sublocation",
    },
    {
      path:"user",
      component:User,
      name:"user",
    },
    {
      path:"role",
      component:Role,
      name:"role",
    },
    {
      path:"organization",
      component:Organization,
      name:"organization",
    },
    {
      path:"template",
      component:Template,
      name:"template",
    },
      
];

const Setting = () => {
    return(
        <Layout>
            <div className="page-header">
              <div>
                <h2 className="main-content-title tx-24 mg-b-5"> تنظیمات سامانه</h2>
                <BreadCrumb />
              </div>
            </div>
            <Switch exact>
                {routes.map((route,index) => (
                <Route
                    key={index}
                    path={`/setting/${route.path}`}
                    children={route.component} />
                ))}
            </Switch>
        </Layout>
      
    )
}

export default Setting;