import React from 'react'
import avatar from '/Users/waterscorpio/UCBootCamp/Assignments/Reactive-Portfolio/src/images/1a.png'

export default function AboutMe() {
  return (
	<div className="container py-4 px-4">
 	<h1 className="text-center">Paige Girardi.</h1> 
		<img src= {avatar} className="rounded float-end" alt="portfolioimage"></img>
		<p>
		My experience in tech started while attending Arizona State University for my BS in Geography. My coursework included Geographic Information Technology, learning mapping software and data manipulation. I learned abou the real-world collection of data and how it is converted and represented digitally through my experience in the creation of the City of Hughson's GIS Database as a GIS Mapping and Data Collection intern. I found my strength in problem-solving and finding unique solutions through my experience in pilot projects. This is were I focused my interest, gaining experience in map editing and digitization for companies such as Apple (Apple Maps Application) and Amazon (Delivery Tracking). Currently, I live in Grizzly Flats, CA and I am attending UC Berkley Coding Bootcamp, earning a certificate in Full Stack Web Development. </p>

</div>
  )
}
