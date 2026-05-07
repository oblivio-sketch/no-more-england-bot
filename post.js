import { BskyAgent } from "@atproto/api";

const MESSAGE = "No more England";

async function post() {
  const handle = process.env.BLUESKY_HANDLE;
  const password = process.env.BLUESKY_APP_PASSWORD;

  console.log("Handle:", handle);
  console.log("Password length:", password?.length);
  console.log("Password format valid:", /^[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}$/.test(password));

  const agent = new BskyAgent({ service: "https://bsky.social" });

  await agent.login({ identifier: handle, password });

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
