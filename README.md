# perf-analysis-nodejs-cluster
To analyze the performance differences on using a clustered approach in node js


# How to use?

## Pre-requisites:

- siege (a perf tool)


## Executions:

### Environment settings:
![alt text](https://github.com/RamuRChenchaiah/perf-analysis-nodejs-cluster/blob/master/Environment%20setting.PNG  "Env settings")

### Phase 1:
- node perf-without-cluster-no-computations.js
- siege  -t20s http://localhost:3000
- Results are recorded as:
![alt text](https://github.com/RamuRChenchaiah/perf-analysis-nodejs-cluster/blob/master/1-perf-without-cluster-no-computations-executions.PNG "perf-without-cluster-no-computations")


- node perf-with-cluster-no-computations.js
- siege  -t20s http://localhost:3000
- Results are recorded as:
![alt text](https://github.com/RamuRChenchaiah/perf-analysis-nodejs-cluster/blob/master/1-perf-with-cluster-no-computations-executions.PNG "perf-with-cluster-no-computations")


![alt text](https://github.com/RamuRChenchaiah/perf-analysis-nodejs-cluster/blob/master/2-perf-with-cluster-no-computations.PNG "perf-with-cluster-no-computations")

### Phase 2:
- node perf-without-cluster-computations.js
- siege  -t20s http://localhost:3000
- Results are recorded as:

![alt text](https://github.com/RamuRChenchaiah/perf-analysis-nodejs-cluster/blob/master/3-perf-without-cluster-computations.PNG "perf-without-cluster-computations")



- node perf-with-cluster-computations.js
- siege  -t20s http://localhost:3000
- Results are recorded as:

![alt text](https://github.com/RamuRChenchaiah/perf-analysis-nodejs-cluster/blob/master/3-perf-with-cluster-computations.PNG "perf-with-cluster-computations")

## Conclusion(s):
- as seen, it is clear that clustered computation is better at almost all perf params


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
