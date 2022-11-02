const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');
const { route } = require('./routes/blogRoutes');

// express app
const app = express();

// connect to DB
const dbURI = 'mongodb+srv://blogboy:A7lmvACagPi9JcTw@cluster0node.lr7t0rm.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err)); 

// listen for requests - app.listen(3000) - gets moved to post db connection

// middleware and static files
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'NBA Nets and Lakers',
//         snippet: 'KD and Lebron are a combined 1-10',
//         body: 'Lebron, KD, Anthondy Davie, Kyrie, Russell Westbrook and Ben Simmons are a combined 10 losses and 1 win',
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);

//         });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('635f43264159cd74b54427fa')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);

//         });
// })


// register view engine
app.set('view engine', 'ejs'); // default folder is views
// app.set('views', 'myviews'); // setting alternative folder for views

app.get('/', (req, res) => {
//   const blogs = [
//     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//   ];
//   res.render('index', { title: 'Home', blogs });
  //res.render('index');
  res.redirect('/blogs');

});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });

  //res.render('about', { title: 'About' });
});

// blog Routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });

  //res.status(404).render('404', { title: '404' });
});