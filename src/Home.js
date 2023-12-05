import React from "react";
import "./Home.css";

const Home = ()=> {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const companyContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
    return(
        <>
        <div>
          <h1 className="heading">We're 3007</h1>

          <p className="heading2">3007 is a strategic design and technology firm dedicated to accelerating digital transformation</p>
          <p className="heading2">We design with a focus on what's meaningful to our clients and people, translating it into tangible and value-driven results</p>
          <p className="paragraph">Trusted by great companies</p>

          
          <div style={containerStyle}>
      <div style={companyContainerStyle}>
        <img src="https://t4.ftcdn.net/jpg/03/31/93/85/240_F_331938599_nmkc39B7E74s1G5P01b0YCJ6x0MNMqJz.jpg" alt="logo1" />
      
      </div>
      <div style={companyContainerStyle}>
        <img src="https://t4.ftcdn.net/jpg/03/31/93/85/240_F_331938599_nmkc39B7E74s1G5P01b0YCJ6x0MNMqJz.jpg" alt="logo2" />
       
      </div>
      <div style={companyContainerStyle}>
        <img src="https://t4.ftcdn.net/jpg/03/31/93/85/240_F_331938599_nmkc39B7E74s1G5P01b0YCJ6x0MNMqJz.jpg" alt="logo3" />
       
      </div>
      <div style={companyContainerStyle}>
        <img src="https://t4.ftcdn.net/jpg/03/31/93/85/240_F_331938599_nmkc39B7E74s1G5P01b0YCJ6x0MNMqJz.jpg" alt="logo4" />
     
      </div>
     
     
    </div>
        </div>

       
     
         
         
           
          
       


      
    </>
    )
}
export default Home;