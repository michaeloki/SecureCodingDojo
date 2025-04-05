const path = require('path');
const aescrypto = require(path.join(__dirname, '../aescrypto'));
const util = require(path.join(__dirname, '../util'));
require('dotenv').config();

// temporarily write your passwords here, cleanup after generating the encrypted settings
var dbPass="AS3dtQLmpXqNWuGJ";//DELETE ME WHEN DONE


var config = util.getConfig();
const fs = require('fs');

console.log("======= config.json ========== ");

//You can use the following script from  when you update your key to a new value
console.log(`"encDbPass": "${aescrypto.encrypt(dbPass)}",`);


/**
 * Use this function to generate the properties for a local user
 */

//  const crypto = require('crypto');

//  function genLocalUser(username, givenName, familyName, password){

//      var saltString = crypto.randomBytes(16).toString('base64').toString();
//      var passwordHash = util.hashPassword(password,saltString);

//      var user = {"givenName":givenName,"familyName":familyName,"passHash":passwordHash,"passSalt":saltString};
//      console.log(username+":"+JSON.stringify(user));
//  }

//  genLocalUser("samsung","Darwin","Nunez","mobile");//DELETE ME WHEN DONE


