import Header from "../components/Header";
import Bannertrail from "../components/Bannertrail";
import Quicklinks from "../components/Quicklinks";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Bannertrail />
      </div>

      <div>
        <Quicklinks />
      </div>
      <div>Suggestions</div>
      <div>Footer</div>
    </div>
  );
}
