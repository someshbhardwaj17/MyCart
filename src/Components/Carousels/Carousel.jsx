import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import email from "../Assests/email.png";
function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage2 text="Second slide" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function ExampleCarouselImage() {
     return <Image src="https://nyutam.com/cdn/shop/files/banner_1.jpg?v=1689265502&width=1780" fluid  width="1780" />;
  //https://nyutam.com/cdn/shop/files/banner_3_faec5262-71a3-4764-a6c2-8d1c9aa4d78c.jpg?v=1689323447&width=1780
    // return <Image srcset="//nyutam.com/cdn/shop/files/banner_1_small_size.jpg?v=1689265576&amp;width=375 375w," sizes="100vw" src="//nyutam.com/cdn/shop/files/banner_1_small_size.jpg?v=1689265576&amp;width=750" alt="" width="1000" height="870"/>
  }
  function ExampleCarouselImage2() {
    return <Image src="https://nyutam.com/cdn/shop/files/banner_3_faec5262-71a3-4764-a6c2-8d1c9aa4d78c.jpg?v=1689323447&width=1780" fluid  width="1780" />;
 }
export default IndividualIntervalsExample;