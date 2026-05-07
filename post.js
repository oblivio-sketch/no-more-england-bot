import { BskyAgent } from "@atproto/api";

const MESSAGE = "No more England";

async function post() {
  const agent = new BskyAgent({ service: "https://bsky.social" });

  await agent.login({
    identifier: process.env.BLUESKY_HANDLE,
    password: process.env.BLUESKY_APP_PASSWORD,
  });

  await agent.post({
    text: MESSAGE,
    createdAt: new Date().toISOString(),
  });

  console.log(`✅ Posted: "${MESSAGE}"`);
}

post().catch((err) => {
  console.error("❌ Failed to post:", err.message);
  process.exit(1);
});
