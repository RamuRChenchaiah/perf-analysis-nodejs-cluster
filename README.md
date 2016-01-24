# perf-analysis-nodejs-cluster
To analyse the performance differences on using a clustered approach in node js


# How to use?

## Pre-requisites:

## Executions:

---

# References:

- https://nodejs.org/api/cluster.html
- https://code.google.com/p/siege-windows/

# Benchmark Test Example (from https://code.google.com/p/siege-windows/)
```
- test benchmark http://127.0.0.1 with concurrent thread (connection) 10 for 60 seconds

siege -c10 -t20s http://127.0.0.1
- test benchmark http://127.0.0.1 with no limit concurrent thread (connection) for 20 seconds

siege -b -t20s http://127.0.0.1

USAGE & OPTION
Usage: siege options

siege options URL siege -g URL
Options:
-V, --version VERSION, prints the version number.
-h, --help HELP, prints this section.
-C, --config CONFIGURATION, show the current config.
-v, --verbose VERBOSE, prints notification to screen.
-q, --quiet QUIET turns verbose off and suppresses output.
-g, --get GET, pull down HTTP headers and display the transaction. Great for application debugging.
-c, --concurrent=NUM CONCURRENT users, default is 10
-i, --internet INTERNET user simulation, hits URLs randomly.
-b, --benchmark BENCHMARK: no delays between requests.
-t, --time=NUMm TIMED testing where "m" is modifier S, M, or H. ex: --time=1H, one hour test.
-r, --reps=NUM REPS, number of times to run the test.
-f, --file=FILE FILE, select a specific URLS FILE.
-R, --rc=FILE RC, specify an siegerc file
-l, --log[=FILE] LOG to FILE. If FILE is not specified, the default is used: PREFIX/var/siege.log
-m, --mark="text" MARK, mark the log file with a string.
-d, --delay=NUM Time DELAY, random delay before each requst between 1 and NUM. (NOT COUNTED IN STATS)
-H, --header="text" Add a header to request (can be many)
-A, --user-agent="text" Sets User-Agent in request
-T, --content-type="text" Sets Content-Type in request


```
