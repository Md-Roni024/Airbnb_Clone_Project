import React from 'react';
import './HostProfile.css';
import host from './roni_profile.jpg';


const HostProfile = ({ name, image, email, phone }) => {
    return (
        <>
        <div class="host-profile">
            <h2>Meet your Host</h2>
            <div class="profile-container">
                <div class="left-card">
                    <div class="profile-card">
                      <div>
                          <img src={image} alt="Image Not Found" class="profile-image"/>
                          <h3>{name}</h3>
                          <p class="superhost">✓ {email}</p>
                          <p class="superhost">✓ {phone}</p>
                      </div>
                      <div class="stats">
                          <div>
                            <strong>310</strong>
                            <span>Reviews</span>
                          </div>
                          <hr class="divider-4"/>
                          <div>
                            <strong>4.92★</strong>
                            <span>Rating</span>
                          </div>
                          <hr class="divider-4"/>
                          <div>
                            <strong>7</strong>
                            <span>Years hosting</span>
                          </div>
                        </div>
                    </div>
                <div class="right-card">
                    <span><img src={host} class="amenity-icon-card"/>Born in the 80s</span><br/>
                    <span><img src={host} class="amenity-icon-card"/>My work: Hospitality</span>
                    <p class="bio">Hello world! I love traveling and I also love welcoming guests in my home country, Perú, meeting new...</p>
                    <a href="#" class="show-more">Show more</a>
                </div>
            </div>
              <div class="host-info-card">
                <div class="superhost-info">
                  <h4>Fernando is a Superhost</h4>
                  <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                </div>
                <div class="co-hosts">
                  <h4>Co-hosts</h4>
                  <div class="co-host-avatars">
                    <img src={host}alt="Percy" title="Percy"/>
                    <span class="co-host-name">Percy</span>
                    <div class="avatar-placeholder">R</div>
                    <span class="co-host-name">Raul</span>
                  </div>
                </div>
                <div class="host-details">
                  <h4>Host details</h4>
                  <p>Response rate: 100%</p>
                  <p>Responds within an hour</p>
                </div>
                <button class="message-host">Message Host</button>
              </div>
            </div>
            <hr class="divider-1"/>
    
          </div>
        </>
    );
  };
  
  export default HostProfile;