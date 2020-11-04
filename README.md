# Getting Started with Create React App

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

TODO - This is just for saving idea for seed data ignore and maybe delete

USE database_development;
Drop table IF EXISTS Posts;
Create TABLE Posts (author varchar(255), description varchar(255), content varchar(255), created varchar(255), comments varchar(255));
INSERT into Posts (author, description, content, created, comments) VALUES ("Ricardo Herman Harrison", "This is an item to fix anything ever","https://picsum.photos/200", "November 3, 2020", "Nice Item! I hate this. Can I buy it please?!");
Select * from Posts;
```

