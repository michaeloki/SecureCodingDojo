
var crypto = require('crypto');

//require('dotenv').config({ path: __dirname + '/.env' });
require('dotenv').config({ path: __dirname + '/.env' });



function getEncParams(keySeed,ivSeed) {
    var myKeySeed = keySeed;
    var myIvSeed = ivSeed;
    var cryptkey = "";
    var iv = "";

    if((myKeySeed === undefined || myKeySeed === null) || (myIvSeed === undefined || myIvSeed === null) ) {
        myKeySeed = process.env.ENC_KEY;
        myIvSeed = process.env.ENC_KEY_IV;
    }

    cryptkey = crypto.createHash('sha256').update(myKeySeed).digest();
    iv = crypto.createHash('sha256').update(myIvSeed).digest().slice(0,16);

    return {key:cryptkey, iv:iv};
}

exports.decrypt = function(encryptdata, keySeed, ivSeed) {
    // console.log(`in decrypt - I got encryptdata, keySeed ivSeed `+ keySeed + ivSeed + encryptdata);
    var keyParams = getEncParams(keySeed,ivSeed);
    encryptdata = Buffer.from(encryptdata, 'base64').toString('binary');
    var decipher = crypto.createDecipheriv('aes-256-cbc', keyParams.key, keyParams.iv);
    var decoded  = decipher.update(encryptdata, 'binary', 'utf8');
    decoded += decipher.final('utf-8');
    return decoded;
}

exports.encrypt = function(cleardata, keySeed, ivSeed) {
    // console.log(`in encrypt - I got keySeed `+ keySeed + ivSeed + cleardata);
    var keyParams = getEncParams(keySeed,ivSeed);
    var encipher = crypto.createCipheriv('aes-256-cbc', keyParams.key, keyParams.iv);
    var encryptdata  = encipher.update(cleardata, 'utf8', 'binary');

    encryptdata += encipher.final('binary');
    let encode_encryptdata = Buffer.from(encryptdata, 'binary').toString('base64');
    return encode_encryptdata;
}

