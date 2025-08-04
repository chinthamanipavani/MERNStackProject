imortant note 

1. run the :-  npm run load:jobs        
    for loading the jobs in the database
    no need to run the server for this
    no need to run front end 
    only run the script(npm run load:jobs )
 2.  banner first   (scrolling about footer ....)
 3. scroll in same page as well as in different page   
       import { Link as ScrollLink } from "react-scroll";

        <ScrollLink
                  to="home"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  className="nav-link"
                >
                  Home
                </ScrollLink>