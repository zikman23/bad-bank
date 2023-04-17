import React from 'react';
import { Card } from './Card';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Card
      header="Welcome to The Bad Bank"
      text={
        <div className="d-flex mb-3">
          <img className="img-fluid" src="./img/bank.png" width="30%" alt="bank-logo" />
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Your money is safe with us!</h5>
              <p className="card-text">
                Create an account and make a deposit. Then, take a look at everyone else's accounts!
              </p>
            </div>
          </div>
        </div>
      }>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/create-account/" className="nav-link">
          <button type="button" className="btn btn-primary px-4 me-md-2">
            Create Account
          </button>
        </Link>
      </div>
    </Card>
  );
}
