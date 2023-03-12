const amqp = require("amqplib/callback_api");
amqp.connect(`amqp://localhost:6379`, (err, connection) => {
  if (err) {
    throw err;
  }
  connection.createChannel((err, channel) => {
    if (err) {
      throw err;
    }
    let queue = "Thechnical Glitch";
    let message = "This is technical Channel";
    channel.assertQueue(queue, {
      durable: false,
    });
    console.log("SK@");
    channel.sendToQueue(queue, Buffer.from(message));

    setTimeout(() => {
      connection.close();
    }, 1000);
  });
});
const amqplib = require("amqplib");

var amqp_url = process.env.CLOUDAMQP_URL || "amqp://localhost:6379";

async function produce() {
  console.log("Publishing");
  var conn = await amqplib.connect(amqp_url, "heartbeat=60");
  var ch = await conn.createChannel();
  var exch = "test_exchange";
  var q = "test_queue";
  var rkey = "test_route";
  var msg = "Hello World!";
  await ch
    .assertExchange(exch, "direct", { durable: true })
    .catch(console.error);
  await ch.assertQueue(q, { durable: true });
  await ch.bindQueue(q, exch, rkey);
  await ch.publish(exch, rkey, Buffer.from(msg));
  setTimeout(function () {
    ch.close();
    conn.close();
  }, 500);
}
produce();
