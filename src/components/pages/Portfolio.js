import React from 'react';
import Text from '/Users/waterscorpio/UCBootCamp/Assignments/Reactive-Portfolio/src/images/TextEditor.png';
import Workday from '/Users/waterscorpio/UCBootCamp/Assignments/Reactive-Portfolio/src/images/Work Day Scheduler.gif';
import pythonNews from '/Users/waterscorpio/UCBootCamp/Assignments/Reactive-Portfolio/src/images/python.png'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

export default function Portfolio() {
  return (
    <div className='container py-4'>
    <div class="text-color">
          <h3 className="text-center mb-3">PROJECTS</h3>

          <CardGroup>
          <Card>
        <Card.Img variant="top" src= {pythonNews} />
        <Card.Body>
          <Card.Title>Python News Feed</Card.Title>
          <Card.Text>
         Python refactored app, originally built using Node.js. The app, Just Tech News, lets users submit links to tech-related articles, comment on other users' articles, and upvote articles.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Link rel="noopener noreferrer" href="https://desolate-mountain-13116-927d36e5fa8b.herokuapp.com//" class="card-link">Deployed App </Card.Link>
        <Card.Link rel="noopener noreferrer" href="https://github.com/pmgirardi/python-newsfeed" class="card-link">Github</Card.Link>
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
</div>


    )
}