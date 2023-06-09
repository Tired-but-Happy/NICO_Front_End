#!/bin/bash
echo ">> Building contract"
set -e
cd "`dirname $0`"/..
source scripts/flags.sh
cargo build --all --target wasm32-unknown-unknown --release
cp target/wasm32-unknown-unknown/release/*.wasm ./res/