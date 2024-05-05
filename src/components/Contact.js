const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center">
      <div id="contact" className="flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2 relative">
          <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" className="w-full h-auto" />
          <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>
        <div id="contact-content" className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-4">Reach out to us</h1>
          <p className="mb-6">Require help or have inquiries? Reach out to our approachable team for prompt and supportive assistance.</p>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" placeholder="Eg: Ram Muthyala" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" placeholder="abc@gmail.com" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" className="mt-1 p-2 w-full border rounded-md" rows="4" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
