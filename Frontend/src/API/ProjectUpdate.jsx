import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectUpdate = ({ project, onClose, onProjectUpdated }) => {
    const [updatedProject, setUpdatedProject] = useState({
        title: "",
        description: "",
        ico: "",
        git: "",
        host: "",
    });

    useEffect(() => {
        if (project) {
            setUpdatedProject({
                title: project.title,
                description: project.description,
                ico: project.ico,
                git: project.git,
                host: project.host,
            });
        }
    }, [project]);

    const handleChange = (e) => {
        setUpdatedProject({
            ...updatedProject,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/project/title/${project.title}`, updatedProject)
            .then((response) => {
                console.log("Project updated:", response.data);
                onProjectUpdated(); // Refresh the project list
                onClose(); // Close the modal
            })
            .catch((error) => {
                console.error("Error updating project:", error);
            });
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-all duration-300">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md relative border border-gray-100 transform transition-all duration-300">
                {/* Close Button (X icon) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold transition-colors duration-200"
                    type="button"
                    aria-label="Close modal"
                >
                    &times;
                </button>

                <h3 className="text-2xl font-bold text-gray-800 mb-6">Update Project</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={updatedProject.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            required
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={updatedProject.description}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[100px]"
                            required
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Icon Class</label>
                        <input
                            type="text"
                            name="ico"
                            value={updatedProject.ico}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="e.g. FaReact"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">GitHub URL</label>
                        <input
                            type="url"
                            name="git"
                            value={updatedProject.git}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Live Demo URL</label>
                        <input
                            type="url"
                            name="host"
                            value={updatedProject.host}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        />
                    </div>
                    
                    <div className="flex justify-end space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm hover:shadow-md transition-all"
                        >
                            Update Project
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectUpdate;