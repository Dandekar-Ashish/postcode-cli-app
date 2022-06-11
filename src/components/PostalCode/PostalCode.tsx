import React, { useState } from "react";
import PostalCodeSearch from "../PostalCodeSearch/PostalCodeSearch";
import PostalDetails from '../PostalDetails/PostalDetails';
import axios from 'axios';
import { Request } from "../../services/httpClient";

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
            <div className="container-fluid p-5 bg-primary text-white text-center">
                <h1>
                   Postal Code Search
                </h1>
                
            </div>

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col">
                       <PostalCodeSearch handlePostCodeSelection={handlePostCodeSelection} />
                    </div>
                </div>
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
