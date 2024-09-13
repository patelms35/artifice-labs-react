import './learn-more.css';
import { useNavigate } from 'react-router-dom';

const Learn = ({ title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === "Web Development") {
      navigate("/web-dev");
    } else if (title === "Application Development") {
      navigate("/app-dev");
    } else if (title === "AR/VR") {
      navigate("/ar-vr");
    } else if (title === "AI/ML") {
      navigate("/ai-ml");
    } else if (title === "UI/UX Design") {
      navigate("/ui-ux");
    }
  };

  return (
    <div>
      <button onClick={handleClick} className="button flex">
        <svg
          className="svgIcon"
          viewBox="0 0 512 512"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
        </svg>
        Learn more
      </button>
    </div>
  );
};

export default Learn;
