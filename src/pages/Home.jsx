const Home = () => {
  return (
    <section
      className="relative text-white py-20 px-6 bg-[url('/images/about-bg.jpg')] bg-no-repeat bg-center bg-cover animate-[pan-bg_30s_linear_infinite]"
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl text-blue font-bold mb-4">Event Bridge 250</h2>
        <p className="text-lg leading-relaxed">
          Event Bridge is for Event Management and IT Support Services. 
        </p>
        <p className="text-lg leading-relaxed"> 
                 We connect you to the Services Providers!
        </p>
        <p className="text-lg leading-relaxed"> 
                 Tuguhuza n'abaguha services z'ibirori n'iz'ikoranabuhanga!
        </p>
      </div>
    </section>
  );
};

export default Home;
