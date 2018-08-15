#!/bin/bash

set -u

mydir=`dirname $0`
log_server="$HOME/server.log"
log_cf="$HOME/cf.log"

cd $mydir
export RUN_MODE=server
export RUST_LOG="dashboard=debug"

./target/release/server 2> $log_server > $log_server &
./target/release/fetcher 2> $log_cf > $log_cf &
#./target/release/transactions &
