import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Loading from '../../../components/common/Loading/Loading';

const WelcomePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  let userRole = null;

  if (token) {
    const decodedToken = jwt_decode(token);
    userRole = decodedToken.user_type;
    console.log(userRole)
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
      switch (userRole) {
        case 'Passenger':
          navigate('/passengerdashboard');
          break;
        case 'bus owner':
          navigate('/ownerdashboard');
          break;
          case 'conductor':
            navigate('/conductordashboard');
            break;

         case 'admin':
            navigate('/adminDashboard');
            break;
          
        default:
          
          navigate('/error');
      }      
    
  }, [userRole, navigate]);



  return (
    <div>
        <div className="card shadow mb-4" style={{marginLeft:"350px",width:"800px",borderRadius:"25px",height:"550px"}}>
      <div className="loading-page">
        <div className='img' style={{marginTop:"-40px"}}><img src={" "}/></div>
      
        <div className="spinner" style={{marginTop:"30px"}}></div>

        <h4 style={{marginTop:"60px"}}>Please wait until your account is verified...</h4>

        <h6  style={{marginTop:"60px"}}>Contact us: </h6>
            <i class="fas fa-phone-square-alt"></i> +94 11 269 1136<br /><br />
            <i class="fas fa-envelope"></i> No:45,Main Street, Bambalapitiya<br /><br />
      </div>
    </div>
    </div>
  );
};

export default WelcomePage;
