import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Quote = () => {
    const [quote, setQuote] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [author, setAuthor] = useState('');
    const [authors, setAuthors] = useState([]);
    const [showAuthors, setShowAuthors] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

    const getRandomQuote = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`${API_BASE_URL}/quotes/random`);
            setQuote(response.data);
        } catch (error) {
            setError('Error fetching random quote');
            console.error('Error fetching random quote:', error);
        } finally {
            setLoading(false);
        }
    }, [API_BASE_URL]);

    const searchQuotes = async (author) => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`${API_BASE_URL}/quotes/search?author=${author}`);
            setSearchResults(response.data);
        } catch (error) {
            setError('Error searching quotes');
            console.error('Error searching quotes:', error);
        } finally {
            setLoading(false);
        }
    };

    const getAuthors = async () => {
        setLoading(true);
        setError('');
        try {
            if (!showAuthors) {
                const response = await axios.get(`${API_BASE_URL}/quotes/authors`);
                setAuthors(response.data);
            }
            setShowAuthors(!showAuthors);
        } catch (error) {
            setError('Error fetching authors');
            console.error('Error fetching authors:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRandomQuote();
    }, [getRandomQuote]);

    return (
        <div className="p-6 bg-[#001e2b] text-gray-900 font-sans shadow-md rounded-md mt-10 mx-auto max-w-3xl border-[5px] border-gray-300">
            <h1 className="text-4xl font-semibold mb-6 text-[#181817] text-center shadow-red-800 bg-green-600 p-4 rounded-lg shadow-lg">
                Quotes of the Day
            </h1>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="mb-6">
                {loading ? (
                    <div className="text-center">Loading...</div>
                ) : (
                    quote && (
                        <div className="p-6 bg-gray-100 text-gray-800 font-serif shadow-md rounded-md">
                            <p className="text-2xl italic mb-4 break-words">{quote.quote}</p>
                            <p className="text-lg text-right font-bold">— {quote.author}</p>
                            <button 
                                onClick={getRandomQuote} 
                                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
                            >
                                New Quote
                            </button>
                        </div>
                    )
                )}
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Search Quotes by Author</h2>
                <input 
                    type="text" 
                    value={author} 
                    onChange={e => setAuthor(e.target.value)} 
                    className="border border-gray-300 p-2 rounded-md w-full mb-2"
                    placeholder="Enter author name"
                />
                <button 
                    onClick={() => searchQuotes(author)} 
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
                >
                    Search
                </button>
                <ul className="mt-4 space-y-2">
                    {searchResults.map((quote, index) => (
                        <li key={index} className="bg-gray-100 p-4 font-serif rounded-md shadow-md">
                            <p className="text-lg break-words mb-2">{quote.text}</p>
                            <p className="text-sm text-gray-700">- <i>{quote.author}</i></p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-white mb-4">All Authors</h2>
                <button 
                    onClick={getAuthors}
                    className="px-4 py-2 bg-green-600 text-white font-serif text-xl rounded-md hover:bg-green-500 mb-4"
                >
                    {showAuthors ? "Hide Authors" : "Show Authors"}
                </button>
                {showAuthors && (
                    <ul className="list-disc pl-5 font-serif space-y-2">
                        {authors.map((author, index) => (
                            <li key={index} className="text-green-700 w-40 rounded-md text-center bg-gray-100">{author}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Quote;
