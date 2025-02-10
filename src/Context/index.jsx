import { createContext, useState} from "react";
export const PortafolioContext = createContext();

export const PortafolioProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);
    const [currentTitle, setCurrentTitle] = useState("");

    const openModal = (images, title) => {
        setCurrentImages(images);
        setCurrentTitle(title);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImages([]);
        setCurrentTitle("");
    };
    return (
        <PortafolioContext.Provider value={{ 
            isModalOpen,
            currentImages,
            currentTitle,
            openModal,
            closeModal
            }}>
            {children}
        </PortafolioContext.Provider>

    );
};

export default PortafolioProvider;
