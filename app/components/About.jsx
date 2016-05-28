var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });


//if only simple render function, use stateless functional component instead
var About = () => {
  return (
    <h3>About Component</h3>
  )
};

module.exports = About;