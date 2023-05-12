import React from 'react';
import Text from '/Users/waterscorpio/UCBootCamp/Assignments/Reactive-Portfolio/src/images/240_F_565526943_JLuB9ztpqm6Q3nJfIwhTyWtHY0Z8HoDB.jpg';
import Note from '/Users/waterscorpio/UCBootCamp/Assignments/Reactive-Portfolio/src/images/240_F_565526906_rh1djL5bA1dtLHpc1veiTsori8BciiqP.jpg';
import Weather from '/Users/waterscorpio/UCBootCamp/Assignments/Reactive-Portfolio/src/images/240_F_560368902_t77tQTkFmyyKCwQzuP7tsVgMwSzJYWPV.jpg';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

export default function Portfolio() {
  return (
      <div className='container py-4'>
          <h2 className="h2">Projects:</h2>

          <CardGroup>
      <Card>
        <Card.Img variant="top" src= {Text} /> 
        <Card.Body>
          <Card.Title>Text Editor App </Card.Title>
          <Card.Text>
          A text editor that runs in the browser. The app is a single-page application that meets the PWA criteria. 
          Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. 
          The application also functions offline.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Link href="https://whispering-falls-80138.herokuapp.com/" class="card-link">Heroku </Card.Link>
        <Card.Link href="https://github.com/pmgirardi/PWA-Text-Editor" class="card-link">GitHub</Card.Link>
          </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= {Note} /> 
        <Card.Body>
          <Card.Title>Note Taker App </Card.Title>
          <Card.Text>
          An application that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Link href="https://the-note-taker-by-pg.herokuapp.com/" class="card-link">Heroku </Card.Link>
        <Card.Link href="https://github.com/pmgirardi/The-Note-Taker" class="card-link">GitHub</Card.Link>
          </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= {Weather} />
        <Card.Body>
          <Card.Title>Weather Dashboard</Card.Title>
          <Card.Text>
          A weather forecast application that allows a user to find the current and 5 day forecast of a city.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Link href="https://pmgirardi.github.io/The-Traveler-Weather-Dashboard/" class="card-link">GitHub</Card.Link>
        </Card.Footer>
      </Card>
    </CardGroup>


</div>


    )
}