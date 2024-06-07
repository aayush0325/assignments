const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    // Your code here
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    jwt.verify(token,jwtPassword,(err,decoded) => {
        if(err){
            return false;
        }else{
            return true;
        }
    })
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
        // Split the JWT into its three parts
        const parts = token.split('.');

        // JWT should have exactly three parts
        if (parts.length !== 3) {
            return false;
        }
    
        // Base64Url decode the payload
        const base64Url = parts[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload;
        try {
            jsonPayload = atob(base64);
        } catch (e) {
            return false;
        }
    
        // Parse the JSON payload
        try {
            return JSON.parse(jsonPayload);
        } catch (e) {
            return false;
        }
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
