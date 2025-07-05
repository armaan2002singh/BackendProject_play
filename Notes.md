# This is the file to write concepts.

- well in react.js files are imported in two type keyword of package.json file

1. module way - import
2. comman way - require

# New concept or starting and stopping the server

- people use nodemon to restart the server after change in the file
- However it is installed as an development dependency

# Nodemon is like, what ever thing will write in the index file of src. There nodemon will reload it.

- here "scripts": {
  "dev": "nodemon src/index.js"
  },
- will be written in the package.json which for the reload the file, which path is given.

- but there is an issue, that if i want to use it then i cannot able to use the import, i can only be accessedby the by the require

# Prettier

- should be install as professionaly to maintain the standards.
- setting and extension should be install as dev dependency

- now in .prettierrc file will write the configuration of the prettier

- also need to make a file with name .prettierignore to config that what things it will ignore to make change.

# created the db with MONGODB-Altas, where did all the configuraation and now the varibale like URL and and PORT is added in it.

- Or in constants.js file we did add the name of the database.

# Db connect is done in two major ways

1. we can add the whole code into the index.js file, because we are going to reload the index file with help of nodemon.

# Db connect is done in two major ways

1. we can add the whole code into the index.js file, because we are going to reload the index file with help of nodemon. Will start the db in intial when we run the application reload.
2. I can make a Db named folder where i will write the connection name function in it and then import that function into the index.js file and execute that function there.

- but both have pros and cons
