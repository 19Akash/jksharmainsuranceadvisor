
import React from 'react';
import "./profile.css"
import profileImage from "../images/profileimage.jpg";
const Profile = () =>{
  return <div>
       <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div style={{width:"90%",paddingTop:"5%"}}>
          <div className='profileRoot'>
               <div className='textCover'>
                  <div className='text'>
                    Drawing from over 30 years of dedicated service as an LIC insurance advisor and a 
                    privileged member of the Chairman's Club, I've cultivated a reputation for exceptional 
                    support and guidance within LIC of India. With a proven track record of 
                    serving over 100,000 delighted customers, I invite you to join our 
                    satisfied family. Allow us to safeguard your future with our trusted 
                    expertise and caring assistance.
                    </div>
                  <div className='text' style={{marginTop:"5%"}}>
                    लगभग 30 वर्षों के समर्पित सेवा के अनुभव के आधार पर, मैं एक LIC बीमा सलाहकार और Chairman's Club
                    के एक विशेषाधिकृत सदस्य के रूप में, LIC ऑफ इंडिया में उत्कृष्ट समर्थन और मार्गदर्शन के लिए प्रतिष्ठा प्राप्त की है। 
                    1 लाख से अधिक प्रसन्न ग्राहकों की सेवा करने का सिद्धांतित रिकॉर्ड रखते हुए, मैं आपको हमारे संतुष्ट परिवार में 
                    शामिल होने के लिए आमंत्रित करता हूं। हमारी विश्वसनीय विशेषज्ञता और प्यारी सहायता से आपका भविष्य सुरक्षित करने की अनुमति दें।
                    </div>
               </div>
               <img className="profileImage" src={profileImage} alt='profileImage'></img>
          </div>
       </div>
       </div>
  </div>
}

export default Profile;