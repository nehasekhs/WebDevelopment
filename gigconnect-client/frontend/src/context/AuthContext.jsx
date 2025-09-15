// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [projects, setProjects] = useState([]); // ✅ Projects state

  // ✅ Refresh hone par localStorage se user & projects load karo
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedProjects = localStorage.getItem("projects");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedProjects) setProjects(JSON.parse(storedProjects));
  }, []);

  // ✅ Jab bhi user change hoga to localStorage update karo
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // ✅ Jab bhi projects change hoga to localStorage update karo
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // 🔹 Auth functions
  const login = (email, password) => {
    const loggedUser = { name: "Client User", email };
    setUser(loggedUser);
    setIsFirstLogin(true);
    return loggedUser;
  };

  const signup = (name, email, password) => {
    const newUser = { name, email };
    setUser(newUser);
    setIsFirstLogin(true);
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateUser = (updatedData) => {
    setUser(updatedData);
    localStorage.setItem("user", JSON.stringify(updatedData));
  };

  // 🔹 Projects functions
  const addProject = (project) => {
    const newProject = {
      id: Date.now(), // ✅ unique id
      status: "Active",
      ...project,
    };
    setProjects((prev) => [...prev, newProject]);
  };

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const completeProject = (id) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: "Completed" } : p
      )
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        updateUser,
        isFirstLogin,
        setIsFirstLogin,
        projects,
        addProject,
        deleteProject,
        completeProject,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
