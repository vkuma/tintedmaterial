import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Hero from './Hero';
import './styles.scss';
import SITE from 'constants/siteData';
import ServerPanel from '../../serverpanel'

const Blurb = () => (
  <article className="article">

    <div className="container-fluid container-mw-xl py-2">
      <div className="row">

        <div className="col-xl-4">
          <div className="box box-default">
            <div className="box-body">
              <div className="icon-box ibox-plain ibox-center">
                <div className="ibox-icon">
                  <a href={SITE.home}><i className="material-icons">create</i></a>
                </div>
                <h3 className="mb-1">Welcome to pcarya0n.ott.ciena.com</h3>
                <p>This is the bookable server managment tool. Please feel free to lok around.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4">
          <div className="box box-default">
            <div className="box-body">
              <div className="icon-box ibox-plain ibox-center">
                <div className="ibox-icon">
                  <a href={SITE.home}><i className="material-icons">code</i></a>
                </div>
                <h3 className="mb-1">Check the GRBT</h3>
                <p>REMEMBER! This is just a managment tool. Please go to the GRBT to if you actually want to book this server for a period of time</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4">
          <div className="box box-default">
            <div className="box-body">
              <div className="icon-box ibox-plain ibox-center">
                <div className="ibox-icon">
                  <a href={SITE.home}><i className="material-icons">laptop</i></a>
                </div>
                <h3 className="mb-1">The Platform Team Works hard</h3>
                <p>This application was made by an intern. Quality is not ensured and expect bugs because at this point only god knows what I did here.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </article>
);


const Culture = () => (
  <article className="article article-bordered section-culture">
    <div className="container-fluid container-mw-xxl">
      <div className="row">
        <div className="col-xl-2">
          <h2 className="section-title mt-0">OUR CURRENT RUNNING SERVICES</h2>
        </div>
      </div>
      <div className="row">
        <ServerPanel />
      </div>

    </div>
  </article>
);

const About = () => (
  <section className="page-about chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Hero /></div>
      <div key="2"><Blurb /></div>
      <div key="3"><Culture /></div>
    </QueueAnim>
  </section>
);

export default About;
