const api_host = 'https://a.cms.omniupdate.com';

const params = new URLSearchParams();

params.append('skin', 'uark');
params.append('username', 'api_admin');
params.append('password', 'mikeandtrevorapi2020');

console.log(params);

axios.post(api_host + '/authentication/admin_login', params)

    .then(response => { 
        console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });

