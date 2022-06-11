import AsyncSelect from "react-select/async";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";
import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import { Request } from "../../services/httpClient";
import { ActionMeta } from "react-select";

interface IPostalCodeSearch
{
    handlePostCodeSelection:(postCode: any)=>void;
}

export default function PostalCodeSearch(props:IPostalCodeSearch){
    const minLengthAutocomplete = 1;
    
    const [noData, setnoData] = useState(false);
    const fetchSuggestions = useDebouncedCallback(
      (value, cb) => {
      if (value.length < minLengthAutocomplete) {
        return cb([]);
      }
      //const url = `https://api.postcodes.io/postcodes/${value}/autocomplete`;
      Request({url:`/autocomplete/${value}`,method:'GET'}) .then((response) => {
        if (response.data?.result?.length) {
          setnoData(false);
          let postCodes = response.data.result.map((x:string) => {
            return {
              label: x,
              value: x
            };
          });
          return cb(postCodes || []);
        } else {
          setnoData(true);
        }
        return cb([]);
      });
    }, 
    300);
  
    const handleSelectSuggest = (e:any) => {
      props.handlePostCodeSelection(e.value as any);
    }
  
    return (
        <React.Fragment>
           { noData && <Alert key={"warning"} variant={"warning"}>
            No data found!
          </Alert> }
          <AsyncSelect
              loadOptions={fetchSuggestions} 
              //getOptionValue={({ value }) => value.place_id} 
              onChange={handleSelectSuggest}
              placeholder={'Please type post code here'}
              />
         
        </React.Fragment>
        
      
    )
  
  }