import React, { useState, useEffect } from 'react';
import ApexCharts from 'apexcharts';
import './Home.css';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Chart rendering from script.js
  useEffect(() => {
    // Circle Chart
    var circleOptions = {
      series: [67],
      chart: {
        height: 250,
        type: 'radialBar',
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '16px',
              color: '#b6b6b6',
              offsetY: 70
            },
            value: {
              offsetY: 30,
              fontSize: '22px',
              color: '#b6b6b6',
              formatter: function(val) {
                return val + "%";
              }
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        }
      },
      stroke: {
        dashArray: 4
      },
      labels: ['Series A'],
    };

    var circleChart = new ApexCharts(document.querySelector("#chart"), circleOptions);
    circleChart.render();

    // Bar Chart
    var barOptions = {
      series: [
        { name: "Series A", data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48] },
        { name: "Series B", data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22] },
        { name: "Series C", data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18] }
      ],
      colors: ["#556ee6", "#f1b44c", "#34c38f"],
      chart: {
        type: 'bar',
        height: 400,
        stacked: true,
        toolbar: {
          show: true,
          tools: {
            download: false
          }
        }
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          endingShape: "rounded"
        }
      },
      stroke: {
        width: 0,
        colors: ['#fff']
      },
      xaxis: {
        categories: ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: { text: undefined }
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + "K";
          }
        }
      },
      fill: { opacity: 1 },
      legend: {
        position: 'bottom',
        horizontalAlign: 'left',
        offsetX: 40
      }
    };

    var barChart = new ApexCharts(document.querySelector("#bars"), barOptions);
    barChart.render();

    // Polar Area Chart (Location Chart)
    var locOptions = {
      series: [14, 23, 21],
      chart: { type: 'polarArea' },
      stroke: { colors: ['#fff'] },
      fill: { opacity: 0.8 },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { position: 'bottom' }
        }
      }]
    };

    var locChart = new ApexCharts(document.querySelector("#loac"), locOptions);
    locChart.render();

    // Clean up charts on component unmount
    return () => {
      circleChart.destroy();
      barChart.destroy();
      locChart.destroy();
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header className={isSticky ? 'sticky' : ''}>
        <section className="head">
          <div className="container flex1">
            <div className="left flex1">
              <div className="logo">
                <img src="images/logo.png" alt="Logo" />
              </div>
              <div className="search flex">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search..." />
              </div>
              <div className="select">
                <select>
                  <option>Mega Menu</option>
                  <option>Mega Menu</option>
                </select>
              </div>
            </div>

            <div className="right flex">
              <div className="img">
                <img src="https://img.icons8.com/color/24/000000/usa.png" alt="Flag" />
              </div>
              <span className="material-icons">grid_view</span>
              <span className="material-icons">crop_free</span>
              <span className="material-icons">notifications</span>
              <div className="admin flex">
                <img src="images/img1.jpg" alt="admin" />
                <div className="text flex">
                  <label>admin</label>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
              <span className="material-icons">settings</span>
            </div>
          </div>
        </section>

        <section className="menu">
          <div className="container">
            <div className="navbar">
              <nav>
                <ul id="menuitem" style={{ maxHeight: menuOpen ? '30vh' : '0px' }}>
                  <li>
                    <a href="#">
                      <span className="material-icons">home</span>
                      <h5>Dashboard</h5>
                    </a>
                  </li>
                  <li>
                    <a href="product.html">
                      <span className="material-icons">drag_indicator</span>
                      <h5>UI Element</h5>
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <span className="material-icons">widgets</span>
                      <h5>Apps</h5>
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <span className="material-icons">folder_copy</span>
                      <h5>Components</h5>
                    </a>
                  </li>
                  <li>
                    <a href="account.html">
                      <span className="material-icons">file_copy</span>
                      <h5>Extra Pages</h5>
                    </a>
                  </li>
                </ul>
              </nav>
              <label className="fa fa-bars" onClick={toggleMenu}></label>
            </div>
          </div>
        </section>
      </header>

      {/* Home Section */}
      <section className="home">
        <div className="container">
          <div className="heading flex1">
            <h3>DASHBOARD</h3>
            <p>Dashboard / Dashboard</p>
          </div>

          <div className="content flex">
            <div className="content_left">
              {/* Circle Chart Section */}
              <div className="chart box">
                <div id="chart"></div>
              </div>

              {/* Earning Section */}
              <div className="earning">
                <div className="flex1">
                  <div className="box">
                    <h3>Monthly Earning</h3>
                    <label>This Month</label>
                    <h2>$34,000</h2>
                    <p>
                      <span>12% <i className="fas fa-long-arrow-up"></i></span> From previous period
                    </p>
                    <button>View More <i className="fas fa-chevron-down"></i></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bar Chart Section */}
            <div className="content_right">
              <div className="bar">
                <div className="heading flex1">
                  <h5>Email Sent</h5>
                  <div className="date flex1">
                    <h4>Week</h4>
                    <h4>Month</h4>
                    <button>Year</button>
                  </div>
                </div>
                <div id="bars"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location (Polar Area) Chart Section */}
      <section className="wrapper">
        <div className="container grid">
          <div className="box location">
            <div className="text">
              <h3>Top Cities Selling Product</h3>
              <img
                src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/889AEE/external-location-map-pin-flatart-icons-outline-flatarticons-10.png"
                alt="Location"
              />
              <h2>1,456</h2>
              <span>San Francisco</span>
            </div>
            <div id="loac"></div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="container flex1">
          <span>2022 © Skote.</span>
          <span>Design & Develop by GorkCoder</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
