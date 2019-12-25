import './sass/style.scss';

const urlRequest = 'http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}';


const loadData = (url) => {
  const status = (response) => {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText));
    }
    return Promise.resolve(response);
  };

  const json = (response) => response.json();

  fetch(url)
    .then(status)
    .then(json)
    .then((data) => {
      console.log('data', data);
    })
    .catch((error) => {
      console.log('error', error);
    });
};

loadData(urlRequest);
