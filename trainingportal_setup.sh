#!/bin/bash
#edit Dockerfile.trainingportal - use config.json 
# ensure mysql accepts connections from all IPs



#cd trainingportal/sql/



#generate random 16-character strings and append them to ENC_KEY, ENC_KEY_IV and CHALLENGE_MASTER_SALT
# RANDOM_ENC_KEY=$(tr -dc 'a-zA-Z0-9' < /dev/urandom | fold -w 16 | head -n 1)
# echo $RANDOM_STRING

# export ENC_KEY=$(tr -dc 'a-zA-Z0-9' < /dev/urandom | fold -w 16 | head -n 1)
# export ENC_KEY_IV=$(tr -dc 'a-zA-Z0-9' < /dev/urandom | fold -w 16 | head -n 1)
# export CHALLENGE_MASTER_SALT=$(tr -dc 'a-zA-Z0-9' < /dev/urandom | fold -w 16 | head -n 1)

touch trainingportal/.env
echo export ENC_KEY=$(tr -dc 'a-zA-Z0-9' < /dev/urandom | fold -w 16 | head -n 1) > trainingportal/.env
echo export ENC_KEY_IV=$(tr -dc 'a-zA-Z0-9' < /dev/urandom | fold -w 16 | head -n 1) >> trainingportal/.env
echo export CHALLENGE_MASTER_SALT=$(tr -dc 'a-zA-Z0-9' < /dev/urandom | fold -w 16 | head -n 1) >> trainingportal/.env
echo export CHALLENGE_MASTER_SALT=$(tr -dc 'a-zA-Z0-9' < /dev/urandom | fold -w 16 | head -n 1) > insecureinc/.env
# touch trainingportal/config.json
# cat trainingportal/config.json.docker >> trainingportal/config.json
# cp trainingportal/config.json ~/dojofiles/
# cd trainingportal
# npm i
# // ask for the db password in Bash and enter it automatically in the field for var encDbPass=""
# // generate encDbPass from the given DBPASS
# sudo chown -R your_username: -R config.json
# cd ..
# sh setup-basic.sh 
# sh run-basic.sh


# // Additional instructions for server config
# // openssl genrsa -out server.key 2048
# // openssl req -new -key server.key -out server.csr
# // openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
# // 
