// src/components/BurnControls.jsx
import { useState } from "react";
import { Flame, Trash2, AlertTriangle } from "lucide-react";

export default function BurnControls({ 
  tickets, 
  onBurnTicket, 
  onBurnAllTickets 
}) {
  const [selectedTicket, setSelectedTicket] = useState("");
  const [isConfirmingAll, setIsConfirmingAll] = useState(false);

  const activeTickets = tickets.filter(t => !t.burned);
  const hasActiveTickets = activeTickets.length > 0;

  const handleBurnSingle = () => {
    if (!selectedTicket) {
      alert("Pilih tiket terlebih dahulu");
      return;
    }
    
    if (window.confirm(`Yakin ingin membakar tiket #${selectedTicket}?`)) {
      onBurnTicket(parseInt(selectedTicket));
      setSelectedTicket("");
    }
  };

  const handleBurnAll = () => {
    if (!isConfirmingAll) {
      setIsConfirmingAll(true);
      return;
    }

    if (window.confirm(`Yakin ingin membakar SEMUA tiket (${activeTickets.length} tiket)? Tindakan ini tidak dapat dibatalkan!`)) {
      onBurnAllTickets();
      setIsConfirmingAll(false);
    }
  };

  const cancelBurnAll = () => {
    setIsConfirmingAll(false);
  };

  return (
    <div className="burn-controls-card">
      <h3>🔥 Burn Controls (Owner Only)</h3>
      
      {/* Burn Single Ticket */}
      <div className="burn-section">
        <h4>
          <Flame size={18} />
          Burn Single Ticket
        </h4>
        
        <div className="burn-controls-row">
          <select
            value={selectedTicket}
            onChange={(e) => setSelectedTicket(e.target.value)}
            className="ticket-select"
          >
            <option value="">Pilih tiket...</option>
            {activeTickets.map(ticket => (
              <option key={ticket.ticketId} value={ticket.ticketId}>
                #{ticket.ticketId} - {ticket.participantName}
              </option>
            ))}
          </select>
          
          <button
            onClick={handleBurnSingle}
            disabled={!selectedTicket || !hasActiveTickets}
            className="btn-burn-single"
          >
            <Flame size={16} />
            Burn This Ticket
          </button>
        </div>
      </div>

      {/* Burn All Tickets */}
      <div className="burn-section">
        <h4>
          <Trash2 size={18} />
          Burn All Tickets
        </h4>
        
        {!isConfirmingAll ? (
          <button
            onClick={handleBurnAll}
            disabled={!hasActiveTickets}
            className="btn-burn-all"
          >
            <Trash2 size={16} />
            Burn All Active Tickets ({activeTickets.length})
          </button>
        ) : (
          <div className="burn-confirmation">
            <div className="burn-warning">
              <AlertTriangle size={20} />
              <span>Konfirmasi Burn All!</span>
            </div>
            <p className="warning-text">
              Anda akan membakar {activeTickets.length} tiket aktif. 
              Tindakan ini tidak dapat dibatalkan!
            </p>
            <div className="confirmation-buttons">
              <button onClick={handleBurnAll} className="btn-confirm">
                <Flame size={16} />
                Ya, Burn Semua
              </button>
              <button onClick={cancelBurnAll} className="btn-cancel">
                Batal
              </button>
            </div>
          </div>
        )}
        
        {!hasActiveTickets && (
          <p className="no-tickets-message">
            Semua tiket sudah dibakar
          </p>
        )}
      </div>

      {/* Stats */}
      <div className="burn-stats">
        <div className="stat-item">
          <span className="stat-label">Total Minted:</span>
          <span className="stat-value">{tickets.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Active:</span>
          <span className="stat-value active">{activeTickets.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Burned:</span>
          <span className="stat-value burned">{tickets.length - activeTickets.length}</span>
        </div>
      </div>
    </div>
  );
}