import React, { useState } from "react";
import PostalCodeSearch from "../PostalCodeSearch/PostalCodeSearch";
import PostalDetails from '../PostalDetails/PostalDetails';
import { Request } from "../../services/httpClient";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar'

// import PostalDetails from "./components/PostalDetails";
interface IPostalDataCodes
{
  admin_district:string;
  parliamentary_constituency:string;
}
interface IPostalData {
    country:string;
    region:string;
    area:string;
    codes:IPostalDataCodes
  }


function PostalCode() {
  const [postalData, setpostalData] = useState<IPostalData|null>(null);
  const handlePostCodeSelection = (postCode: any) => {
    //const url = `https://api.postcodes.io/postcodes/${postCode}`;
    Request({url:`/${postCode}`,method:'GET'}).then((response) => {
      if (response.data.result) {
       setpostalData(response.data.result);
      }  else {
        setpostalData(null);
      }
    });
  }
    return (
        <React.Fragment>
            <Navbar bg="primary" variant="dark">
            <Container>
                
            <div className="col-md-12">
                            <h1>
                            Postal Code Search
                            </h1>
                    </div>
                
            </Container>
            </Navbar>

            <div className="container-fluid">
                <br></br>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <PostalCodeSearch handlePostCodeSelection={handlePostCodeSelection} />
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
                <br></br>
                <div className="row">
                        <div className="col">
                        <PostalDetails postalData={postalData} />
                        </div>
                </div>
            </div>
        </React.Fragment>
        
    );
}

export default PostalCode;
