const api_host = 'https://a.cms.omniupdate.com';

const params = new URLSearchParams();

params.append('skin', '');
params.append('username', '');
params.append('password', '');

console.log(params);

axios.post(api_host + '/authentication/admin_login', params)

    .then(response => { 
        console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });

