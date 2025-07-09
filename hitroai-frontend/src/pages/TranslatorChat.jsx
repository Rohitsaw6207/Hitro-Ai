import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBox from '../components/ChatBox';
import ChatMessage from '../components/ChatMessage';
import LoadingSpinner from '../components/LoadingSpinner';

const TranslatorChat = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Initial welcome message
    setMessages([
      {
        id: 1,
        text: "Hello! I'm your Translator assistant. I can translate text between multiple languages, explain cultural context, and help with language learning. What would you like to translate today?",
        isUser: false,
        timestamp: new Date()
      }
    ]);
  }, [navigate]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (message) => {
    const newMessage = {
      id: Date.now(),
      text: message,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: generateTranslatorResponse(message),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const generateTranslatorResponse = (userMessage) => {
    const responses = [
      `# Translation Result

## Original Text:
"${userMessage}"

## Translations:

### Spanish (Español)
"Hola, ¿cómo estás? Espero que tengas un buen día."

### French (Français)
"Bonjour, comment allez-vous ? J'espère que vous passez une bonne journée."

### German (Deutsch)
"Hallo, wie geht es dir? Ich hoffe, du hast einen schönen Tag."

### Japanese (日本語)
"こんにちは、元気ですか？良い一日を過ごしていることを願っています。"

## Cultural Notes:
- **Formal vs. Informal**: Some languages have different levels of politeness
- **Regional Variations**: Consider local dialects and expressions
- **Context Matters**: The same word can have different meanings in different situations

**Would you like me to translate into a specific language or explain the cultural context?**`,
      
      `# Language Learning Help

## Common Phrases for "${userMessage}":

### Beginner Level:
- **Hello** → Hola (Spanish) / Bonjour (French) / Hallo (German)
- **Thank you** → Gracias / Merci / Danke
- **Please** → Por favor / S'il vous plaît / Bitte

### Intermediate Level:
- **How much does it cost?** → ¿Cuánto cuesta? / Combien ça coûte ? / Wie viel kostet das?
- **Where is...?** → ¿Dónde está...? / Où est...? / Wo ist...?

### Advanced Level:
- **I would like to make a reservation** → Me gustaría hacer una reserva / Je voudrais faire une réservation / Ich möchte eine Reservierung machen

## Grammar Tips:
- **Verb conjugation** varies by language
- **Noun gender** (masculine/feminine) in Romance languages
- **Word order** can be different from English

**Which language would you like to focus on?**`,
      
      `# Translation Analysis

## Text: "${userMessage}"

### Translation Breakdown:
1. **Literal Translation**: Word-for-word conversion
2. **Cultural Adaptation**: Adjusted for cultural context
3. **Idiomatic Expression**: Using local expressions when appropriate

### Multiple Options:
- **Formal**: Professional or business context
- **Informal**: Casual conversation
- **Regional**: Local dialect or slang

### Language Pairs Available:
- **European**: Spanish, French, German, Italian, Portuguese
- **Asian**: Japanese, Chinese, Korean, Hindi
- **Middle Eastern**: Arabic, Persian, Turkish
- **Others**: Russian, Dutch, Swedish, Polish

## Quality Factors:
- **Accuracy**: Correct meaning preserved
- **Fluency**: Natural-sounding in target language
- **Context**: Appropriate for situation
- **Tone**: Matches original intent

**Would you like me to provide more translation options or explain specific grammar rules?**`
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
            />
          ))}
          {isLoading && <LoadingSpinner />}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <ChatBox onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default TranslatorChat;