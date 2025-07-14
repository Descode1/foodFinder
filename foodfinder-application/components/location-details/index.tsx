import { LocationType } from "@/mongoose/locations/schema";
import styles from "./index.module.css";
import { JSX } from "react";

interface PropsInterface {
  location: LocationType;
}

const LocationDetail = (props: PropsInterface): JSX.Element => {
  let location = props.location;
  return (
    <div>
      {location && (
        <ul className={styles.root}>
          <li>
            <b>Address: </b> {location.address as string}
          </li>
          <li>
            <b>Zipcode: </b> {location.zipcode as string}
          </li>
          <li>
            <b>Borough: </b> {location.borough as string}
          </li>
          <li>
            <b>Cuisine: </b> {location.cuisine as string}
          </li>
          <li>
            <b>Grade: </b> {location.grade as string}
          </li>
        </ul>
      )}
    </div>
  );
};
export default LocationDetail;