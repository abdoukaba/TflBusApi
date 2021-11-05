# TFL API Bus Application

## Task:
Calls the Transport for London (TFL) API using the following URL:
 https://api.tfl.gov.uk/StopPoint/490009333W/arrivals  
 (Note: This is a live API which provides updated bus arrival times on each API call)

* Provide a page in the application which allows the user to call the TFL API and displays the
response of the API call
* Persist a sample of the response data returned from each call to the TFL API to a database
along with a timestamp of when the API call was made
* Provide a second page in the application which displays a historical view of API calls stored in
the database
* Bonus task 1 – Make the database data available to be queried by the user
* Bonus task 2 – Provide an automated test suite


## Quickstart

### Install backend 

`cd server`
`python -m pip install requirements.txt`
`python app.py `

Database is created automatically.

### Install frontend

`cd client`
`npm install`
`npm run serve `

Visit localhost:8080

### Get data from database

To get data from database use this endpoint

`http://localhost:5000/db`

To insert data use this endpoint

`http://localhost:5000/api`






