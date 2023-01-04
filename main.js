const { createClient } = require('redis')

async function start() {
  const client = createClient();

  /**
   * The above code connects to localhost on port 6379. To connect to a different host or port, use a connection string in the format redis[s]://[[username][:password]@][host][:port][/db-number]
   * createClient({
      url: 'redis://alice:foobared@awesome.redis.server:6380'
    });
   */
  
  client.on('error', (err) => console.log('Redis Client Error', err));
  
  await client.connect();
  
  await client.set('key', 'value');
  const value = await client.get('key');
  console.log("🚀 ~ file: main.js:12 ~ start ~ value", value)
  await client.disconnect();
}

start();

