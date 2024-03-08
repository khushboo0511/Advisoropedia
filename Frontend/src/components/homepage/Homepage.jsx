import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div>
      <Page1 />
    </div>
  );
};

// 1st page
const Page1 = () => {
  return (
    <div
      className="relative bg-cover bg-fixed bg-center h-screen md:h-screen shadow-xl"
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

export default Homepage;
