import React from 'react'
import resumepdf from "../../images/Paige-Girardi-Resume-2023.pdf";



export default function Resume() {
  return (
    <div className="py-4">
 <h3 className="text-center">TECHNICAL SKILLS</h3>
<p>JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, React, Node, Handlebars, jQuery, Bootstrap, GIS Proprietary Software, Data Collection, Digitization, Archival Processing, Archival Standards, Records Management, QGIS, Apple Map Application Software, FME, ArcGIS, OpenStreetMap, Survey 123, Microsoft: SharePoint, Word, Excel, and PowerPoint.
</p>
<a href= {resumepdf} class="btn btn-light btn-outline-dark btn-lg">View Resume</a>

<a href= {resumepdf} download="Paige-Girardi-Resume-2023.pdf">
    <button className="btn btn-dark btn-outline-secondary btn-lg">Download File</button>
</a>

    </div>

    )
}

