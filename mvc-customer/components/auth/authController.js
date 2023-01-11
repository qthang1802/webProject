const Ajv = require('ajv');
const addformats = require('ajv-formats');


const authService = require('./authService');

const ajv = new Ajv();
addformats(ajv);

exports.showRegistrationForm = (req, res) => {
  res.render('auth/register', { layout: 'layout_register.hbs' });
};

exports.register = async (req, res) => {
  const schema = {
    type: 'object',
    properties: {
      'full-name': { type: 'string', 'minLength': 1 },
      email: { type: 'string', format: 'email' },
      password: { type: 'string', 'minLength': 6 },
    },
    required: ['full-name', 'email', 'password'],
    additionalProperties: false,
  };
  if (!ajv.validate(schema, req.body)) {
    res.render('auth/register', { error: 'Invalid INput!', layout: 'layout_register.hbs' });
    return;
  }
  const { 'full-name': fullName, email, password } = req.body;
  try {
    await authService.register(fullName, email, password);
  } catch (e) {
    res.render('auth/register', { error: e.message, layout: 'layout_register.hbs' });
    return;
  }
  res.redirect('/auth/login');
};


exports.showLoginForm = (req, res) => {
  res.render('auth/login', { layout: 'layout_register.hbs' });
};

exports.logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};

