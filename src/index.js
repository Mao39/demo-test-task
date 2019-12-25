import './sass/style.scss';

const urlRequest = 'http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}';


const loadData = url => {

    const status = function (response) {
        if (response.status !== 200) {
            return Promise.reject(new Error(response.statusText))
        }
        return Promise.resolve(response)
    }

    const json = function (response) {
        return response.json()
    }

    fetch(url)
        .then(status)
        .then(json)
        .then(function (data) {
            console.log('data', data)
        })
        .catch(function (error) {
            console.log('error', error)
        })

}

loadData(urlRequest)