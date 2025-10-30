
import React, { useState } from "react";
import axios from "axios";


const ExpiAdd = ({ isOpen, onClose, onAddExperience }) => {
    const [newExperience, setNewExperience] = useState({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        exp: "",
        description: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewExperience((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post("http://localhost:5000/api/experience", newExperience);
            onAddExperience(response.data);
            onClose();
            // Reset form after successful submission
            setNewExperience({
                company: "",
                position: "",
                startDate: "",
                endDate: "",
                exp: "",
                description: "",
            });

        } catch (err) {
            console.error("Error adding experience:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 transition-opacity duration-300">
           
            <div className="relative w-full max-w-md p-4">
                {/* Modal content */}
                <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300 sm:my-8 sm:w-full sm:max-w-lg">
                    {/* Modal header */}
                    <div className="flex items-center justify-between rounded-t-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 sm:px-6">
                        <h3 className="text-lg font-semibold text-white">Add New Experience</h3>
                        <button
                            onClick={onClose}
                            className="ml-1 rounded-md p-1 text-white hover:bg-indigo-800 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Modal body */}
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                    Company Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="company"
                                        type="text"
                                        name="company"
                                        value={newExperience.company}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                        placeholder="e.g. Google"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                                    Position
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="position"
                                        type="text"
                                        name="position"
                                        value={newExperience.position}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                        placeholder="e.g. Software Engineer"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                                        Start Date
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="startDate"
                                            type="text"
                                            name="startDate"
                                            value={newExperience.startDate}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            placeholder="MM/YYYY"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                                        End Date
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="endDate"
                                            type="text"
                                            name="endDate"
                                            value={newExperience.endDate}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            placeholder="MM/YYYY or Present"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="exp" className="block text-sm font-medium text-gray-700">
                                    Duration
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="exp"
                                        type="text"
                                        name="exp"
                                        value={newExperience.exp}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                        placeholder="e.g. 2 years"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        value={newExperience.description}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                        placeholder="Describe your responsibilities and achievements"
                                        required
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Modal footer */}
                    <div className="rounded-b-lg bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className={`inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm transition-colors duration-200 sm:ml-3 sm:w-auto sm:text-sm 
                            ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Adding...
                                </>
                            ) : (
                                'Add Experience'
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpiAdd;