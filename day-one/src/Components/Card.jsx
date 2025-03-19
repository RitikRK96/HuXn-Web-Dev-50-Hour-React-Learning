import PropTypes from 'prop-types';

const imageUrl = "https://placehold.co/600x400";

const Card = (props) => {
  return (
    <div className="p-4 sm:p-6 border border-gray-300 rounded-lg shadow-md bg-white 
      hover:shadow-xl transition-all duration-300 ease-in-out 
      transform hover:-translate-y-1 
      w-full max-w-sm mx-auto
      hover:border-blue-400">
      <img 
        src={imageUrl}
        alt="Card image"
        className="w-full h-48 object-cover rounded-md mb-4"
        loading="lazy"
      />
      {props.children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node
};

export default Card;
