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

- but there is an issue, that if i want to use it then i cannot able to use the import, i can only be accessedby the [D[D[D[D[D[D[D[D[D[C[C[C[C[C[C[ by the require

# Prettier

- should be install as professionaly to maintain the standards.
- setting and extension should be install as dev dependency

- now in .prettierrc file will write the configuration of the prettier

- also need to make a file with name .prettierignore to config that what things it will ignore to make change.