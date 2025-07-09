import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBox from '../components/ChatBox';
import ChatMessage from '../components/ChatMessage';
import LoadingSpinner from '../components/LoadingSpinner';

const ResumeChat = () => {
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
        text: "Hi! I'm your Resume Assistant. I can help you create professional resumes, write cover letters, optimize your LinkedIn profile, and prepare for job interviews. What position are you applying for?",
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
        text: generateResumeResponse(message),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const generateResumeResponse = (userMessage) => {
    const responses = [
      `# Resume Template for ${userMessage}

## Professional Summary
Dynamic and results-driven professional with X years of experience in [field]. Proven track record of [key achievements]. Seeking to leverage expertise in [relevant skills] to contribute to [company/role].

## Core Competencies
- **Technical Skills**: [List relevant tools/technologies]
- **Soft Skills**: Leadership, Communication, Problem-solving
- **Industry Knowledge**: [Specific domain expertise]
- **Languages**: [If applicable]

## Professional Experience

### [Job Title] | [Company Name] | [Dates]
- Achieved [specific result] by implementing [action/strategy]
- Managed [team size/budget/project] resulting in [outcome]
- Developed [system/process] that improved [metric] by [percentage]

### [Previous Job Title] | [Company Name] | [Dates]
- Led [initiative] that generated [quantifiable result]
- Collaborated with [stakeholders] to [accomplish goal]

## Education
- **[Degree]** in [Field] | [University] | [Year]
- **Relevant Coursework**: [List if recent graduate]

## Certifications & Awards
- [Professional certifications]
- [Recognition/awards]

**Would you like me to customize any section for your specific background?**`,
      
      `# Cover Letter Template

## Header
[Your Name]
[Your Address]
[City, State ZIP Code]
[Phone Number]
[Email Address]

[Date]

[Hiring Manager's Name]
[Company Name]
[Company Address]

## Opening Paragraph
Dear [Hiring Manager's Name],

I am writing to express my strong interest in the [Position Title] position at [Company Name]. With [X years] of experience in [relevant field], I am excited to contribute to your team's continued success.

## Body Paragraph 1: Why You
In my current role as [Current Position] at [Current Company], I have:
- [Specific achievement with numbers]
- [Relevant skill demonstration]
- [Problem-solving example]

## Body Paragraph 2: Why Them
I am particularly drawn to [Company Name] because:
- [Company value/mission alignment]
- [Specific project/initiative interest]
- [Growth opportunity]

## Closing Paragraph
I would welcome the opportunity to discuss how my experience in [relevant area] can contribute to [Company Name]'s goals. Thank you for considering my application.

Sincerely,
[Your Name]

**Would you like me to help you customize this for a specific job posting?**`,
      
      `# Interview Preparation for ${userMessage}

## Common Interview Questions & Answers:

### 1. "Tell me about yourself"
**Structure**: Present → Past → Future
- **Present**: Current role and responsibilities
- **Past**: Relevant experience and achievements
- **Future**: Career goals and interest in this role

### 2. "Why do you want this job?"
**Focus on**:
- Company research and alignment
- Role-specific excitement
- Growth opportunities
- Value you can add

### 3. "What are your strengths?"
**Choose strengths relevant to the role**:
- Leadership and team collaboration
- Problem-solving and analytical thinking
- Communication and presentation skills
- Technical expertise in [specific area]

### 4. "What's your biggest weakness?"
**Strategy**: Choose a real weakness + improvement plan
- Example: "I used to struggle with delegation, but I've learned to trust my team more and provide clear guidance"

## STAR Method for Behavioral Questions:
- **Situation**: Set the context
- **Task**: Explain your responsibility
- **Action**: Describe what you did
- **Result**: Share the outcome

## Questions to Ask Them:
- What does success look like in this role?
- How does this position contribute to company goals?
- What are the biggest challenges facing the team?
- What opportunities for growth exist?

**Would you like me to help you prepare answers for specific questions?**`
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

export default ResumeChat;