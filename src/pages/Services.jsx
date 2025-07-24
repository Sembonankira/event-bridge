import React from "react";
import Header from "../components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Invitation Design and Printing",
    images: ["/images/Invitation.jpg", "/images/Printer.jpg", "/images/Invitation1.jpg", "/images/Invitation3.png"],
  },
  {
    title: "Site Decoration and Reservation",
    images: ["/images/Decoration.jpeg", "/images/Decoration1.jpeg", "/images/Decoration2.jpeg","/images/Decoration3.jpeg", "/images/Decoration4.jpeg", "/images/Decoration5.jpeg", "/images/Decoration6.jpeg"],
  },
  {
    title: "Event Clothes and Delivery",
    images: ["/images/WeddingClothes1.jpeg", "/images/WeddingClothes2.jpeg", "/images/WeddingClothes3.jpeg", "/images/WeddingClothes3.jpeg"],
  },
  {
    title: "Food and Beverage Catering",
    images: ["/images/Catering.jpg", "/images/Beverage.jpg", "/images/Food.jpg", "/images/Food1.jpeg", "/images/Food2.jpg", "/images/Food3.jpg", "/images/Food4.jpg",
             "/images/Food5.jpeg", "/images/Food6.jpeg","/images/Beverage1.jpg"],
  },
  {
    title: "Cars Rent and Tours Guidance",
    images: ["/images/CarRent.jpg", "/images/CarRent1.jpg", "/images/car.jpg", "/images/car1.jpg", "/images/car2.png", "/images/car3.png", "/images/Vocation.jpg"],
  },
  {
    title: "Protocol and Serving Guests",
    images: ["/images/protocol.jpeg", "/images/protocol1.jpeg", "/images/protocol2.jpeg", "/images/protocol3.jpeg"],
  },
  {
    title: "Photos and Videos Production",
    images: ["/images/VideoProduction.jpg", "/images/PhotoProduction.png", "/images/PhotoProduction1.png", "/images/PhotoProduction2.png"],
  },
  {
    title: "Phone Accessories and Repair  ",
    images: ["/images/ITProduct1.jpg", "/images/ITProduct2.jpg", "/images/ITProduct3.jpg", "/images/ITProduct4.jpg", "/images/ITProduct5.jpg"],
  },
  {
    title: "IT Support Services and Training",
    images: ["/images/Website.jpg", "/images/GraphicDesign.jpg", "/images/CCTV.jpg", "/images/ComputerSupport.jpg", "/images/Depannage.jpg", "/images/Website1.png", "/images/Network.jpg", "/images/Admin.jpg"],
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Services = () => {
  return (
    <div className="container mx-auto p-4">

    <h2 className="text-2xl font-bold mb-4 text-center text-blue-600 flex items-center justify-center gap-2">
    <span role="img" aria-label="service" className="text-xl">🧰</span> Our Services </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-md shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2 text-center">{service.title}</h2>
            <Slider {...sliderSettings}>
              {service.images.map((image, idx) => (
                <div key={idx} className="px-2">
                  <img
                    src={image}
                    alt={`${service.title} ${idx + 1}`}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;