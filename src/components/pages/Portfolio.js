import React from 'react';
import Book from '/Users/waterscorpio/UCBootCamp/Assignments/Reactive-Portfolio/src/images/BookSearch.png'
import Text from '/Users/waterscorpio/UCBootCamp/Assignments/Reactive-Portfolio/src/images/TextEditor.png';
import Note from '/Users/waterscorpio/UCBootCamp/Assignments/Reactive-Portfolio/src/images/NoteTaker.png';
import Workday from '/Users/waterscorpio/UCBootCamp/Assignments/Reactive-Portfolio/src/images/Work Day Scheduler.gif';
import fantasticBeasts from '/Users/waterscorpio/UCBootCamp/Assignments/Reactive-Portfolio/src/images/Fantastic-Beasts.png'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

export default function Portfolio() {
  return (
      <div className='container py-4'>
          <h2 className="h2">Projects:</h2>

          <CardGroup>
          <Card>
        <Card.Img variant="top" src= {fantasticBeasts} />
        <Card.Body>
          <Card.Title>Group Project: MERN Built Application for Selling Mystical Creatures</Card.Title>
          <Card.Text>
          A shopping application that allows customers to explore and purchase a wide range of mythical creatures.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Link rel="noopener noreferrer" href="https://fantastic-beasts.herokuapp.com/" class="card-link">Deployed App </Card.Link>
        <Card.Link rel="noopener noreferrer" href="https://github.com/ikaera/Dream-Project" class="card-link">Github</Card.Link>
          </Card.Footer>
          </Card>
          <Card>
        <Card.Img variant="top" src= {Book} /> 
        <Card.Body>
          <Card.Title>Book Search App </Card.Title>
          <Card.Text>
          A fully functioning Google Books API search engine built with a RESTful API, refactored to be a GraphQL API built with Apollo Server.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Link rel="noopener noreferrer" href="https://waterhorse.herokuapp.com/" class="card-link">Heroku </Card.Link>
        <Card.Link rel="noopener noreferrer" href="https://github.com/pmgirardi/Book-Search" class="card-link">GitHub</Card.Link>
          </Card.Footer>
      </Card>
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
        <Card.Link rel="noopener noreferrer" href="https://whispering-falls-80138.herokuapp.com/" class="card-link">Heroku </Card.Link>
        <Card.Link rel="noopener noreferrer" href="https://github.com/pmgirardi/PWA-Text-Editor" class="card-link">GitHub</Card.Link>
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
        <Card.Link rel="noopener noreferrer" href="https://the-note-taker-by-pg.herokuapp.com/" class="card-link">Heroku </Card.Link>
        <Card.Link rel="noopener noreferrer" href="https://github.com/pmgirardi/The-Note-Taker" class="card-link">GitHub</Card.Link>
          </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= {Workday} />
        <Card.Body>
          <Card.Title>Time Block Scheduler</Card.Title>
          <Card.Text>
          A calendar application that allows a user to save events for each hour of the day.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Link rel="noopener noreferrer" href="https://pmgirardi.github.io/Time-Block-Schedule/" class="card-link">Deployed App </Card.Link>
        <Card.Link rel="noopener noreferrer" href="https://github.com/pmgirardi/Time-Block-Schedule" class="card-link">Github</Card.Link>
          </Card.Footer>
      </Card>
    </CardGroup>


</div>


    )
}