require("dotenv").config();
const { App } = require("@slack/bolt");

const slackAppToken = process.env.SLACK_APP_TOKEN;
const slackBotToken = process.env.SLACK_BOT_TOKEN;

const app = new App({
  token: slackBotToken,
  appToken: slackAppToken,
  socketMode: true,
});

app.message(async ({ message, say }) => {
  try {
    // Log the received message
    console.log("Message received:", message.text);

    // Respond to the user
    await say(`You said: "${message.text}"`);
  } catch (error) {
    console.error("Error handling message:", error);
  }
});

app.message("테스트", async ({ message, say }) => {
  console.log(message);
  console.log("Received message");
  say("정상");
});

(async () => {
  await app.start();
  console.log("⚡️ Slack Bolt app is running!");
})();
