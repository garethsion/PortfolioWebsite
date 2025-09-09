import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const test = [
  {
    title: "Quantum Science Paper",
    url: "https://www.nature.com/articles/your-paper",
    image: "/images/nature-preview.jpg"  // grab og:image manually or via API
  },
  {
    title: "ArXiv Preprint",
    url: "https://arxiv.org/abs/1234.56789",
    image: "/images/arxiv-preview.png"
  },
  // add more
];

export default function TestCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {publications.map((pub, index) => (
        <div key={index} className="p-4">
          <a href={pub.url} target="_blank" rel="noopener noreferrer">
            <img
              src={pub.image}
              alt={pub.title}
              className="rounded-2xl shadow-md w-full h-64 object-cover"
            />
            <p className="mt-2 text-center text-lg">{pub.title}</p>
          </a>
        </div>
      ))}
    </Slider>
  );
}
