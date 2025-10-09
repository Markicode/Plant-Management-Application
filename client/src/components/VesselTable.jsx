import React from "react";

export default function VesselTable(props) {
  return (
    <div id="vessel-table">
      <table>
        <thead>
          <tr>
            <th>Ketel</th>
            <th>Max. inhoud</th>
            <th>Locatie</th>
            <th>Inhoud</th>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((vessel) => {
            return (
              <tr key={vessel.id}>
                <td>{vessel.vessel_name}</td>
                <td>{vessel.max_content}</td>
                <td>{vessel.location}</td>
                <td>{vessel.current_content}</td>
                <td>
                  {vessel.is_hf ? "HF " : ""}
                  {vessel.product_name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
