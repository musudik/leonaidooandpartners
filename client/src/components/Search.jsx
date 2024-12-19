import { useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      title: 'Personal Loans',
      category: 'Loans',
      path: '/loans/personal',
    },
    {
      id: 2,
      title: 'Health Insurance',
      category: 'Insurance',
      path: '/insurance/health',
    },
    // Add more mock results
  ]);

  const filteredResults = searchResults.filter(result =>
    result.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SearchIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div className="space-y-4">
        {filteredResults.map((result) => (
          <Link key={result.id} to={result.path}>
            <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium">{result.title}</h3>
              <p className="text-sm text-gray-500">{result.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;