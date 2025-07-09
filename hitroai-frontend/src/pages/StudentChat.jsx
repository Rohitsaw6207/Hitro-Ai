import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBox from '../components/ChatBox';
import ChatMessage from '../components/ChatMessage';
import LoadingSpinner from '../components/LoadingSpinner';

const StudentChat = () => {
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
        text: "Hello! I'm your Student Assistant. I can help you with homework, research, study guides, essay writing, and academic questions. What subject are you working on today?",
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
        text: generateStudentResponse(message),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const generateStudentResponse = (userMessage) => {
    const responses = [
      `# Study Guide: ${userMessage}

## Key Concepts to Remember:
1. **Main definitions** - Start with basic terminology
2. **Important formulas** - Write them down and practice
3. **Examples** - Work through sample problems
4. **Practice questions** - Test your understanding

## Study Tips:
- Create flashcards for key terms
- Form study groups with classmates
- Use spaced repetition for better retention
- Teach the concept to someone else

**Would you like me to create specific practice questions for you?**`,
      
      `# Research Help: ${userMessage}

## Research Strategy:
1. **Define your research question** clearly
2. **Identify reliable sources**:
   - Academic journals
   - Books by experts
   - Government websites
   - Educational institutions

3. **Take organized notes**:
   - Use citation format from the start
   - Summarize key points
   - Note page numbers for quotes

## Next Steps:
- Create an outline before writing
- Use proper citation format (APA, MLA, Chicago)
- Start with a strong thesis statement

**What specific aspect would you like help with?**`,
      
      `# Essay Structure for ${userMessage}

## Introduction (1 paragraph)
- **Hook**: Start with an interesting fact or question
- **Context**: Provide background information
- **Thesis**: Clear statement of your main argument

## Body Paragraphs (3-5 paragraphs)
- **Topic sentence**: Main point of the paragraph
- **Evidence**: Facts, quotes, examples
- **Analysis**: Explain how evidence supports your thesis
- **Transition**: Connect to next paragraph

## Conclusion (1 paragraph)
- **Restate thesis** (in different words)
- **Summarize main points**
- **Call to action** or final thought

**Would you like me to help you develop any of these sections?**`
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

export default StudentChat;