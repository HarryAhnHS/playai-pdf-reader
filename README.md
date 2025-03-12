# PlayAI PDF Reader

A modern web application that combines PDF viewing with AI-powered text-to-speech capabilities. Upload your PDFs and listen to them with customizable voice settings.

## Features

- 📱 Responsive PDF viewer with page navigation
- 🔊 AI-powered text-to-speech with multiple voices
- ⚡ Real-time audio generation and playback
- 🎛️ Customizable voice settings (speed, temperature)
- 🌓 Dark/Light mode support

## Technology Stack

- **Frontend Framework**: Next.js 14 with App Router
- **UI Components**: Shadcn/UI + Tailwind CSS
- **Animations**: GSAP
- **PDF Handling**: React-PDF + PDF.js
  - Uses PDF.js Web Worker to run in separate thread to prevent UI blocking
  - Configured via CDN for optimal loading
- **Audio**: Web Audio API + PlayAI API
  - Text-to-speech powered by PlayAI's advanced neural models
  - Real-time audio streaming with low latency
  - Multiple AI voices with customizable parameters
- **Icons**: Lucide React
- **AI Chatbot**: PlayAI Agent API using web embedding
  - Agent behavior prompt: Your only job is to answer questions about the current text on this page. Base your answers on the current text on the page. Do not do anything else. Do not offer to do anything else. After answering one question, ask if they have any more questions about the text on this page. Repeat until they have no more questions, and then end the call immediately.

## Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/playai-pdf-reader.git
   cd playai-pdf-reader
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   # Create a .env.local file in the root directory
   touch .env

   # Add the following variables (replace with your actual values)
   PLAYAI_API_KEY=your_api_key_here
   PLAYAI_USER_ID=your_user_id_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design Decisions

- **Component Architecture**: Modular components for better maintainability and reusability
- **State Management**: React hooks for local state, keeping the implementation simple and efficient
- **Single root layout**: Scalable, consistent, and reusable layout for components
- **TTS Integration**: 
  - For each change in pageText state, immediately request API for audio data to minimize waiting time
  - 
- **UI/UX**: 
  - Tried to maintain a clean, minimal, intuitive interface with smooth experience using GSAP
  - Consistent design language using Shadcn open-source components and global tailwind css components
  - Responsive design
  - Dark mode / light mode using themeProvider context in root layout
- **Websocket API integration**:
  - Event and dynamic pageText content means setup and cleanup at each textData render
    - Use React hooks to manage the WebSocket lifecycle and keep logic separate from UI
    - Cleaner and modular - separating concerns
    - Close and reinitialize the WebSocket when textData updates.
    - Ensure only one active WebSocket connection exists at a time.

- **Security**: 
  - environmental variables for sensitive data
