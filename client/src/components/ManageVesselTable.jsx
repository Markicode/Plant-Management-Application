import React from "react";

export default function ManageVesselTable(props) {
  return (
    <div id="vessel-table">
      <table>
        <thead>
          <tr>
            <th>Ketel</th>
            <th>Max. inhoud</th>
            <th>Locatie</th>
            <th>Aanpassen</th>
            <th>Verwijderen</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((vessel) => {
            return (
              <tr key={vessel.id}>
                <td>{vessel.vessel_name}</td>
                <td>{vessel.max_content}</td>
                <td>{vessel.location}</td>
                <td>aanpassen</td>
                <td>verwijderen</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
