import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIcons } from '../../redix/IconReducer';
import { selectIconByTextEng } from '../../redix/selecIcon'; // Import the selector
import { AppDispatch, RootState } from '../../../store/store'; // Import the types
import { useRouter } from 'next/navigation'; // Import useRouter from next/router

interface IconComponentProps {
  textEng: string; // Add a prop for textEng
}

const IconComponent: React.FC<IconComponentProps> = ({ textEng }) => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter(); // Initialize the useRouter hook
  const selectIcon = selectIconByTextEng(textEng); // Create the selector instance with the passed textEng
  const icon = useSelector((state: RootState) => selectIcon(state));
  const status = useSelector((state: RootState) => state.icons.status);
  const error = useSelector((state: RootState) => state.icons.error);

  useEffect(() => {
    dispatch(fetchIcons());
  }, [dispatch]);

  // Log the status and any errors
  useEffect(() => {
    //console.log('Status:', status);
    //console.log('Error:', error);
  }, [status, error]);

  // Log the icon data if available
  useEffect(() => {
    //console.log('Icon data:', icon);
  }, [icon]);

  const handleClick = (text: string) => {
    // Assuming you want to navigate to a route based on h2_text
    // e.g., /icons/[text]
    router.push(`/icons/${encodeURIComponent(text)}`);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (!icon) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <img src={icon.background_image_url} style={{ width: "30px" }} alt="Icon" />
      {icon.h2_text.map((text, index) => (
        <h2 key={index} onClick={() => handleClick(text)} style={{ cursor: 'pointer' }}>
          {text}
        </h2>
      ))}
     <a href={icon.link}>More Info</a>

    </div>
  );
};

export default IconComponent;
