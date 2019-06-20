#!/bin/bash

# Ubuntu 16
apt-get update
apt-get install curl wget

# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

echo "export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm\" [ -s "$NVM_DIR/nvm.sh\" ] && \. \"$NVM_DIR/nvm.sh\" # This loads nvm" >> ~/.bash_profile
source ~/.bash_profile

# install node: 10.16.0 LTS
nvm install 10.16.0
nvm alias default 10.16.0
