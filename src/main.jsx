import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatWidget from './components/ChatWidget';

// Create a container for the widget
const widgetDiv = document.createElement('div');
widgetDiv.id = 'vet-chatbot-root';
document.body.appendChild(widgetDiv);

ReactDOM.createRoot(widgetDiv).render(
    <React.StrictMode>
        <ChatWidget />
    </React.StrictMode>
);
