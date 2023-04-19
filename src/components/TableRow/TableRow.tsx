import { Fragment, useState, useEffect } from "react";
import styles from "./TableRow.module.css";


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

