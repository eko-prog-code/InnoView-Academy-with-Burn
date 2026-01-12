// src/components/EventInfo.jsx
import { MapPin, Calendar, Clock, Building } from "lucide-react";

export default function EventInfo({ eventInfo }) {
  // Format waktu: jam:menit dengan 2 digit
  const formatTime = (hour, minute) => {
    const h = hour.toString().padStart(2, '0');
    const m = minute.toString().padStart(2, '0');
    return `${h}:${m}`;
  };

  // Format tanggal: 23 February 1988
  const formatDate = (day, monthName, year) => {
    return `${day} ${monthName} ${year}`;
  };

  return (
    <div className="event-info-card">
      <h3>🎯 Event Information</h3>
      
      <div className="event-grid">
        {/* Bagian Lokasi */}
        <div className="event-section">
          <div className="section-header">
            <MapPin size={18} />
            <h4>Event Location</h4>
          </div>
          <div className="location-details">
            <div className="location-line">
              <Building size={16} />
              <strong>{eventInfo.locationName}</strong>
            </div>
            <p>{eventInfo.addressLine1}</p>
            <p>{eventInfo.addressLine2}</p>
            <p>{eventInfo.addressLine3}</p>
          </div>
        </div>

        {/* Bagian Tanggal & Waktu */}
        <div className="event-section">
          <div className="section-header">
            <Calendar size={18} />
            <h4>Date & Time</h4>
          </div>
          <div className="datetime-details">
            <div className="datetime-line">
              <Calendar size={16} />
              <span>
                {formatDate(
                  eventInfo.day,
                  eventInfo.monthName,
                  eventInfo.year
                )}
              </span>
            </div>
            <div className="datetime-line">
              <Clock size={16} />
              <span>
                {formatTime(eventInfo.hour, eventInfo.minute)} WIB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}