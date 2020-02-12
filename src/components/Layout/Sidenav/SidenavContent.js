import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import $ from 'jquery';
import 'jquery-slimscroll/jquery.slimscroll.min';
import DEMO from 'constants/demoData';


class SidebarContent extends React.Component {

  componentDidMount() {
    const { history } = this.props;
    const nav = this.nav;
    const $nav = $(nav);

    // scroll
    $nav.slimscroll({
      height: '100%'
    });


    // Append icon to submenu
    $nav.find('.prepend-icon').prepend('<i class="material-icons">keyboard_arrow_right</i>');


    // AccordionNav
    const slideTime = 250;
    const $lists = $nav.find('ul').parent('li');
    $lists.append('<i class="material-icons icon-has-ul">arrow_drop_down</i>');
    const $As = $lists.children('a');

    // Disable A link that has ul
    $As.on('click', event => event.preventDefault());

    // Accordion nav
    $nav.on('click', (e) => {

      const target = e.target;
      const $parentLi = $(target).closest('li'); // closest, insead of parent, so it still works when click on i icons
      if (!$parentLi.length) return; // return if doesn't click on li
      const $subUl = $parentLi.children('ul');


      // let depth = $subUl.parents().length; // but some li has no sub ul, so...
      const depth = $parentLi.parents().length + 1;

      // filter out all elements (except target) at current depth or greater
      const allAtDepth = $nav.find('ul').filter(function () {
        if ($(this).parents().length >= depth && this !== $subUl.get(0)) {
          return true;
        }
        return false;
      });
      allAtDepth.slideUp(slideTime).closest('li').removeClass('open');

      // Toggle target
      if ($parentLi.has('ul').length) {
        $parentLi.toggleClass('open');
      }
      $subUl.stop().slideToggle(slideTime);

    });


    // HighlightActiveItems
    const $links = $nav.find('a');
    const currentLocation = history.location;
    function highlightActive(pathname) {
      const path = `#${pathname}`;

      $links.each((i, link) => {
        const $link = $(link);
        const $li = $link.parent('li');
        const href = $link.attr('href');
        // console.log(href);

        if ($li.hasClass('active')) {
          $li.removeClass('active');
        }
        if (path.indexOf(href) === 0) {
          $li.addClass('active');
        }
      });
    }
    highlightActive(currentLocation.pathname);
    history.listen((location) => {
      highlightActive(location.pathname);
    });
  }


  render() {

    return (
      <ul className="nav" ref={(c) => { this.nav = c; }}>
        <li className="nav-header"><span>Navigation</span></li>
        {/* <li><Button href="#/app/dashboard"><i className="nav-icon material-icons">dashboard</i><span className="nav-text">Dashboard</span></Button></li> */}
        <li><Button href="#/app/home"><i className="nav-icon material-icons">home</i><span className="nav-text">Home</span></Button></li>

        <li className="nav-divider" />
        
        <li className="nav-header"><span>Services</span></li>
        <li>
          <Button href="#/app/menu"><i className="nav-icon material-icons">sort</i><span className="nav-text">Menu Levels</span></Button>
          <ul>
            <li><Button className="prepend-icon" href={DEMO.link}><span>Level 1</span></Button></li>
            <li>
              <Button className="prepend-icon" href={DEMO.link}><span>Level 1</span></Button>
              <ul>
                <li><Button href={DEMO.link}><span>Level 2</span></Button></li>
                <li>
                  <Button href={DEMO.link}><span>Level 2</span></Button>
                  <ul>
                    <li><Button href={DEMO.link}><span>Level 3</span></Button></li>
                    <li><Button href={DEMO.link}><span>Level 3</span></Button></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        
        {/* <li className="nav-divider" />
        <li className="nav-header"><span>Material Design</span></li>
        <li className="li-small"><Button href="#/app/ui/cards"><i className="nav-icon nav-dot material-icons color-success">fiber_manual_record</i><span className="nav-text">Material Cards</span></Button></li>
        <li className="li-small"><Button href="#/app/ui/icons"><i className="nav-icon nav-dot material-icons color-info">fiber_manual_record</i><span className="nav-text">Material Icons</span></Button></li> */}
      </ul>
    );
  }
}

export default withRouter(SidebarContent);
