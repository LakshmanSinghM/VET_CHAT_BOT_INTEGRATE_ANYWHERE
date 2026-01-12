# VET_CHAT_BOT_INTEGRATE_ANYWHERE

An embeddable, React-based chatbot widget for veterinary clinics. Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/).

## Description

This project provides a lightweight, highly customizable chat widget that can be embedded into any website using a single script tag. It communicates with the `VET_CHATBOT_BACKEND_NESTJS` service to provide AI-driven veterinary support and appointment booking.

## Features

-   **Embeddable**: Designed to be compiled into a single JS file for easy integration.
-   **Context Aware**: Accepts user context (pet name, owner name) from the host page.
-   **Real-time Interaction**: Smooth chat interface with loading states and connection error handling.

## Tech Stack

-   **Framework**: React (Vite)
-   **Styling**: CSS Modules / Vanilla CSS (injected via JS)
-   **Build Tool**: Vite (configured for IIFE library capability)

## Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

## Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd VET_CHAT_BOT_INTEGRATE_ANYWHERE
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## Configuration

1.  Create a `.env` file in the root directory.
2.  Set the `API_URL` to point to your backend service:

    ```env
    API_URL=http://localhost:5000/api/chat
    ```
    *(Note: Ensure your backend is running/deployed and accessible)*

## Development

Run the development server to test locally:

```bash
npm run dev
```

## Build for Production

To create the embeddable script:

```bash
npm run build
```

This will generate `dist/chatbot.js`.

## Integration

To use the chatbot on a website, include the built script at the end of your `<body>` tag:

```html
<script src="path/to/chatbot.js"></script>
```

You can also pass configuration via a global object *before* loading the script:

```html
<script>
    window.VetChatbotConfig = {
        userId: "123",
        userName: "John Doe",
        petName: "Bella"
    };
</script>
<script src="path/to/chatbot.js"></script>
```
