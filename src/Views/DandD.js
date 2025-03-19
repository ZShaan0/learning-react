import React, { useState } from "react";

function DandD() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const searchDndApi = async () => {
        if (!query) return;
        setLoading(true);
        try {
            const endpoints = ["classes", "features", "monsters", "spells", "equipment"];
            const allResults = [];

            for (const endpoint of endpoints) {
                const response = await fetch(`https://www.dnd5eapi.co/api/${endpoint}`);
                const data = await response.json();
                const filteredResults = data.results.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
                allResults.push(...filteredResults.map(item => ({ ...item, category: endpoint })));
            }

            setResults(allResults);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoading(false);
    };

    const fetchItemDetails = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(`https://www.dnd5eapi.co${url}`);
            const data = await response.json();
            setSelectedItem(data);
        } catch (error) {
            console.error("Error fetching item details:", error);
        }
        setLoading(false);
    };

    return (
        <div className="p-4">
            <h1 className="font-bold text-xl mb-3">Search below for details on classes, features, monsters, spells, and equipment:</h1>
            <div className="mb-4">
                <input 
                    type="text" 
                    className="border p-2 w-full rounded-md" 
                    placeholder="Search for a class, feature, monster, spell, or item..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button 
                    onClick={searchDndApi} 
                    className="mt-2 bg-red-500 text-white p-2 rounded-md w-full"
                >
                    Search
                </button>
            </div>
            {loading && <p>Loading...</p>}
            <ul>
                {results && results.length > 0 ? results.map((item, index) => (
                    <li key={index} className="border-b py-2 cursor-pointer text-blue-600 hover:underline" onClick={() => fetchItemDetails(item.url)}>
                        <strong>{item.name}</strong> <span className="text-gray-500">({item.category})</span>
                    </li>
                )) : null}
            </ul>
            {results !== null && results.length === 0 && !loading && <p>No results found.</p>}
            {selectedItem && (
                <div className="mt-4 p-4 border rounded-md">
                    <h2 className="text-lg font-bold">{selectedItem.name}</h2>
                    <pre className="whitespace-pre-wrap text-sm mt-2">{JSON.stringify(selectedItem, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default DandD;
