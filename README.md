# node I/O benchmark

tests node's async I/O performance in comparision to worker threads

# result

neofetch:

```
            .-/+oossssoo+/-.               patryk@dev-serv 
        `:+ssssssssssssssssss+:`           --------------- 
      -+ssssssssssssssssssyyssss+-         OS: Ubuntu 20.04 LTS x86_64 
    .ossssssssssssssssssdMMMNysssso.       Host: KVM/QEMU (Standard PC (i440FX + PIIX, 1996) pc-i440fx-5.0)
   /ssssssssssshdmmNNmmyNMMMMhssssss/      Kernel: 5.4.0-90-generic 
  +ssssssssshmydMMMMMMMNddddyssssssss+     Uptime: 156 days, 23 hours, 48 mins 
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    Packages: 1080 (dpkg), 7 (snap) 
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Shell: bash 5.0.17 
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   Resolution: 1024x768 
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   Terminal: /dev/pts/0 
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   CPU: Intel Xeon E5-2640 0 (4) @ 2.499GHz 
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   GPU: 00:02.0 Vendor 1234 Device 1111 
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Memory: 2166MiB / 16013MiB 
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/
  +sssssssssdmydMMMMMMMMddddyssssssss+                             
   /ssssssssssshdmNNNNmyNMMMMhssssss/                              
    .ossssssssssssssssssdMMMNysssso.
      -+sssssssssssssssssyyyssss+-
        `:+ssssssssssssssssss+:`
            .-/+oossssoo+/-.
```

worker:
```
$ time TEST_COUNT=40 QUERY_TYPE=worker node src/index.js
query type: worker

result:
total: 40
fulfilled: 40

real    0m7.911s
user    0m15.479s
sys     0m3.396s
```

worker_shared:
```
$ time TEST_COUNT=40 QUERY_TYPE=worker_shared node src/index.js
query type: worker_shared

result:
thread workers: 4
total: 40
fulfilled: 40

real    0m2.288s
user    0m3.252s
sys     0m0.662s
```

async:
```
$ time TEST_COUNT=40 QUERY_TYPE=async node src/index.js
query type: async

result:
total: 40
fulfilled: 40

real    0m2.139s
user    0m1.584s
sys     0m0.191s
```

# run

```
$ git clone https://github.com/patrykcieszkowski/node-io-benchmark.git
$ npm install
$ time TEST_COUNT=40 QUERY_TYPE=worker node src/index.js
$ time TEST_COUNT=40 QUERY_TYPE=worker_shared node src/index.js
$ time TEST_COUNT=40 QUERY_TYPE=async node src/index.js
```
