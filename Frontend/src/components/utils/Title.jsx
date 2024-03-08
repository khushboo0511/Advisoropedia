const Title = ({ description }) => {
    return (
      <>
        <img
          className="mt-2"
          src="https://advisoropedia.in/wp-content/uploads/2024/02/cropped-White-Transparent.png"
          alt=""
          height={104}
          width={120}
        />
        <h2 className="card-title text-white text-base-100 pb-2 pt-5">{description}</h2>
      </>
    );
  };
  
  export default Title;