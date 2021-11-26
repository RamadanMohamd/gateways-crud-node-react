### With Docker Compose

#### To start the application

Step 1: start mongodb and mongo-express

    docker-compose -f docker-compose.yaml up
    
_You can access the mongo-express under localhost:8080 from your browser_
    
Step 2: in mongo-express UI - create a new database "gateways-db"

Step 3: in mongo-express UI - create a new collection "gateways" in the database "gateways-db"       
    
Step 4: start node server 

    npm install
    npm run start

Step 5: start react app from next-app 

    npm install
    npm run dev 
    
Step 6: access the nodejs application from browser 

    http://localhost:3001

Step 7: access the next-react app application from browser 

    http://localhost:3000


