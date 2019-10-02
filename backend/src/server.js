const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-voe4r.mongodb.net/semana09?retryWrites=true&w=majority', {useNewUrlParser : true , useUnifiedTopology: true})

// require.query access query params (for filters)
// require.params access route params ( for edit or delete)
// require.body access body request (for create and edit)

app.use(express.json());
app.use(routes);

app.listen(3333);
