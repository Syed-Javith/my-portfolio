export default function IntroPara() {
  return (
    <div className="my-4">
      <p className="text-xl leading-relaxed">
        I am{" "}
        <span className="text-xl font-extrabold text-violet-500">
          Syed Javith R
        </span>
        , Software Engineer at{" "}
        <span className="font-bold text-violet-600">Zoho Corporation</span>.
        I specialize in engineering high-throughput backend services, distributed
        systems, and AI-assisted engineering tools using Java, Spring Boot, SQL,
        and cloud-native technologies.
      </p>
      <p className="text-xl leading-relaxed mt-2">
        Explore my journey below—including production engineering at Zoho,
        scalable microservice architectures, technical skill sets, and featured projects.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="https://docs.google.com/document/d/1pn74xW_SWBOkZHUfbo4gGWzBJ5wiozoFUzfiZpgP4tI/edit?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition">
            View Resume (Google Docs)
          </button>
        </a>
        <a
          href="https://docs.google.com/document/d/1pn74xW_SWBOkZHUfbo4gGWzBJ5wiozoFUzfiZpgP4tI/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white border-2 border-violet-500 text-violet-600 hover:bg-violet-50 font-semibold py-2 px-4 rounded-lg shadow transition">
            Download PDF
          </button>
        </a>
      </div>
    </div>
  );
}
