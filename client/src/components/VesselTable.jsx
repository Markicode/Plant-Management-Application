import React from "react";

export default function VesselTable(props) {
  return (
    <div id="vessel-table">
      <table>
        <tr>
          <th>Ketel</th>
          <th>Max. inhoud</th>
          <th>Locatie</th>
          <th>Aanpassen</th>
          <th>Verwijderen</th>
        </tr>
        {props.data.map((vessel) => {
          return (
            <tr>
              <td>{vessel.name}</td>
              <td>{vessel.max_content}</td>
              <td>{vessel.location}</td>
              <td>aanpassen</td>
              <td>verwijderen</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
