FROM ubuntu:jammy
COPY target/x86_64-unknown-linux-musl/release/espresso-validator /bin/espresso-validator
COPY validator/api /api
COPY validator/public /public

# Configure the validator to run the demo, with 7 nodes and pre-generated public keys, by default.
COPY validator/src/node-config.toml /config/node-config.toml
COPY validator/src/pk_0 /config/pk_0
COPY validator/src/pk_1 /config/pk_1
COPY validator/src/pk_2 /config/pk_2
COPY validator/src/pk_3 /config/pk_3
COPY validator/src/pk_4 /config/pk_4
COPY validator/src/pk_5 /config/pk_5
COPY validator/src/pk_6 /config/pk_6
ENV ESPRESSO_VALIDATOR_CONFIG_PATH=/config/node-config.toml
ENV ESPRESSO_VALIDATOR_PUB_KEY_PATH=/config

# Set file locations.
ENV ESPRESSO_VALIDATOR_API_APTH=/api/api.toml
ENV ESPRESSO_VALIDATOR_WEB_PATH=/public
ENV ESPRESSO_VALIDATOR_STORE_PATH=/store

# Run a query service at port 70000.
ENV ESPRESSO_VALIDATOR_PORT=70000

# Additional configuration not specified here because it must be set per validator:
# ESPRESSO_VALIDATOR_ID
# ESPRESSO_VALIDATOR_NODES

CMD [ "/bin/espresso-validator", "--full"]
