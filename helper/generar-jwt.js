const jwt = require('jsonwebtoken');

const generarToken = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, 'p1o2m3a4s5q6u7i', {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generear el token')
            } else {
                resolve(token);
            }
        });
    });
}

module.exports = {
    generarToken
}