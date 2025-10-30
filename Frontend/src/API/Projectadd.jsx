// import axios from 'axios';
// import React, { useState } from 'react';

// function Projectadd({ onClose }) {
//     const [formData, setFormData] = useState({
//         ico: "",
//         title: "",
//         description: "",
//         git: "",
//         host: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         axios
//             .post("http://localhost:5000/api/project", formData)
//             .then((response) => {
//                 console.log("Project submitted:", response.data);
//                 setFormData({ ico: "", title: "", description: "", git: "", host: "" });
//                 onClose(); // ✅ close modal after submit
//             })
//             .catch((error) => {
//                 console.error("Error posting data:", error);
//             });
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
//                 {/* Close Button */}
//                 <button
//                     onClick={onClose}
//                     className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold"
//                     type="button"
//                 >
//                     &times;
//                 </button>

//                 {/* Form */}
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <h2 className="text-xl font-semibold text-center">Submit Project</h2>

//                     <div className="space-y-1">
//                         <label htmlFor="title" className="text-sm font-medium text-gray-700">Title</label>
//                         <input
//                             id="title"
//                             type="text"
//                             name="title"
//                             value={formData.title}
//                             onChange={handleChange}
//                             className="w-full border px-3 py-2 rounded"
//                             placeholder="Project Title"
//                         />
//                     </div>

//                     <div className="space-y-1">
//                         <label htmlFor="ico" className="text-sm font-medium text-gray-700">Icon</label>
//                         <input
//                             id="ico"
//                             type="text"
//                             name="ico"
//                             value={formData.ico}
//                             onChange={handleChange}
//                             className="w-full border px-3 py-2 rounded"
//                             placeholder="e.g. FaUtensils"
//                         />
//                     </div>

//                     <div className="space-y-1">
//                         <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
//                         <textarea
//                             id="description"
//                             name="description"
//                             value={formData.description}
//                             onChange={handleChange}
//                             className="w-full border px-3 py-2 rounded"
//                             rows="3"
//                         />
//                     </div>

//                     <div className="space-y-1">
//                         <label htmlFor="git" className="text-sm font-medium text-gray-700">GitHub URL</label>
//                         <input
//                             id="git"
//                             type="url"
//                             name="git"
//                             value={formData.git}
//                             onChange={handleChange}
//                             className="w-full border px-3 py-2 rounded"
//                             placeholder="GitHub URL"
//                         />
//                     </div>

//                     <div className="space-y-1">
//                         <label htmlFor="host" className="text-sm font-medium text-gray-700">Live Demo URL</label>
//                         <input
//                             id="host"
//                             type="url"
//                             name="host"
//                             value={formData.host}
//                             onChange={handleChange}
//                             className="w-full border px-3 py-2 rounded"
//                             placeholder="Live URL"
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
//                     >
//                         Submit Project
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Projectadd;


import axios from 'axios';
import React, { useState } from 'react';

function Projectadd({ onClose }) {
    const [formData, setFormData] = useState({
        ico: "",
        title: "",
        description: "",
        git: "",
        host: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        axios
            .post("http://localhost:5000/api/project", formData)
            .then((response) => {
                console.log("Project submitted:", response.data);
                setFormData({ ico: "", title: "", description: "", git: "", host: "" });
                setIsSubmitting(false);
                onClose();
            })
            .catch((error) => {
                console.error("Error posting data:", error);
                setIsSubmitting(false);
            });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm transition-opacity duration-300">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 scale-95 hover:scale-100">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold transition-colors duration-200"
                    type="button"
                    aria-label="Close modal"
                >
                    &times;
                </button>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                        Add New Project
                        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2 rounded-full"></div>
                    </h2>

                    <div className="space-y-2">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Project Title</label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                            placeholder="My Awesome Project"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="ico" className="block text-sm font-medium text-gray-700">Icon Class</label>
                        <div className="relative">
                            <input
                                id="ico"
                                type="text"
                                name="ico"
                                value={formData.ico}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                                placeholder="FaReact, FaCode, etc."
                            />
                            {formData.ico && (
                                <div className="absolute right-3 top-2 text-lg">
                                    <i className={formData.ico.toLowerCase()} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                            rows="3"
                            placeholder="Describe your project..."
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="git" className="block text-sm font-medium text-gray-700">GitHub URL</label>
                            <input
                                id="git"
                                type="url"
                                name="git"
                                value={formData.git}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                                placeholder="https://github.com/..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="host" className="block text-sm font-medium text-gray-700">Live Demo</label>
                            <input
                                id="host"
                                type="url"
                                name="host"
                                value={formData.host}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                                placeholder="https://example.com"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg ${
                            isSubmitting 
                                ? 'bg-orange-400 cursor-not-allowed' 
                                : 'bg-orange-600 hover:bg-orange-700 hover:shadow-xl'
                        }`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </span>
                        ) : (
                            'Submit Project'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Projectadd;