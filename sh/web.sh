#!/bin/bash
cd web
#cd ..
case "$1" in
	"deno")
		LISTEN_PORT=8020 LISTEN_ADDR=127.0.0.1 GRACE_JAIL=1 deno run --allow-read --allow-run ../deno/grace/grace.mjs
		;;
	*)
		python3 -m http.server 8020
		;;
esac
exit