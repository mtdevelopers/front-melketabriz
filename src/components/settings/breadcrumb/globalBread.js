import {Link} from "react-router-dom";


const BreadCrumb = (props) => {
    
    return(
            <nav class="breadcrumbA-5">
                <div class="breadcrumbA flat">

                    {props.navArr.map((el,index) => {
                        const address = `/${el.root}/${el.secondLevel}/${el.addr}`
                        return(
                            <Link to={address} className={el.active ? "active" : ""}><span class="badge badge-light ml-3">{index+1} </span><span class="breadcrumbitem">{el.title} </span></Link>

                        )
                    })}
                    
                </div>
            </nav>
            
    )
}


export default BreadCrumb;