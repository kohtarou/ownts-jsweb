// src/components/Calendar.js
import React, { useState, useEffect } from 'react';

function Calendar() {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : {};
  });

  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addEvent = (date, event) => {
    setEvents(prevEvents => ({
      ...prevEvents,
      [date]: [...(prevEvents[date] || []), event],
    }));
  };

  const deleteEvent = (date, eventIndex) => {
    setEvents(prevEvents => {
      const newEvents = [...prevEvents[date]];
      newEvents.splice(eventIndex, 1);
      return { ...prevEvents, [date]: newEvents };
    });
  };

  return (
    <div>
      <h1>カレンダー</h1>
      {/* 年、月、日を表示するUIをここに追加 */}
      {/* 日を選択したらイベントを表示 */}
      {selectedDate && (
        <div>
          <h2>{selectedDate}のイベント</h2>
          <ul>
            {(events[selectedDate] || []).map((event, index) => (
              <li key={index}>
                {event}
                <button onClick={() => deleteEvent(selectedDate, index)}>削除</button>
              </li>
            ))}
          </ul>
          <button onClick={() => addEvent(selectedDate, '新しいイベント')}>イベント追加</button>
        </div>
      )}
    </div>
  );
}

export default Calendar;