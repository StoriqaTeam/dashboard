FROM rust:1.28.0-stretch

# Install libpq-10, cimg, imagemagick
RUN wget -q https://www.postgresql.org/media/keys/ACCC4CF8.asc -O - | apt-key add - && \
    sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ stretch-pgdg main" >> /etc/apt/sources.list.d/pgdg.list' && \
    apt-get update && \
    apt-get install -y libpq-dev

# Install diesel client
RUN cargo install diesel_cli

# Utils for waiting for some service to be up before starting
ADD docker/wait_for_it.sh /utils/

VOLUME /usr/local/cargo
