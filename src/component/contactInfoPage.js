import { MdOutlineMailOutline } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import "./contactInfoPage.css";

const ContactInfoPage = () =>{
   return <div style={{border: "4px solid white", margin:"5%", padding:"2%", borderRadius:"10px",  boxShadow: "2px 2px 10px 10px rgb(233, 218, 218)"}}>
            <div className='title'>Contact Info</div>
               <div className="infokey">
                   <div className="infokeyitem">
                      <div><MdOutlineMailOutline/></div>
                      <div style={{marginTop:"3%"}}><FaMobileAlt/></div>
                   </div>
                   <div className="infovalue">
                      <div className="infoitem">jksharma34326@gmail.com</div>
                      <div className="infoitem2">9412342411, 8979063510</div>
                   </div>
               </div>
         </div>
}

export default ContactInfoPage;