var countServers = function(n, logs, x, queries) {
  let res = [];
  for(let i  = 0; i < queries.length; i++){
    let startTime = queries[i] - x;
    let endTime = queries[i];
    let serverWhichReceivedRequest = new Array(n).fill(0);
    for(let j = 0; j < logs.length; j++){
      if(logs[j][1] >= startTime && logs[j][1] <= endTime){
        serverWhichReceivedRequest[logs[j][0] - 1] = 1;
      }
    }
      let count = 0;
      for(let k = 0; k < serverWhichReceivedRequest.length; k++){
        if(serverWhichReceivedRequest[k] == 0) count++;
      }
      res[i] = count;
    }
  return res;
};

console.log(countServers(3, [[1,3],[2,6],[1,5]], 5, [10,11]))