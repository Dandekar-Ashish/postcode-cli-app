
export default function PostalDetails(props: { postalData: any; }) {
    const { postalData } = props;
    if (!postalData) {
      return null;
    }
    return (
    <div>
      <h1>{postalData.country}</h1>
      <p>{postalData.region}</p>
      <p>{postalData.area}</p>
      <p>{postalData.codes.admin_district}</p>
      <p>{postalData.codes.parliamentary_constituency}</p>
    </div>
    
    )
  }