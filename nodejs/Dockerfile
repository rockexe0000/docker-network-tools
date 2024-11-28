# FROM node:16
# FROM ubuntu:22.04

FROM alpine:3.20.3
WORKDIR /var/myapp

RUN apk -U upgrade \
    && apk add --no-cache \
        apache2-utils \
        bash \
        bash-completion \
        bind-tools \
        ca-certificates \
        coreutils \
        curl \
        drill \
        findutils \
        fping \
        git \
        gping \
        ipcalc \
        iperf \
        iproute2 \
        iputils \
        jq \
        libidn \
        macchanger \
        masscan \
        mtr \
        net-tools \
        netcat-openbsd \
        nftables \
        ngrep \
        nload \
        nmap \
        nmap-nping \
        nmap-scripts \
        oath-toolkit-oathtool \
        openssh-client \
        openssl \
        procps \
        socat \
        speedtest-cli \
        tcpdump \
        tcptraceroute \
        tshark \
        wget \
        python3 \
    && apk add --repository=https://dl-cdn.alpinelinux.org/alpine/edge/testing/ --no-cache \
        envsubst \
        grpcurl \
        hping3 \
    && apk add --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community/ --no-cache \
        arp-scan \
        inetutils-telnet \
        kcat \
        nethogs \
    && rm -rf /var/cache/apk/* \
    && echo 'export PS1="[network-tools]\$ "' >> /root/.bash_profile


#RUN apk update && apk add --no-cache zip

#RUN apk update && apk add --no-cache \
#    musl \
#    libzip-dev \
#    zlib-dev \
#    curl-dev \
#    icu-dev \
#    g++ \
#    npm \
#    zip \
#    bash \
#    curl


### Node.js v14
RUN apk add --no-cache \
    musl \
    libzip-dev \
    zlib-dev \
    curl-dev \
    icu-dev \
    g++ \
    zip \
    bash \
    curl \
    npm



    

# Add Node.js v14.21.3 or other 14.x version

#RUN curl -sL https://unofficial-builds.nodejs.org/download/release/v10.24.1/node-v10.24.1-linux-x64-musl.tar.gz | tar xz -C /usr/local --strip-components=1

#RUN curl -sL https://unofficial-builds.nodejs.org/download/release/v12.22.9/node-v12.22.9-linux-x64-musl.tar.gz | tar xz -C /usr/local --strip-components=1

#RUN curl -sL https://unofficial-builds.nodejs.org/download/release/v14.21.3/node-v14.21.3-linux-x64-musl.tar.gz | tar xz -C /usr/local --strip-components=1

#RUN curl -sL https://unofficial-builds.nodejs.org/download/release/v16.20.2/node-v16.20.2-linux-x64-musl.tar.gz | tar xz -C /usr/local --strip-components=1

#RUN curl -sL https://unofficial-builds.nodejs.org/download/release/v18.19.1/node-v18.19.1-linux-x64-musl.tar.gz | tar xz -C /usr/local --strip-components=1

#RUN curl -sL https://unofficial-builds.nodejs.org/download/release/v20.17.0/node-v20.17.0-linux-x64-musl.tar.gz | tar xz -C /usr/local --strip-components=1

RUN curl -sL https://unofficial-builds.nodejs.org/download/release/v22.9.0/node-v22.9.0-linux-x64-musl.tar.gz | tar xz -C /usr/local --strip-components=1






#RUN apk add nodejs 

RUN node -v
RUN npm -v

# Others Dockerfile command，COPY、WORKDIR



#CMD ["bash"]







## FROM mhart/alpine-node:8
## FROM alpine:3.6
#
## FROM mhart/alpine-node:10
## FROM alpine:3.7
#
##FROM mhart/alpine-node:12
##FROM alpine:3.9
#
#FROM mhart/alpine-node:14
#FROM alpine:3.11
#WORKDIR /var/app/
## FROM mhart/alpine-node:16
## FROM alpine:3.13
#
#COPY --from=0 /usr/bin/node /usr/bin/
#
#RUN apk upgrade --no-cache -U && \
#  apk add --no-cache binutils libstdc++ bash npm && \
#  strip /usr/bin/node && \
#  apk del binutils
#
#
#RUN echo $(/usr/bin/node -v)
#RUN /usr/bin/npm -v





#RUN mkdir myapp && cd myapp
RUN npm cache clean --force
RUN npm init -y
RUN npm install express


COPY package.json package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

#copy index.js ./index.js



#RUN rm /usr/bin/corepack
#RUN npm install -g corepack




#RUN npm rm update-notifier
#RUN npm rm -g update-notifier
#
#RUN npm rm ip
#RUN npm rm -g ip
#
#RUN npm rm cookie
#RUN npm rm -g cookie
#
#RUN npm rm ansi-regex
#RUN npm rm -g ansi-regex
#
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/ip
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/semver
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/opener
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/through
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/tough-cookie
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/ansi-regex
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/clone
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/cookie
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/editor
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/http-cache-semantics
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/rc
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/got
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/request
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/tar
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/execa
#
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/string-width/node_modules/ansi-regex
#RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/yargs/node_modules/ansi-regex



#RUN apk del libzip-dev \
#    zlib-dev \
#    curl-dev \
#    icu-dev \
#    mysql-client \
#    npm \
#    curl \
#    sudo


#RUN apk del libzip-dev \
#    zlib-dev \
#    curl-dev \
#    icu-dev \
#    zip \
#    curl \
#    bash \
#    npm
    






EXPOSE 8080
CMD [ "node", "index.js" ]




















## Use the official Node.js 10 image.
## https://hub.docker.com/_/node
#FROM node:10
#
## Create and change to the app directory.
#WORKDIR /usr/src/app
#
## Copy application dependency manifests to the container image.
## A wildcard is used to ensure both package.json AND package-lock.json are copied.
## Copying this separately prevents re-running npm install on every code change.
#COPY package.json package*.json ./
#
## Install production dependencies.
#RUN npm install --only=production
#
## Copy local code to the container image.
#COPY . .
#
## Run the web service on container startup.
#CMD [ "npm", "start" ]