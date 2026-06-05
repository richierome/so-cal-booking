import "./App.css";
import { useState } from "react";





const bands = [
  {
    name: "Hell City Havoc",
    genre: "Psychobilly / Punk",
    location: "Southern California",
    status: "Available",
    rate: "$800 - $1,500",
  },
  {
    name: "The Grave Shakers",
    genre: "Rockabilly",
    location: "Los Angeles, CA",
    status: "Booked",
    rate: "$1,200+",
  },
  {
    name: "Dead Radio Kings",
    genre: "Punk Rock",
    location: "Orange County, CA",
    status: "Available",
    rate: "$700 - $1,000",
  },
];

const bookingRequests = [
  {
    band: "Hell City Havoc",
    venue: "Alex’s Bar",
    city: "Long Beach, CA",
    date: "2026-08-15",
    status: "Pending",
  },
  {
    band: "The Grave Shakers",
    venue: "The Viper Room",
    city: "Los Angeles, CA",
    date: "2026-09-02",
    status: "Confirmed",
  },
];

const venues = [
  {
    name: "Characters",
    city: "Pomona, CA",
    // contact: "booking@alexsbar.com",
  },
  {
    name: "Starlite Loung",
    city: "Glendale, AZ",
    // contact: "events@viperroom.com",
  },
];




function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="app">

      <nav className="navbar">
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#roster" onClick={() => setMenuOpen(false)}>
            Roster
          </a>

          <a href="#bookings" onClick={() => setMenuOpen(false)}>
            Bookings
          </a>

          <a href="#venues" onClick={() => setMenuOpen(false)}>
            Venues
          </a>

          <a href="#client-inquiry" onClick={() => setMenuOpen(false)}>
            Inquiry
          </a>
        </div>
      </nav>
  
     <section className="hero">
        {/* <p className="eyebrow">Booking By Romeo</p> */}

        <div className="hero-image-container">
        <img
          src={`${import.meta.env.BASE_URL}images/romeo2.png`}
          alt="Romeo Booking"
          className="hero-image"
        />
        </div>
        <h1 className="intro">Bands & Artists</h1>
        <p className="bio">
          {/* Bands I've worked with. */}
          {/* Professional booking management for bands, venues
          and touring artists. */}
        </p>
        {/* <a className="hero-btn" href="#bookings">
          Book Now
        </a> */}

        <div className="band-links">
        <a
          href="https://www.instagram.com/hell_city_havoc_official/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hch.png`}
            alt="Hell City Havoc"
          />
        </a>

        <a
          href="https://www.instagram.com/hellbillys_band_page/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hellbillys.png`}
            alt="So Cal Romeo"
          />
        </a>

        <a
          href="https://www.instagram.com/the_hexxers_/"
          target="_blank"
          rel="noopener noreferrer"
          className="band-link"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hexxers.png`}
            alt="Band 3"
          />
        </a>
      </div>
      </section>

       {/* <section className="stats">
        <div>
          <h3>{bands.length}</h3>
          <p>Bands Managed</p>
        </div>
        <div>
          <h3>{bookingRequests.length}</h3>
          <p>Booking Requests</p>
        </div>
        <div>
          <h3>{venues.length}</h3>
          <p>Venue Contacts</p>
        </div>
      </section>  */}

       {/* <section id="roster" className="section">
        <h2>Band Roster</h2>
        <div className="card-grid">
          {bands.map((band) => (
            <article className="card" key={band.name}>
              <div className="card-header">
                <h3>{band.name}</h3>
                <span className={band.status === "Available" ? "green" : "red"}>
                  {band.status}
                </span>
              </div>
              <p>{band.genre}</p>
              <p>{band.location}</p>
              <strong>{band.rate}</strong>
            </article>
          ))}
        </div>
      </section>  */}

       {/* <section id="bookings" className="section">
        <h2>Booking Requests</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Band</th>
                <th>Venue</th>
                <th>City</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookingRequests.map((booking) => (
                <tr key={`${booking.band}-${booking.date}`}>
                  <td>{booking.band}</td>
                  <td>{booking.venue}</td>
                  <td>{booking.city}</td>
                  <td>{booking.date}</td>
                  <td>
                    <span
                      className={
                        booking.status === "Confirmed" ? "green" : "yellow"
                      }
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>  */}

      <section id="venues" className="section">
        <h2>Venue Contacts</h2>
        <div className="card-grid">
          {venues.map((venue) => (
            <article className="card" key={venue.name}>
              <h3>{venue.name}</h3>
              <p>{venue.city}</p>
              <a href={`mailto:${venue.contact}`}>{venue.contact}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section form-section">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Band name" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Email" />
          <input type="date" />
          <textarea placeholder="Notes"></textarea>
          <button type="button">Submit</button>
        </form>
      </section>
    </main>
  );
}

export default App;