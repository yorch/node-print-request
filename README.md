NodeJS Print POST Request to Console
====================================

To run the server:

    node app.js

By default will run on port 5000, but this can be changed by passing `ENV` port variable:

    PORT=8080 node app.js

During development, when constant changes are made to `app.js`, is more convenient to use the module `nodemon`, which will re-run the server every time it detects a change in the source code:

    # Install `nodemon` globally
    npm install -g nodemon

    # Run server
    nodemon app.js

To test the server, `curl` can be use this way:

    curl --data "my data" http://127.0.0.1:5000


License
-------

This projected is licensed under the terms of the MIT license.
