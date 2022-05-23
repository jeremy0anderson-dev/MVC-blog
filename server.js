const express = require('express'),
      session = require('express-session'),
      SessionStore = require('connect-session-sequelize')(session.Store),
      PORT = process.env.PORT || 4005,
      app = express();


const sequelize = require('./config'),
      exphbs = require('express-handlebars');
// Configure view engine as handlebars

app.engine("hbs", exphbs.engine({
    extname: 'hbs',
    defaultLayout: "default",
    // helpers: require('./utils/helpers')
}))
app.set('views', './views');
app.set('view engine', 'hbs');



// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'));

app.use(require('./routes'));
//configure session
app.use(session({
    name:"sid",
    secret: process.env.SESSION_SECRET || "shhh",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000*60*60*24,
        secure: process.env.NODE_ENV === "production"
    },
    proxy: process.env.NODE_ENV === "production",
    store: new SessionStore({
        db: sequelize
    })
}));

sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Listening on port: ${PORT}`)
    })
})