import { useState, useRef, useEffect } from "react";
import styles from "../../styles/components/chat.module.css";
import { FaCommentDots, FaTimes, FaPaperPlane, FaTrash } from "react-icons/fa";

const ChatWidget = ({ en }) => {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = sessionStorage.getItem("chatHistory");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    sessionStorage.setItem("chatHistory", JSON.stringify(history));
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, open]);

  const clearHistory = () => {
    setHistory([]);
    sessionStorage.removeItem("chatHistory");
  };

  const sendMessage = async () => {
    const message = input.trim();
    if (!message || loading) return;

    const newHistory = [...history, { role: "user", content: message }];
    setHistory(newHistory);
    setInput("");
    setLoading(true);

    const capped = history.slice(-10);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history: capped }),
      });
      const data = await res.json();
      setHistory([...newHistory, { role: "assistant", content: data.reply || data.error }]);
    } catch {
      setHistory([...newHistory, { role: "assistant", content: en ? "Something went wrong." : "Něco se pokazilo." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={styles.wrapper}>
      {open && (
        <div className={styles.panel}>
          <div className={styles.header}>
            <span>{en ? "Ask me anything" : "Zeptejte se mě"}</span>
            <div className={styles.headerActions}>
              {history.length > 0 && (
                <button className={styles.closeBtn} onClick={clearHistory} title={en ? "Clear conversation" : "Smazat konverzaci"}>
                  <FaTrash />
                </button>
              )}
              <button className={styles.closeBtn} onClick={() => setOpen(false)}>
                <FaTimes />
              </button>
            </div>
          </div>

          <div className={styles.messages}>
            {history.length === 0 && (
              <p className={styles.placeholder}>
                {en
                  ? "Hi! I'm Markéta – ask me anything about my experience or skills."
                  : "Ahoj! Jsem Markéta – zeptejte se mě na mé zkušenosti nebo dovednosti."}
              </p>
            )}
            {history.map((msg, i) => (
              <div
                key={i}
                className={`${styles.message} ${msg.role === "user" ? styles.user : styles.assistant}`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className={`${styles.message} ${styles.assistant}`}>
                <span className={styles.typing}>···</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className={styles.badge}>
            {en ? "Powered by" : "Postaveno na"} <strong>Python</strong> + <strong>GPT</strong>
          </div>

          <div className={styles.inputRow}>
            <textarea
              className={styles.input}
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder={en ? "Type a message…" : "Napište zprávu…"}
            />
            <button className={styles.sendBtn} onClick={sendMessage} disabled={loading || !input.trim()}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      <button className={styles.fab} onClick={() => setOpen((o) => !o)} aria-label="Chat">
        {open ? <FaTimes /> : <FaCommentDots />}
      </button>
    </div>
  );
};

export default ChatWidget;
