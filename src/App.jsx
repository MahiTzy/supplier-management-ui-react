import { useState } from 'react';
import './App.css';

const App = () => {
    const [location, setLocation] = useState('');
    const [natureOfBusiness, setNatureOfBusiness] = useState('');
    const [manufacturingProcess, setManufacturingProcess] = useState('');
    const [suppliers, setSuppliers] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const handleSearch = async (page = 0) => {
        try {
            const normalizedLocation = location.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
            const response = await fetch(`http://localhost:8080/api/supplier/query?location=${normalizedLocation}&natureOfBusiness=${natureOfBusiness}&manufacturingProcess=${manufacturingProcess}&page=${page}&size=10`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (response.ok) {
                setSuppliers(data.content);
                setTotalPages(data.totalPages);
                setCurrentPage(data.number);
                setError(null);
            } else {
                setError(data.message || 'Error fetching suppliers');
                setSuppliers([]);
                setTotalPages(1);
                setCurrentPage(0);
            }
        } catch (err) {
            setError('Network error', err);
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            setCurrentPage(newPage);
            handleSearch(newPage);
        }
    };

    return (
        <div>
            <div className='header'>
                <h1>Supplier Search</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <select
                        value={natureOfBusiness}
                        onChange={(e) => setNatureOfBusiness(e.target.value)}>
                        <option value="">Select nature of business</option>
                        <option value="small_scale">Small Scale</option>
                        <option value="medium_scale">Medium Scale</option>
                        <option value="large_scale">Large Scale</option>
                    </select>
                    <select
                        value={manufacturingProcess}
                        onChange={(e) => setManufacturingProcess(e.target.value)}
                    >
                        <option value="">Select manufacturing process</option>
                        <option value="moulding">Moulding</option>
                        <option value="3d_printing">3D Printing</option>
                        <option value="coating">Coating</option>
                        <option value="casting">Casting</option>
                    </select>
                    <button onClick={() => handleSearch(0)}>Search</button>
                </div>
                {error && <strong><p style={{ color: 'red' }}>{error}</p></strong>}
            </div>
            <div>
                <h2 style={{ textAlign: "center" }}>Results</h2>
                {suppliers.length === 0 ? (
                    <p style={{ textAlign: "center" }}>No suppliers found</p>
                ) : (
                    <ul>
                        {suppliers.map((supplier) => (
                            <li key={supplier.supplierId}>
                                <h3>{supplier.companyName}</h3>
                                <p>Website: <a href={supplier.website} target="_blank" rel="noopener noreferrer">{supplier.website}</a></p>
                                <p>Location: {supplier.location}</p>
                                <p>Nature of Business: {supplier.natureOfBusiness}</p>
                                <p>Manufacturing Processes: {supplier.manufacturingProcesses.join(', ')}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                >
                    Previous
                </button>
                <span>Page {currentPage + 1} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;
