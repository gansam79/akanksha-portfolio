// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ExpiUpdate = ({ isOpen, onClose, existingData, onUpdate }) => {
//     const [updatedExperience, setUpdatedExperience] = useState({ ...existingData });

//     useEffect(() => {
//         setUpdatedExperience({ ...existingData });
//     }, [existingData]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUpdatedExperience((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const encodedCompany = encodeURIComponent(existingData.company);
//             const res = await axios.put(
//                 `http://localhost:5000/api/experience/company/${encodedCompany}`,
//                 updatedExperience
//             );
//             onUpdate(res.data.data);  // callback to refresh the updated data in UI
//             onClose(); // close modal
//         } catch (err) {
//             console.error("Error updating experience:", err);
//         }
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
//                 <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 text-2xl font-bold">
//                     &times;
//                 </button>
//                 <h2 className="text-xl font-bold mb-4 text-center">Update Experience</h2>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     {["company", "position", "startDate", "endDate", "exp", "description"].map((field) => (
//                         <div key={field}>
//                             <label className="text-sm font-medium capitalize">{field}</label>
//                             {field === "description" ? (
//                                 <textarea
//                                     name={field}
//                                     value={updatedExperience[field]}
//                                     onChange={handleChange}
//                                     className="w-full border rounded px-3 py-2"
//                                     required
//                                 />
//                             ) : (
//                                 <input
//                                     type="text"
//                                     name={field}
//                                     value={updatedExperience[field]}
//                                     onChange={handleChange}
//                                     className="w-full border rounded px-3 py-2"
//                                     required
//                                 />
//                             )}
//                         </div>
//                     ))}

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//                     >
//                         Update Experience
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ExpiUpdate;
import React, { useState, useEffect } from "react";
import axios from "axios";

const ExpiUpdate = ({ isOpen, onClose, existingData, onUpdate }) => {
    const [updatedExperience, setUpdatedExperience] = useState({ ...existingData });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setUpdatedExperience({ ...existingData });
        setErrors({});
    }, [existingData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedExperience((prev) => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!updatedExperience.company.trim()) newErrors.company = 'Company is required';
        if (!updatedExperience.position.trim()) newErrors.position = 'Position is required';
        if (!updatedExperience.startDate.trim()) newErrors.startDate = 'Start date is required';
        if (!updatedExperience.endDate.trim()) newErrors.endDate = 'End date is required';
        if (!updatedExperience.exp.trim()) newErrors.exp = 'Experience duration is required';
        if (!updatedExperience.description.trim()) newErrors.description = 'Description is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        try {
            const encodedCompany = encodeURIComponent(existingData.company);
            const res = await axios.put(
                `http://localhost:5000/api/experience/company/${encodedCompany}`,
                updatedExperience
            );
            onUpdate(res.data.data);
            onClose();
        } catch (err) {
            console.error("Error updating experience:", err);
            setErrors({ submit: 'Failed to update experience. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50 backdrop-blur-sm transition-opacity duration-300">
            <div className="relative w-full max-w-md p-4">
                <div className="relative transform overflow-hidden rounded-xl bg-white shadow-2xl transition-all duration-300 sm:my-8 sm:w-full sm:max-w-lg">
                    {/* Modal header */}
                    <div className="flex items-center justify-between rounded-t-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
                        <h3 className="text-xl font-semibold text-white">Update Experience</h3>
                        <button
                            onClick={onClose}
                            className="rounded-md p-1 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Modal body */}
                    <div className="bg-white px-6 py-5">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {['company', 'position', 'startDate', 'endDate', 'exp'].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-gray-700 capitalize mb-1">
                                        {field === 'exp' ? 'Experience Duration' : field.replace(/([A-Z])/g, ' $1')}
                                    </label>
                                    <input
                                        type="text"
                                        name={field}
                                        value={updatedExperience[field] || ''}
                                        onChange={handleChange}
                                        className={`block w-full rounded-lg border ${errors[field] ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} shadow-sm sm:text-sm`}
                                        placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
                                    />
                                    {errors[field] && (
                                        <p className="mt-1 text-sm text-red-600">{errors[field]}</p>
                                    )}
                                </div>
                            ))}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    name="description"
                                    rows={4}
                                    value={updatedExperience.description || ''}
                                    onChange={handleChange}
                                    className={`block w-full rounded-lg border ${errors.description ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} shadow-sm sm:text-sm`}
                                    placeholder="Describe your responsibilities and achievements"
                                />
                                {errors.description && (
                                    <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                                )}
                            </div>

                            {errors.submit && (
                                <div className="rounded-md bg-red-50 p-3">
                                    <p className="text-sm text-red-700">{errors.submit}</p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Modal footer */}
                    <div className="rounded-b-xl bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className={`inline-flex w-full justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 sm:ml-3 sm:w-auto
                            ${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="-ml-1 mr-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Updating...
                                </>
                            ) : (
                                'Update Experience'
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="mt-3 inline-flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpiUpdate;