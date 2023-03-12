const amqplib = require("amqplib");

var amqp_url = process.env.CLOUDAMQP_URL || "amqp://localhost:6379";

async function do_consume() {
  console.log("SK@");
  var conn = await amqplib.connect(amqp_url, "heartbeat=60");
  var ch = await conn.createChannel();
  var q = "test_queue";
  await conn.createChannel();
  await ch.assertQueue(q, { durable: true });
  await ch.consume(
    q,
    function (msg) {
      console.log(msg.content.toString());
      ch.ack(msg);
      ch.cancel("myconsumer");
    },
    { consumerTag: "myconsumer" }
  );
  setTimeout(function () {
    ch.close();
    conn.close();
  }, 500);
}

do_consume();
