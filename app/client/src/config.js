let BASE_URL;

if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://researchq.herokuapp.com';
} else {
  BASE_URL = 'http://localhost:5000';
}

export default BASE_URL;
