import { useState, useEffect, useRef } from 'react';

const API_URL = import.meta.env.API_URL || 'http://localhost:5000/api/chat';
// const API_BACKEND_BASE_URL = process.env.API_BACKEND_BASE_URL;

export const useChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'model', text: 'Hello! I am your Vet Assistant. How can I help your pet today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState('');

    useEffect(() => {
        // Generate or retrieve session ID
        let storedSession = localStorage.getItem('vet_chat_session_id');
        if (!storedSession) {
            storedSession = 'sess_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('vet_chat_session_id', storedSession);
        }
        setSessionId(storedSession);
    }, []);

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            // Get context from global config if available
            const context = window.VetChatbotConfig || {};

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMsg.text,
                    sessionId,
                    context
                })
            });

            const data = await response.json();

            setMessages(prev => [...prev, { role: 'model', text: data.reply }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, { role: 'model', text: "Sorry, something went wrong. Please check your connection." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isOpen,
        toggleChat,
        messages,
        input,
        setInput,
        sendMessage,
        isLoading
    };
};