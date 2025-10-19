"use client";
export default function Footer() {
  return (
    <footer className="bg-sky-50 py-8 mt-20">
      <div className="max-w-7xl mx-auto text-center text-gray-700 px-6 md:px-12">
        <p className="mb-2">© {new Date().getFullYear()} Nirvant. All rights reserved.</p>
        <p>
          Follow us on{" "}
          <a href="#" className="text-sky-600 hover:underline">
            Instagram
          </a>
          ,{" "}
          <a href="#" className="text-sky-600 hover:underline">
            YouTube
          </a>
          ,{" "}
          <a href="#" className="text-sky-600 hover:underline">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

