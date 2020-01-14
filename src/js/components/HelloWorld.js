import React from "react";
import img from "../../resources/test.jpg";

function Hello() {
  return (
    <div>
      <div>Hi there from HelloWorld.jsx</div>
      <table style={{ width: "50%" }}>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </tbody>
      </table>

      <img src={img} alt="Test Image" style={{ width: "20%", height: "20%" }} />
    </div>
  );
}

export default Hello;
