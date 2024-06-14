import Link from "next/link";

export default function Location() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4858841504943!2d108.20693207508914!3d-6.832196766832638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2f5a9396c023%3A0x397935a669b01d9!2sFITRA%20Hotel%20Majalengka!5e0!3m2!1sen!2sid!4v1718356085098!5m2!1sen!2sid"
        width="600"
        height="450"
        loading="lazy"
        className="w-full h-[250px] md:h-[350px] mb-6"
      ></iframe>
      <Link href={"/about"} className="btn btn-primary">
        About
      </Link>
    </div>
  );
}
