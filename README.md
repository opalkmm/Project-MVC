# Buddle 

Buddle (buddy + huddle) originated from my wish to have a group of people who share a niche interest to share new information, show their collection, etc. The feed allows people to see photo feed and description of people within the group, with the ability to 'like' and 'comment'. Most of the times, the group functionality of major social media is cluttered with texts and irrelevant information. This application will show only photos and the users will have more controll over what they would like to see.

# Built with:
- ReactJS
- Javascript
- Material UI
- HTML
- CSS
- test: mocha, chai

Please see the project hosted here

# Demo of the Application




# How to run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Success! Created buddle at /Users/Alex/Documents/OpalandAlex/Buddle/buddle
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd buddle
  yarn start
--              --              --              --
Creating the Database locally
# Open up MySQL Workbench and run this 
```
DROP DATABASE IF EXISTS database_development;
CREATE DATABASE database_development;
```

USE database_development;
Drop table IF EXISTS Posts;
Create TABLE Posts (author varchar(255), description varchar(255), content varchar(255), created varchar(255), comments varchar(255));
INSERT into Posts (author, description, content, created, comments) VALUES ("Opal Harrison", "Have you heard that Bandai will release a new Tamagotchi?!","https://picsum.photos/200", "November 3, 2020", "Nice Item! ");
Select * from Posts;
```

