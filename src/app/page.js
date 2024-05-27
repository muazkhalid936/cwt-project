import "./globals.css";
export default function Home() {
  return (
    <>
      <div
        style={{ backgroundColor: "#e8f1f9" }}
        className="flex flex-col lg:flex-row-reverse gap-0 w-full justify-between"
      >
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
          <img src="/man.png" className="h-96 img-hero mx-auto" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mx-4 lg:mx-2">
            <span className="text-xl font-roboto block mb-2">
              Hello, My name is Muaz Khalid
            </span>
            <span className="text-3xl lg:text-4xl font-black block mb-2">
              I'm a Professional Web Designer &
            </span>
            <span className="text-orange-500 text-3xl lg:text-4xl font-black block">
              WordPress Developer
            </span>
            <br />
            <span>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </span>
            <br />
            <button className="text-white bg-orange-500 font-bold px-12 py-4 my-3">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
