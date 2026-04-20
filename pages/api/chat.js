const PYTHON_API = process.env.PYTHON_API_URL || "http://localhost:8000";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { message, history } = req.body;
  if (!message) return res.status(400).json({ error: "message is required" });

  if (JSON.stringify(req.body).length > 20000)
    return res.status(413).json({ error: "Request too large" });

  try {
    const response = await fetch(`${PYTHON_API}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For":
          req.headers["x-forwarded-for"] || req.socket.remoteAddress,
      },
      body: JSON.stringify({ message, history: history || [] }),
    });

    if (!response.ok) {
      return res.status(502).json({ error: "Chat service unavailable" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(502).json({ error: "Could not reach chat API" });
  }
}
