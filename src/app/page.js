import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        style={{ backgroundColor: "#e8f1f9" }}
        className="flex flex-col lg:flex-row-reverse gap-0 justify-between"
      >
        <div className="w-92 content-center mb-10 mt-10 lg:mb-0">
          <img
            src="/man.png"
          
            className="mb-0 text-center h-96 lg:h-auto justify-center mx-auto"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="mx-4 lg:mx-2 ">
            <span className="text-xl block mb-2">
              Hello, My name is Muaz Khalid
            </span>
            <span className="text-3xl lg:text-4xl font-black block mb-2">
              I'm a Professional Web Designer &
            </span>
            <span className="text-orange-500 text-3xl lg:text-4xl font-black block">
              WordPress Developer
            </span>
            <br></br>
            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span><br></br>
            <button className=" text-white bg-orange-500  font-bold px-12 py-4 my-3 ">Download CV</button>
          </div>
        </div>
      </div>
    </>
  );
}
