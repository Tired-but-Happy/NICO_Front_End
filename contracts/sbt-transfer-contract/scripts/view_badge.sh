#!/bin/sh

echo ">> Viewing Contract metadata"

near view $ID has_badge '{"account_id": "asdf-sokuri.testnet", "badge_type": "Newbie" }'
near view $ID badge_view '{"account_id": "asdf-sokuri.testnet" }'