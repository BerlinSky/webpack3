import 'jquery';

// eslint-disable-next-line

const siteSetup = () => {
  console.log("Set up ... in arrow function now")
}

const testjQuery = () => {
  const thisBody = $('body');
  thisBody.css({ 'backgroundColor': 'tomato' })
}

$(function () {
  siteSetup();
  testjQuery();
});

