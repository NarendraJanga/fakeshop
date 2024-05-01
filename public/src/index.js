import React from 'react'; // Importing React library
import './App.css'; // Importing app.css
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering React components
import './index.css'; // Importing custom CSS styles
import App from './App'; // Importing the root component of the application
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import 'animate.css/animate.min.css'; // Importing animate.css for animations
import reportWebVitals from './reportWebVitals'; // Importing the reportWebVitals function
import { Provider } from 'react-redux'; // Importing Provider from react-redux
import store from './redux/store'; // Importing the Redux store

// // Creating a ReactDOM root
const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById("root")).render(<Data/> );
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Function to measure performance in the app
reportWebVitals();

