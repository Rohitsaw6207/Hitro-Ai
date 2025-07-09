import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBox from '../components/ChatBox';
import ChatMessage from '../components/ChatMessage';
import LoadingSpinner from '../components/LoadingSpinner';

const CodeChat = () => {
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
        text: "Hi! I'm your Code Assistant. I can help you debug code, write functions, explain programming concepts, and optimize your code. What programming language or problem are you working with?",
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
        text: generateCodeResponse(message),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const generateCodeResponse = (userMessage) => {
    const responses = [
      `# Code Solution

Here's a solution for your problem:

\`\`\`javascript
function exampleFunction(data) {
  // Process the data
  const result = data.map(item => {
    return {
      id: item.id,
      processed: true,
      timestamp: new Date().toISOString()
    };
  });
  
  return result;
}

// Usage example
const inputData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

const processedData = exampleFunction(inputData);
console.log(processedData);
\`\`\`

## Explanation:
- **Line 2**: We use the map function to transform each item
- **Line 3-7**: Return a new object with processed data
- **Line 10**: The function returns the processed array

**Would you like me to explain any specific part in more detail?**`,
      
      `# Debugging Help

Based on your question, here are common issues and solutions:

## Common Errors:
1. **Syntax Errors**
   - Missing semicolons
   - Unmatched brackets
   - Typos in variable names

2. **Logic Errors**
   - Incorrect conditional statements
   - Off-by-one errors in loops
   - Wrong variable scope

3. **Runtime Errors**
   - Null pointer exceptions
   - Array index out of bounds
   - Type mismatches

## Debugging Steps:
1. **Use console.log()** to trace values
2. **Check browser dev tools** for error messages
3. **Test with simple inputs** first
4. **Break down complex functions** into smaller parts

**Share your code and I'll help you identify the specific issue!**`,
      
      `# Best Practices for ${userMessage}

## Code Quality Tips:
- **Use meaningful variable names**
- **Add comments for complex logic**
- **Keep functions small and focused**
- **Handle errors gracefully**

## Example of Clean Code:
\`\`\`javascript
// Good: Descriptive function name and clear logic
function calculateTotalPrice(items, taxRate) {
  if (!items || items.length === 0) {
    return 0;
  }
  
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * taxRate;
  return subtotal + tax;
}

// Usage
const cartItems = [
  { name: 'Book', price: 15.99 },
  { name: 'Pen', price: 2.50 }
];

const total = calculateTotalPrice(cartItems, 0.08);
\`\`\`

**Want me to review your code for improvements?**`
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

export default CodeChat;