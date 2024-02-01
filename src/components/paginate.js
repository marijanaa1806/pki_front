import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../slide.css'



const Items = ({ currentItems }) => {
  
  const navigate = useNavigate();
  const handleImageClick = (imageName) => {
    sessionStorage.setItem('selectedImage', JSON.stringify(imageName));
    navigate('/details');
  };

  return (
    <div className="items-container">
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index} className="item" onClick={() => handleImageClick(item)}>
            <img src={`${item.src}`} alt={`Item ${index + 1}`} width={200} height={200} />
          </div>
        ))}
    </div>
  );
};
  const PaginationRounded = ({ itemsPerPage, items }) => {
    const [currentPage, setCurrentPage] = React.useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endOffset = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    const handlePageChange = (event, page) => {
      setCurrentPage(page);
    };
  
    return (
      <div>
        <Items currentItems={currentItems} />
        <Stack spacing={2}>
          <Pagination
            className='centered-div'
            count={pageCount}
            shape="rounded"
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </div>
    );
  };
  

export default PaginationRounded;
