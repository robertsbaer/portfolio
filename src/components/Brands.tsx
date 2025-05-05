import React from "react";

const Brands = () => {
  return (
    <section id="brands" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary-400 font-medium mb-4 flex items-center justify-center">
            <span className="inline-block w-10 h-[2px] bg-primary-500 mr-3"></span>
            Featured On
            <span className="inline-block w-10 h-[2px] bg-primary-500 ml-3"></span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Working with <span className="text-primary-500">Top Agencies</span>
          </h2>
          <a
            href="https://www.designrush.com/agency/web-development-companies/washington-dc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-105"
            aria-label="DesignRush Web Development Agency DC"
          >
            <img
              src="/brands/designrush.png"
              alt="web development agency"
              className="mx-auto rounded-xl shadow-lg bg-white/10 p-4"
              style={{ maxWidth: "220px", width: "100%", height: "auto" }}
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Brands;