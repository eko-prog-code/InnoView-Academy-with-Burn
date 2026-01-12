// src/components/TicketList.jsx
import { User, Clock, Flame, CheckCircle } from "lucide-react";

export default function TicketList({ tickets, search }) {
  const filteredTickets = [...tickets] // ✅ CLONE ke array JS
    .sort((a, b) => Number(b.issuedAt) - Number(a.issuedAt))
    .filter((t) =>
      t.participantName
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  if (filteredTickets.length === 0) {
    return <p style={{ opacity: 0.6 }}>Peserta tidak ditemukan</p>;
  }

  return (
    <div className="list">
      {filteredTickets.map((t) => (
        <div 
          className={`ticket-card ${t.burned ? 'burned' : ''}`} 
          key={t.ticketId}
        >
          <div className="ticket-header">
            <span className="ticket-id">
              {t.burned ? '🔥' : '🎟'} #{t.ticketId}
            </span>
            <span className={`ticket-status ${t.burned ? 'burned' : 'active'}`}>
              {t.burned ? (
                <>
                  <Flame size={12} /> Burned
                </>
              ) : (
                <>
                  <CheckCircle size={12} /> Active
                </>
              )}
            </span>
          </div>

          <h4>
            <User size={16} /> {t.participantName}
          </h4>

          <small>
            <Clock size={14} />
            {new Date(Number(t.issuedAt) * 1000).toLocaleString()}
          </small>
          
          {t.burned && (
            <div className="burned-overlay">
              <Flame size={20} />
              <span>Ticket Dibakar</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}