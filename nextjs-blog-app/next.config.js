const { PHASE_DEVELOPMENT_SERVER,  } = require('next/constants');

module.exports = (phase) => {
    //Based on the "commond" that you run the DB, Username 
    //and password will be updated accordingly.
    //You can maintain the username and passwords easily.
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'dbuser',
                mongodb_password: 'dbuser',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'my-site'
            }
        }
    }
    //If not in other environment then it will pick up 
    //the below values
    return {
        env: {
            mongodb_username: 'dbuser',
            mongodb_password: 'dbuser',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site'
        }
    }
};