const { PeerServer } = require("peer");

const server = PeerServer({
  port: process.env.PORT || 9000, // Use Render's $PORT env var
  path: "/peerjs",
  key: "peerjs"
});

console.log("PeerJS Server running on port", process.env.PORT || 9000);
