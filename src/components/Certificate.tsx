import Image from "next/image";
import ImageSlider from "./ImageSlider";

export default function Certificate() {
  return (
    <>
      <p className="text-sm leading-7 text-secondary">
        Yo, I got mad certs from finishing all these dope courses and stuff. I
        know they`re gonna be hella important down the road, and I`m stoked to
        have `em! 🚀
      </p>

      {/* Certificate image */}

      <div className="">
        <ImageSlider />
      </div>
    </>
  );
}
