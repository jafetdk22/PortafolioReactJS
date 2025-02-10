import { useContext } from "react";
import { PortafolioContext } from "../../Context";

const context = useContext(PortafolioContext);

const renderModalContent = (images) => {
  return images.map((image, index) => (
    <div className="modal-image mb-6" key={index}>
      <img key={index} src={image.image} alt={image.description} />
    </div>
  ));
};

const GetModalContent = (images, title) => {
  context.openModal(images, title);
  context.setCurrentContent(renderModalContent(images));
};

export default GetModalContent;
