import { Fragment, useState, useEffect } from "react";

export const TableRow = (props:any) => {
    return (
    <Fragment>
        <tr>
          <td>{props.country.name}</td>
          <td>{props.country.code}</td>
          <td>{props.country.capitol}</td>
          <td>{props.country.population}</td>
        </tr>
    </Fragment>
    )
};

