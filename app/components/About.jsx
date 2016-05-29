var React = require('react');

//if only simple render function, use stateless functional component instead
var About = () => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on React. It uses Open Weather API to find the current temperature of the location you input.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - This is used to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;