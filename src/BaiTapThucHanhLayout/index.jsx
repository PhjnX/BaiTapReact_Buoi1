import Carousel from "./carousel";
import Footer from "./footer";
import Header from "./header";
import Listcard from "./list-card";

export default function BaiTapLayoutComponent() {
  return (
    <div>
      <Header />
      <Carousel />
      <Listcard />
      <Footer />
    </div>
  );
}
