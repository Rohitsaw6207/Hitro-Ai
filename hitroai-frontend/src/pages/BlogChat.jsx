import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBox from '../components/ChatBox';
import ChatMessage from '../components/ChatMessage';
import LoadingSpinner from '../components/LoadingSpinner';

const BlogChat = () => {
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
        text: "Hi! I'm your Blog Generator assistant. I can help you create engaging blog posts, articles, and content. What would you like to write about today?",
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
        text: generateBlogResponse(message),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const generateBlogResponse = (userMessage) => {
    const responses = [
      `# Blog Post Ideas for "${userMessage}"

Here are some engaging blog post ideas:

## 1. The Ultimate Guide to ${userMessage}
A comprehensive guide covering everything your readers need to know.

## 2. Common Mistakes to Avoid
List common pitfalls and how to avoid them.

## 3. Step-by-Step Tutorial
Break down the process into manageable steps.

**Would you like me to develop any of these ideas further?**`,
      
      `# Content Structure for Your Blog Post

## Introduction
- Hook your readers with an interesting fact or question
- Briefly explain what they'll learn
- Set expectations for the content

## Main Content
- Use subheadings to organize your ideas
- Include examples and case studies
- Add bullet points for easy scanning

## Conclusion
- Summarize key points
- Include a call-to-action
- Encourage reader engagement

**Would you like me to write the full blog post for you?**`,
      
      `# SEO-Optimized Blog Post Outline

## Title Ideas:
- "The Complete Guide to ${userMessage}"
- "How to Master ${userMessage} in 2024"
- "10 Proven Strategies for ${userMessage}"

## Key Points to Cover:
1. **Introduction** (150-200 words)
2. **Main sections** (400-500 words each)
3. **Practical examples**
4. **Actionable tips**
5. **Conclusion with CTA**

**Target word count: 1,500-2,000 words for optimal SEO**`
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

export default BlogChat;