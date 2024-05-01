import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Feedback() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submission logic here
    console.log('Feedback submitted:', feedback);
    // Reset the feedback textarea after submission
    setFeedback('');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Feedback Form</h2>
                <div className="form-group">
                  <label htmlFor="feedback">Your Feedback:</label>
                  <textarea
                    className="form-control"
                    id="feedback"
                    name="feedback"
                    placeholder="Enter your feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit Feedback</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Feedback;
