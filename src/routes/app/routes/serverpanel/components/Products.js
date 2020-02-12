import React from 'react';
import QueueAnim from 'rc-queue-anim';
import DEMO from 'constants/demoData';
import SITE from 'constants/siteData';

const services = SITE.services;

class Products extends React.Component {

  state = {
    isLoading: true,
    error: null,
    packet: []
  }

  fetchPacket() {
    // Where we're fetching data from
    fetch("http://pcarya0n.ott.ciena.com/BookableServerMGT/intranet-back-end/srv_status.php")
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          packet: data,
          isLoading: false,
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }


  componentDidMount() {
    this.fetchPacket();
  }


  render() {
    // console.log(this.state);
    const { isLoading, packet, error } = this.state;
    // console.log(this.packet);
    return (
      <div className="container-fluid no-breadcrumb container-mw-lg chapter">
        <QueueAnim type="bottom" className="ui-animate">
          {
            services.map((services, i) => (
              <div key={i.toString()} className="mb-4">
                <div className="item-card card__horizontal">
                  <div className="card__image">
                    <a href={DEMO.link}>
                      <img alt="product" src={services.img} />
                    </a>
                  </div>
                  <div className="card__body card-white">
                    <div className="card__title">
                      <a href="{product.link}">{services.name}</a>
                      <span>Service</span>
                    </div>
                    
                    <div className="card__price">
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                      
                      <div>
                        {console.log(services.name)}
                        {console.log(packet.TACAS)}
                        {(() => {
                          if (services.name ==='TACAS') {
                            return (
                              (packet.TACAS ==='true') ? 
                                <span className="text-success lead"><i>RUNNING</i></span> : <span className="text-danger lead"><i>STOPPED</i></span>
                            )
                          } else if (services.name ==='RADIUS') {
                            return (
                              (packet.RADIUS ==='true') ? 
                                <span className="text-success lead"><i>RUNNING</i></span> : <span className="text-danger lead"><i>STOPPED</i></span>
                            )
                          } else {
                            return (
                              <div>catch all</div>
                            )
                          }
                        })()}

                      </div>
                    // If there is a delay in data, let's let the user know it's loading
                    ) : (
                      <h3>Loading...</h3>
                    )}
                          {/* <span className="type--strikethrough">$699.99</span>
                          <span>{packet[i.name]}</span> */}
                    </div>




                    <div className="divider divider-solid my-4" />
                    <p className="card__desc">{services.content}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </QueueAnim>
      </div>
    );
  }
}

export default Products;
