import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={10}>
            <Header as="h3" style={{ fontSize: "2em", textAlign: "center" }}>
              All the best fashion influencers in the biz
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Searching for online style inspiration, it’s easy to fall down the black hole of Insta-hell.
              When you finally look up from your phone, you realise you’ve spent two whole days scrolling through feeds – and you’re still in your dressing gown, with no idea what to wear (we’ve all been there). Which sort of defeats the point.

              Well never fear, we’ve done the hard search for you. From our favourite UK influencers to the best missives
              from Milan and the coolest New Yorkers,
              read on for our definitive guide to the best fashion blogs (and more importantly, where to shop their looks).
            </p>
            <br></br>

            <Header as="h3" style={{ fontSize: "2em" }}>
              Trishna Goklani
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <b>Who?</b> Trishna Goklani, social media editor for Paradise Row by day, UK influencer by night..
            </p>
            <p style={{ fontSize: "1.33em" }}>
              <b> Why:</b> Trishna’s style is understated, timeless and just plain cool.
              Follow her if you’re after the best forever pieces,
              from the perfect little black dress to the leather jacket.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <img src={require('./images/fashion.jpg')} />


            <br></br><br></br>
          </Grid.Column>

          < Grid.Column width={10} textAlign="center">
            <Button size="huge" href="https://www.marieclaire.co.uk/fashion/the-best-fashion-blogs-ever-69888">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={10}>
          <br></br>
          <Header as="h3" style={{ fontSize: "2em", textAlign: "center" }}>
            Men's Fashion Blog India
            </Header>
          <p style={{ fontSize: "1.33em" }}>
            <b> Why:</b> Trishna’s style is understated, timeless and just plain cool.
              Follow her if you’re after the best forever pieces,
              from the perfect little black dress to the leather jacket.
            </p>
        </Grid.Column>

        <Grid.Row>
          <Grid.Column width={10} textAlign="center">
            <Button size="huge" href="http://www.theunstitchd.com/">Check Them Out</Button>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>

        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "1.5em" }}>
              "Helena Bordon"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Her ironic fashion-addict asides soon had her readers rolling in the aisles
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "1.5em" }}>
              "Pandora Sykes."
            </Header>
            <p style={{ fontSize: "1.33em" }}>

              <b></b> Style should be fun and fashion is not a lone Endeavour
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }} >
          Hello Blogger
        </Header>
        <p style={{ fontSize: "1.2em" }}>
          This is the age of personality. Whether it be a celebrity, brand or blogger, in order to stand out, above the digital noise,
          there needs to be a singular voice or personality to communicate through those all important social media channels.

          I’ve always said social media is a little bit like skimming stones:
          sometimes those tweets or instagrams just plop and sink without a trace and other times
          they can bounce on and on, much further than you imagined.
        </p>
        <Button as="a" size="large" href="https://www.fashionbeans.com/category/mens-fashion-trends/">
          Read More
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#case-studies">Case Studies</a>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Style & Error

        </Header>
        <p style={{ fontSize: "1.2em" }}>
          Thomas Stubbs, the man behind Style & Error, is a menswear stylist (the guy who makes Dermot look good on The X Factor)
          and fashion writer, whose sense of humour is underpinned with years of industry knowledge.
        </p>
        <Button as="a" size="large" href="https://www.fashionbeans.com/article/mens-sneaker-trends/">
          I'm Interested
        </Button>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default HomepageLayout;
