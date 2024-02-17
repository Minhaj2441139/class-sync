'use client';
import React, { useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const ChatPage = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleUserInput = async () => {
        // Start the loading state
        setIsLoading(true);

        // Add the user's message to the chat history
        setChatHistory(prevChat => [
            ...prevChat,
            { role: 'user', content: userInput },
        ]);

        // Make a request to OpenAI for the chat completion
        const chatCompletion = await openai.chat.completions.create({
            messages: [...chatHistory, { role: 'assistant', content: userInput }],
            model: 'gpt-3.5-turbo',
        });

        // Add the assistant's response to the chat history
        setChatHistory(prevChat => [
            ...prevChat,
            { role: 'assistant', content: chatCompletion.choices[0].message.content },
        ]);

        // Clear the user input field and end the loading state
        setUserInput('');
        setIsLoading(false);
    };

    return (
        <form>
            <div className="flex flex-col h-[600px]">
                <div className="overflow-auto flex-1">
                    {chatHistory.map((message, index) => (
                        <div key={index} className={`p-2 text-white ${message.role === 'user' ? 'bg-blue-500' : 'bg-gray-500'} rounded-lg mb-2 ml-2 mr-2`}>
                            {message.content}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between p-4">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 mr-2 p-2 border rounded-lg"
                    />
                    <button onClick={handleUserInput} disabled={isLoading} type='submit' className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ChatPage;
