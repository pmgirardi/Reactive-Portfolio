import React from 'react'
import avatar from '/Users/waterscorpio/UCBootCamp/Assignments/Reactive-Portfolio/src/images/1a.png'

export default function AboutMe() {
  return (
	<div class="text-color">
	<div className="container">
 	<h1 className="text-center mt-5 mb-3">Paige Girardi.</h1> 
		<img src= {avatar} className="rounded float-end" alt="portfolioimage"></img>

		<p class="mb-3">
		My experience in tech started while attending Arizona State University for my BS in Geography.</p> 
		<p class="mb-3">My coursework included Geographic Information Technology, learning mapping software and data manipulation.</p> 
		<p class="mb-3">I learned about the real-world collection of data and how it is converted and represented digitally through my experience in the creation of the City of Hughson's GIS Database as a GIS Mapping and Data Collection intern. </p>
		
		<p>I found my strength in problem-solving and finding unique solutions through my experience in pilot projects.</p>
		 <p>This is were I focused my interest, gaining experience in map editing and digitization for companies such as Apple (Apple Maps Application) and Amazon (Delivery Tracking).</p> 

		 <p class="mt-3 mb-5">Currently, I live in Grizzly Flats, CA. I graduated from UC Berkeley Coding Bootcamp with a certificate in Full-Stack Web Development May 25th 2023.
		 </p>
		 </div>
</div>

  )
}
