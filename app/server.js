const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routing/routes.js")(app);



app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
})




  