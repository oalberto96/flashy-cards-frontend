# Flashy cards frontend

[flashycards.com](http://flashycards.co)

[Video Demo](https://youtu.be/gtSungLX6QE)

### Full stack

Frontend - React and Redux

[Backend - Django](https://github.com/oalberto96/flashy-cards-backend)

[Docker compose](https://github.com/oalberto96/flashy-cards)

## Summary
Flashycards helps you to memorize words and sentences in other language asociating an image or gif with a concept instead of memorize the direct translation.

### Motivation
I created this project to help me to learn German and apply the knoledge acquired from tutorials of Django, React, Redux and Docker

### Environment Variables

| Name                   | Description                                    | Example                                     | Location              |
| ---------------------- | ---------------------------------------------- | ------------------------------------------- | --------------------- |
| REACT_APP_MEDIA_SERVER | Server wich stores images uploaded by the user | REACT_APP_MEDIA_SERVER=media.flashycards.co | frontend/src/agent.js |
| REACT_APP_API_SERVER   | Server that makes the magic                    | REACT_APP_API_SERVER=api.flashycards.co     | frontend/src/agent.js |
