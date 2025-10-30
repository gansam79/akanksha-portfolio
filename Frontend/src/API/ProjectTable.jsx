// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Projectadd from "./Projectadd";
// import ProjectUpdate from "./ProjectUpdate"; // Import ProjectUpdate component

// const ProjectTable = () => {
//     const [projects, setProjects] = useState([]);
//     const [showModal, setShowModal] = useState(false); // <-- Modal control for Add Project
//     const [showUpdateModal, setShowUpdateModal] = useState(false); // <-- Modal control for Update Project
//     const [currentProject, setCurrentProject] = useState(null); // <-- Current project for update

//     const fetchProjects = () => {
//         axios
//             .get("http://localhost:5000/api/project")
//             .then((response) => {
//                 setProjects(response.data.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//             });
//     };

//     useEffect(() => {
//         fetchProjects();
//     }, []);

//     const handleDelete = (title) => {
//         axios
//             .delete(`http://localhost:5000/api/project/title/${title}`)
//             .then((response) => {
//                 console.log("Project deleted:", response.data);
//                 // Refresh the project list by re-fetching data
//                 fetchProjects();
//             })
//             .catch((error) => {
//                 console.error("Error deleting project:", error);
//             });
//     };

//     const handleUpdate = (project) => {
//         setCurrentProject(project); // Set the project to be updated
//         setShowUpdateModal(true); // Show the update modal
//     };

//     return (
//         <div className="mt-20 px-4">
//             <h2 className="text-2xl font-semibold text-center mb-6">Project List</h2>

//             <button
//                 onClick={() => window.location.reload()}
//                 className="bg-green-600 text-white px-5 py-1 rounded-lg text-lg hover:bg-green-700 transition mb-2"
//             >
//                 🔄 Refresh
//             </button>

//             <button
//                 onClick={() => setShowModal(true)}
//                 className="bg-yellow-600 text-white px-5 py-1 rounded-lg text-lg hover:bg-gray-700 transition mb-2 ml-2"
//             >
//                 Add Project
//             </button>

//             {showModal && (
//                 <Projectadd
//                     onClose={() => setShowModal(false)} // pass close function
//                     onProjectAdded={fetchProjects} // refresh table on new add
//                 />
//             )}

//             {showUpdateModal && currentProject && (
//                 <ProjectUpdate
//                     project={currentProject}
//                     onClose={() => setShowUpdateModal(false)} // pass close function
//                     onProjectUpdated={fetchProjects} // refresh table after update
//                 />
//             )}

//             {projects.length > 0 ? (
//                 <table className="min-w-full table-auto border-collapse border border-gray-300 mt-4">
//                     <thead>
//                         <tr>
//                             <th className="px-4 py-2 border">Title</th>
//                             <th className="px-4 py-2 border">Icon</th>
//                             <th className="px-4 py-2 border">Description</th>
//                             <th className="px-4 py-2 border">GitHub URL</th>
//                             <th className="px-4 py-2 border">Live Demo URL</th>
//                             <th className="px-4 py-2 border">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {projects.map((pro, index) => (
//                             <tr key={index}>
//                                 <td className="px-4 py-2 border">{pro.title}</td>
//                                 <td className="px-4 py-2 border">{pro.ico}</td>
//                                 <td className="px-4 py-2 border">{pro.description}</td>
//                                 <td className="px-4 py-2 border">
//                                     <a href={pro.git} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">GitHub</a>
//                                 </td>
//                                 <td className="px-4 py-2 border">
//                                     <a href={pro.host} className="text-green-600 underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
//                                 </td>
//                                 <td className="px-4 py-2 border">
//                                     <div className="flex justify-center space-x-2">
//                                         <button
//                                             onClick={() => handleUpdate(pro)} // Trigger update modal
//                                             className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
//                                         >
//                                             Update
//                                         </button>
//                                         <button 
//                                             className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//                                             onClick={() => handleDelete(pro.title)} // Pass the title to delete function
//                                         >
//                                             Delete
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p className="text-center mt-4">No projects available.</p>
//             )}
//         </div>
//     );
// };

// export default ProjectTable;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Projectadd from "./Projectadd";
import ProjectUpdate from "./ProjectUpdate";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProjectTable = () => {
    const [projects, setProjects] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchProjects = () => {
        setLoading(true);
        axios
            .get("http://localhost:5000/api/project")
            .then((response) => {
                setProjects(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleDelete = (title) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            axios
                .delete(`http://localhost:5000/api/project/title/${title}`)
                .then((response) => {
                    fetchProjects();
                    toast.warn("Message deleted successfully!");
                })
                .catch((error) => {
                    console.error("Error deleting project:", error);
                });
        }
    };

    const handleUpdate = (project) => {
        setCurrentProject(project);
        setShowUpdateModal(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
             <ToastContainer 
        position="top-right" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Project Portfolio
                    </h2>
                    <p className="mt-3 text-xl text-gray-500">
                        Manage your development projects
                    </p>
                </div>

                <div className="flex justify-center space-x-4 mb-8">
                    <button
                        onClick={() => fetchProjects()}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                    >
                        <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                        Refresh Projects
                    </button>

                    <button
                        onClick={() => setShowModal(true)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-200"
                    >
                        <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        Add Project
                    </button>
                </div>

                {showModal && (
                    <Projectadd
                        onClose={() => setShowModal(false)}
                        onProjectAdded={fetchProjects}
                    />
                )}

                {showUpdateModal && currentProject && (
                    <ProjectUpdate
                        project={currentProject}
                        onClose={() => setShowUpdateModal(false)}
                        onProjectUpdated={fetchProjects}
                    />
                )}

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                    </div>
                ) : projects.length > 0 ? (
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Icon
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Description
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Links
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {projects.slice().reverse().map((pro, index) => (
                                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-2sm font-medium text-gray-900">{pro.title}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm">{pro.ico}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-2sm text-gray-500 line-clamp-2">{pro.description}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex flex-col space-y-2">
                                                    {pro.git && (
                                                        <a href={pro.git} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center">
                                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                            </svg>
                                                            GitHub
                                                        </a>
                                                    )}
                                                    {pro.host && (
                                                        <a href={pro.host} target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:text-green-800 hover:underline flex items-center">
                                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.457 3.057h-2.537zm1.5-5.057h-1.5v-1.5h1.5v1.5zm-1.5-3h-1.5v-1.5h1.5v1.5zm3 0h-1.5v-1.5h1.5v1.5zm-6-3h-1.5v-1.5h1.5v1.5zm3 0h-1.5v-1.5h1.5v1.5zm-6 6h-1.5v-1.5h1.5v1.5zm9.464 5.535l-1.414-1.414 2.828-2.828 1.414 1.414-2.828 2.828zm-12.728 0l-2.828-2.828 1.414-1.414 2.828 2.828-1.414 1.414zm9.264-12.728l1.414-1.414 2.828 2.828-1.414 1.414-2.828-2.828zm-12.728 0l-1.414-1.414 2.828-2.828 1.414 1.414-2.828 2.828z"/>
                                                            </svg>
                                                            Live Demo
                                                        </a>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex justify-end space-x-3">
                                                    <button
                                                        onClick={() => handleUpdate(pro)}
                                                        className="text-indigo-600 hover:text-indigo-900 transition-colors duration-200"
                                                        title="Edit"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(pro.title)}
                                                        className="text-red-600 hover:text-red-900 transition-colors duration-200"
                                                        title="Delete"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-8 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-3 text-lg font-medium text-gray-900">No projects found</h3>
                        <p className="mt-1 text-sm text-gray-500">Get started by adding your first project.</p>
                        <div className="mt-6">
                            <button
                                onClick={() => setShowModal(true)}
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                            >
                                <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                                Add Project
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectTable;