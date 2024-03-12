import PropTypes from "prop-types";

function Cards({
  imageUrl,
  title = "UserName",
  description,
  buttonText = "Visit Me",
}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mt-5">
      <img
        src={imageUrl}
        alt={title}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

Cards.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

export default Cards;
