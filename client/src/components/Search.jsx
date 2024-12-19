import { useState } from 'react';
import { Search as SearchIcon, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      title: 'Personal Loans',
      category: 'Loans',
      description: 'Quick personal loans with competitive interest rates',
      path: '/loans/personal',
    },
    {
      id: 2,
      title: 'Health Insurance',
      category: 'Insurance',
      description: 'Comprehensive health coverage for you and your family',
      path: '/insurance/health',
    },
    {
      id: 3,
      title: 'Gold Investment',
      category: 'Gold',
      description: 'Invest in gold with secure storage options',
      path: '/gold',
    },
    {
      id: 4,
      title: 'Property Listing',
      category: 'Real Estate',
      description: 'Find your dream property with our extensive listings',
      path: '/real-estate',
    },
    {
      id: 5,
      title: 'Electricity Bill Payment',
      category: 'Utilities',
      description: 'Pay your electricity bills hassle-free',
      path: '/electricity',
    }
  ]);

  const filteredResults = searchResults.filter(result =>
    result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    result.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Search Services</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg bg-[#200f01] border border-[#f987008c] 
                       text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f987008c]
                       text-sm md:text-base"
            />
            <SearchIcon className="w-5 h-5 text-[#f987008c] absolute left-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        <div className="space-y-4">
          {filteredResults.map((result) => (
            <Link key={result.id} to={result.path}>
              <div className="bg-[#200f01] text-white rounded-lg p-4 hover:bg-[#2a1403] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{result.title}</h3>
                  <span className="text-xs px-2 py-1 bg-[#f987008c]/20 rounded-full text-[#f987008c]">
                    {result.category}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{result.description}</p>
              </div>
            </Link>
          ))}
          
          {filteredResults.length === 0 && searchQuery && (
            <div className="text-center py-12 bg-[#200f01] rounded-lg">
              <p className="text-gray-400 text-lg">No results found for "{searchQuery}"</p>
              <p className="text-sm text-gray-500 mt-2">Try searching with different keywords</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;