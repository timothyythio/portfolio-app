function Contact() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Want to reach out? More details coming soon!
        </p>
  
        {/* Placeholder for future contact links */}
        <div className="mt-6 space-x-4">
          <a href="https://linkedin.com/in/timothythio" className="text-blue-500 text-lg hover:underline">LinkedIn</a>
          <a href="https://github.com/timothyythio" className="text-blue-500 text-lg hover:underline">GitHub</a>
          <a href="#" className="text-blue-500 text-lg hover:underline">Email</a>
        </div>
      </div>
    );
  }
  
  export default Contact;
  