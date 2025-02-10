import { createContext, useState} from "react";
export const PortafolioContext = createContext();

export const PortafolioProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentContent, setCurrentContent] = useState(null);
    const [currentTitle, setCurrentTitle] = useState("");


    const openModal = (content, title) => {
        setCurrentContent(content);
        setCurrentTitle(title);
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentContent(null);
        setCurrentTitle("");
    };
    return (
        <PortafolioContext.Provider value={{ 
            isModalOpen,
            currentTitle,
            currentContent,
            setCurrentContent,
            openModal,
            closeModal
            }}>
            {children}
        </PortafolioContext.Provider>
    );
};

export default PortafolioProvider;
