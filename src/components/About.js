import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="py-8"> {/* You can replace 'bg-warm-beige' with the class for your chosen background color */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600">Discover the story behind SWIGGY and what makes us special.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-4/12  p-10">
            <img src="https://thebrandhopper.com/wp-content/uploads/2020/11/swiggy_lfd_3.jpg" alt="Restaurant Interior" className="rounded-lg shadow-lg"/>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-800">At SWIGGY, we believe that dining is more than just eating – it's an experience. Our journey began with a passion for bringing people together over delicious food and warm hospitality.</p>
            <p className="text-gray-800 mt-2">From humble beginnings, we've grown into a beloved establishment known for our commitment to quality, creativity, and community. Every dish we serve tells a story, and every guest we welcome becomes a part of ours.</p>
            <p className="text-gray-800 mt-2">Join us on a culinary adventure where flavors reign supreme, and every visit leaves you craving more.</p>
            <Link to={"/"} className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">Explore Our Menu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
