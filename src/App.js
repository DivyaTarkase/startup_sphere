import React, { useState, useEffect } from 'react';
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scheme1 from './images/scheme01.png';
import scheme2 from './images/scheme02.png';
import scheme3 from './images/scheme03.png';
import news1 from './images/news1.jpeg';
import news2 from './images/news2.jpeg';
import news3 from './images/news3.jpeg';
import user1 from './images/user1.jpg';
import user2 from './images/user2.jpg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function App() {
  // // State to hold the current image
  // const [currentImage, setCurrentImage] = useState(0);

  // // Array of images for the carousel
  // const images = [
  //   'images/home1.jpeg',
  //   'images/home2.jpeg',
  //   'images/home3.jpeg', // Add more images as needed
  // ];

  // // Use effect to change the image every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  //   }, 5000); // Change image every 5 seconds
  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, [images.length]);

  // Array of schemes with images and links
  const schemes = [
    { img: scheme1, link: '#' },
    { img: scheme2, link: '#' },
    { img: scheme3, link: '#' },
  ];

  const latestNews = [
    {
      img: news1,
      title: "New Research Grant Launched",
      description: "Details about the latest research grant provided to students...",
    },
    {
      img: news2,
      title: "University Wins National Award",
      description: "Our university has been awarded for excellence in innovation...",
    },
    {
      img: news3,
      title: "New Campus Expansion",
      description: "Construction begins for a new campus building to house additional classrooms...",
    },
    {
      img: news3,
      title: "New Campus Expansion",
      description: "Construction begins for a new campus building to house additional classrooms...",
    },
    {
      img: news3,
      title: "New Campus Expansion",
      description: "Construction begins for a new campus building to house additional classrooms...",
    },
  ];

  const trendingProfiles = [
    {
      img: user1,
      name: "Jane Doe",
      role: "AI Researcher",
    },
    {
      img: user2,
      name: "John Smith",
      role: "Innovator",
    },
    {
      img: user1,
      name: "Emily Brown",
      role: "Data Scientist",
    },
  ];

  const upcomingEvents = [
    {
      title: "Annual Research Symposium",
      date: "15th December 2024",
      description: "Join us for a day of exciting presentations...",
    },
    {
      title: "Innovation Expo",
      date: "22nd December 2024",
      description: "Discover the latest innovative solutions from students...",
    },
    {
      title: "Workshop on AI Research",
      date: "5th January 2025",
      description: "Join our experts for a deep dive into AI research...",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [height, setHeight] = useState("auto"); // Dynamically adjust the height

  // Function to handle next event transition
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % upcomingEvents.length);
  };

  // Function to handle previous event transition
  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + upcomingEvents.length) % upcomingEvents.length
    );
  };

  // Automatically slide to the next event every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000); // 5000 ms = 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Adjust height based on content (optional)
  useEffect(() => {
    const eventHeight = document.querySelector(".event-item")?.offsetHeight;
    if (eventHeight) {
      setHeight(eventHeight + 40); // Add some padding for spacing
    }
  }, [currentIndex]);

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Animation speed
    slidesToShow: 1, // Number of slides visible
    slidesToScroll: 1, // Number of slides scrolled
    arrows: true, // Show arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval
    adaptiveHeight: true, // Adjust height to fit content
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav>
        <a href="index.html"><img src="images/logo.png" alt="Logo" /></a>
        <div className="nav-links">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">STARTUP</a></li>
            <li><a href="#courses">RESEARCHERS</a></li>
            <li><a href="#blog">IPR TRACKING</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><a href="#register" className="registration-btn">REGISTER HERE</a></li>
          </ul>
        </div>
      </nav>

      <section className="home">
        {/* Scheme Carousel */}
        <div
          className="carousel-container"
          style={{
            width: '60%',
            height: '60%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Optional background for contrast
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional shadow
          }}
        >
          <Slider {...sliderSettings}>
            {schemes.map((scheme, index) => (
              <div key={index} className="carousel-item">
                <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={scheme.img}
                    alt={`Scheme ${index + 1}`}
                    className="scheme-image"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Counter Section */}
      <div className="counter-section">
        <div className="counter-item">
          <h2>234<span>+</span></h2>
          <p>Fundraisers</p>
        </div>
        <div className="counter-item">
          <h2>56<span>+</span></h2>
          <p>Raised</p>
        </div>
        <div className="counter-item">
          <h2>234k<span>+</span></h2>
          <p>Donations</p>
        </div>
        <div className="counter-item">
          <h2>160,527<span>+</span></h2>
          <p>Volunteers</p>
        </div>
      </div>

      {/* News Section */}
      <div className="main-container">
        <div className="left-column">
          {/* Latest News Section */}
          <section className="news-section">
            <h2>Latest News</h2>
            <div className="news-slider">
              {latestNews.map((news, index) => (
                <div className="news-item" key={index}>
                  <img src={news.img} alt={news.title} />
                  <h3>{news.title}</h3>
                  <p>{news.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Trending Profiles and Featuring Funding */}
          <div className="profile-funding">
            <section className="trending-section">
              <h2>Trending Profiles</h2>
              <div className="profile-grid">
                {trendingProfiles.map((profile, index) => (
                  <div className="profile-item" key={index}>
                    <img src={profile.imgSrc} alt={profile.name} />
                    <h3>{profile.name}</h3>
                    <p>{profile.role}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="funding-section">
              <h2>Featuring Funding</h2>
              <p>Get insights into the most funded research projects...</p>
            </section>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column" style={{ height: `${height}px` }}>
          {/* Upcoming Events Section */}
          <section className="upcoming-events">
            <h2>Upcoming Events</h2>
            <div className="event-item">
              <h3>{upcomingEvents[currentIndex].title}</h3>
              <p>{upcomingEvents[currentIndex].date}</p>
              <p>{upcomingEvents[currentIndex].description}</p>
              <div className="event-buttons">
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* About Us Section */}
      <section className="about-us" id="about">
        <h1>About Us</h1>
        <div className="about">
          <div className="row">
            <div className="about-col">
              <h1>We are the world's largest university</h1>
              <p><b>Our Mission</b><br />
                To foster an inclusive and dynamic learning environment that encourages intellectual curiosity, critical thinking, and the pursuit of knowledge.
                We aim to empower our students to make a positive impact on the world through education, research, and community engagement.<br /><br />
                <b>Our Vision</b><br />
                To be a leading global university recognized for excellence in education, research, and innovation, and to prepare our students to address 
                the complex challenges of the 21st century with integrity, creativity, and a sense of social responsibility.
              </p>
              <a href="#explore" className="hero-btn red-btn">EXPLORE NOW</a>
            </div>
            <div className="about-col">
              <img src="images/about.jpg" alt="About Us" />
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action (CTA) Section */}
      <section className="cta">
        <h1>Join Our Community</h1>
        <a href="#contact" className="hero-btn">CONTACT US</a>
      </section>

      {/* Footer Section */}
      <footer className="footer">
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>
          <strong>Startup Gujarat Cell</strong> <br />
          Block No: 1, 3rd Floor, Udhyog Bhavan, Sector: 11, <br />
          Gandhinagar - 382010 Gujarat, INDIA.
        </p>
        <p>
          📞 079-23252588 / 1800-233-0616 <br />
          ✉ icstup[at]gujarat[dot]gov[dot]in
        </p>
        <ul className="footer-links">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Copyright Policy</li>
          <li>Hyperlink Policy</li>
          <li>Disclaimer</li>
          <li>Language Policy</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <li>FAQs</li>
          <li>Policies</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Other Links</h3>
        <ul>
          <li>Contact Us</li>
          <li>Notification</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div>
          <p>
            @ 2024 StartUp Gujarat Cell. All Rights Reserved. Visitor Counter :
            129104
          </p>
        </div>
        <div>
          <p>Last modified on: 16-11-2024</p>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
