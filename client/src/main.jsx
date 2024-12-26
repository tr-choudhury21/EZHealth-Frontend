import React, { createContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppWrapper } from './auth.jsx'

// export const Context = createContext({ isAuthenticated: false });

// const AppWrapper = ()=>{
//     const[isAuthenticated, setIsAuthenticated] = useState(false);
//     const[user, setUser] = useState({});

//     useEffect(() => {
//         const checkAuth = async () => {
//             try {
//                 const res = await axios.get("http://localhost:5000/api/v1/user/checkAuth", {
//                     withCredentials: true,
//                 });
//                 setIsAuthenticated(res.data.isAuthenticated);
//                 setUser(res.data.user);
//             } catch (err) {
//                 setIsAuthenticated(false);
//             }
//         };
//         checkAuth();
//     }, []);

//     return (
//         <Context.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser}}>
//             <App />
//         </Context.Provider>
//     )
// }

    ReactDOM.createRoot(document.getElementById('root')).render(
        <AppWrapper>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </AppWrapper>
)


// const container = document.getElementById('root');
// if (!container.__reactRoot) { // Prevent multiple root initializations
//     const root = ReactDOM.createRoot(container);
//     root.render(
//         <React.StrictMode>
//             <AppWrapper />
//         </React.StrictMode>
//     );
//     container.__reactRoot = root; // Mark the container as initialized
// }


// main.jsx or AppWrapper.jsx
// import React, { createContext, useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import axios from 'axios';
// import './index.css';

// export const Context = createContext({
//     isAuthenticated: false,
//     setIsAuthenticated: () => {},
//     user: {},
//     setUser: () => {},
// });

// const AppWrapper = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [user, setUser] = useState({});
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const verifyAuth = async () => {
//             try {
//                 const res = await axios.get("http://localhost:5000/api/v1/user/patient/me", {
//                     withCredentials: true,
//                 });
//                 if (res.data.success) {
//                     setIsAuthenticated(true);
//                     setUser(res.data.user);
//                 } else {
//                     setIsAuthenticated(false);
//                     setUser({});
//                 }
//             } catch (err) {
//                 console.error("Authentication verification failed:", err);
//                 setIsAuthenticated(false);
//                 setUser({});
//             } finally {
//                 setLoading(false);
//             }
//         };

//         verifyAuth();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <Context.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
//             <App />
//         </Context.Provider>
//     );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <AppWrapper />
//     </React.StrictMode>,
// );

