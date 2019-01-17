const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

module.exports = function startCluster (){
  cluster.setupMaster({ 
    exec: __dirname + '/worker.js'
  });

  if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork({
        PORT: 1337 + i
      });
    }
  }
};
