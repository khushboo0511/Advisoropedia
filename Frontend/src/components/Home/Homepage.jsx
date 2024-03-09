import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div>
      <Page1 />
      <Footer />
    </div>
  );
};

// 1st page
const Page1 = () => {
  return (
    <div
      className="bg-cover bg-fixed bg-center min-h-screen md:min-h-screen"
      style={{
        backgroundImage: `radial-gradient(ellipse, #0000, #0007),
        linear-gradient(0deg, #9703, #9501),url('https://wallpaperaccess.com/full/1116882.jpg')`,
      }}
    >
      <Navbar />
      <div className="container mx-auto text-center pt-20 md:pt-40">
        <h3 className="text-4xl md:text-5xl font-bold text-white">
          Creative & Innovative Ideas
        </h3>
        <h3 className="text-sm md:text-base font-bold text-white pt-3.5">
          All Industries - One Solution
        </h3>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-90 text-white bg-opacity-700 min-h-48 px-6 md:px-16 py-16 md:py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <p className="font-bold text-center md:text-left">
            About Us
          </p>
          <p className="text-sm tracking-widest text-center md:text-left">
          Your Trusted Guide in Real Estate, Digital Marketing, EdTech, and Startup Incubation!
          </p>
          <div className="text-start mt-3">
            <br />
            <hr />
            <h2 className="text-xl font-bold text-red-700 mt-2">Get in touch</h2>
            <ul className="text-small">
              <li>Call Us: +91 96206 11755</li>
              <li>Email: <a href="mailto:info@advisoropedia.in">info@advisoropedia.in</a></li>
              <li>Office: A706 Purva Sunshine Apt, Sarjapur Road, Bengaluru - 560035</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 md:mt-0 flex flex-col items-center">
          <img
            src="https://cdnb.artstation.com/p/marketplace/presentation_assets/000/360/605/large/file.jpg?1588300331"
            alt="Our Founder"
            className="w-28 h-28 object-cover rounded-full"
          />
          <p className="mt-2">Our Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
