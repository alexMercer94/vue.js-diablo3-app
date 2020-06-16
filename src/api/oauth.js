import { post } from 'axios';

// Credentials
const clientId = 'f7a2b59d742e442d9f98c178c7a36d68';
const clientSecret = 'HqO295FD1chgL0bjE3dTnCA3dxyFQxCW';

const region = 'eu';
const API_URL = `https://${region}.battle.net/oauth/token`;

/**
 * Get token
 */
const getToken = () => {
    const body = new FormData();
    body.append('grant_type', 'client_credentials');

    const config = {
        headers: { 'Content-Type': 'multipart/formdata' },
        auth: { username: clientId, password: clientSecret },
    };

    return post(API_URL, body, config);
};

export { getToken };
