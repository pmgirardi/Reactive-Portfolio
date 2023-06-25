import React from 'react'
import resumepdf from "../../images/Paige-Girardi-Resume-2023.pdf";



export default function Resume() {
  return (
    <div className="container py-4">
    <div class="text-color">
 <h3 className="text-center mb-5">TECHNICAL SKILLS</h3>
 <p class="mb-4"> JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, React, Node, Handlebars, jQuery, Bootstrap, GIS Proprietary Software,</p>
 <p class="mb-4">Data Collection, Digitization, Archival Processing, Archival Standards, Records Management, QGIS, Apple Map Application Software, FME, ArcGIS, OpenStreetMap, </p>
 <p class="mb-1"> Survey 123, Microsoft: SharePoint, Word, Excel, and PowerPoint.</p>

<div class="position-absolute bottom-0 mb-5">
<a href= {resumepdf} class="btn btn-light btn-outline-dark btn-lg">View Resume</a>

<a href= {resumepdf} download="Paige-Girardi-Resume-2023.pdf">
    <button className="btn btn-dark btn-outline-secondary btn-lg">Download File</button>
</a>
</div>
    </div>
    </div>

    )
}

