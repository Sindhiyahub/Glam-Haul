
import React, { useState } from 'react';
import { RiShareForwardFill } from "react-icons/ri";
import './ps.css';
const ProductShare = ({ productName, productUrl,productPrice  }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: productName,
        url: productUrl,
        price: productPrice
      })
      .then(() => console.log('Product shared successfully!'))
      .catch((error) => console.error('Error sharing product:', error));
    } else {
      setShowModal(true);
    }
  };

  return (
    <div>
      <button onClick={handleShare}>
      <RiShareForwardFill className='shar' />

      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <p>Copy the link below to share:</p>
            <input type="text" value={productUrl} readOnly />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductShare;
