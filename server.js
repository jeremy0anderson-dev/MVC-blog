const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 4005;

const sequelize = require('./config');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const helpers = require('./utils/helpers');

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 900000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.engine('hbs', exphbs.engine({
  helpers, extname: "hbs"
}));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
