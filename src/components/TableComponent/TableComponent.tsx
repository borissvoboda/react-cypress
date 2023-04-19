import React, { Suspense, Fragment, useState, useEffect } from "react";
import { TableRow } from "../TableRow";

import countriesData from "../../../dummy-data/countries.json";

export const TableComponent = () => {
  const [countries, setCountries] = useState<Array<{}>>([]);
  const [countriesSlice, setCountriesSlice] = useState<Array<{}>>([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  if (countriesData.length > 0) {
  return (
    <Fragment>
        <table>
            <tbody>
      {countries.map((country, index) => (
        <TableRow key={index} country={country} />
      ))}
      </tbody>
      </table>
    </Fragment>
  );
} else {
    return (<></>)
}
};