export default function HomePage() {
  return (
    <div className="pt-[72px]"> {/* space under fixed header */}
      <section id="home" className="min-h-screen scroll-mt-24 px-4 py-16">
        <h1 className="text-4xl font-semibold mb-4">Home</h1>
        <p>Welcome to my Portfolio webpage</p>
      </section>

      <section id="about" className="min-h-screen scroll-mt-24 px-4 py-16">
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <p>I am an aspiring computer science student at . </p>
      </section>

      <section id="resume" className="min-h-screen scroll-mt-24 px-4 py-16">
        <h2 className="text-3xl font-semibold mb-4">Resume</h2>
        <p>UK
        </p>
      </section>

      <section id="portfolio" className="min-h-screen scroll-mt-24 px-4 py-16">
        <h2 className="text-3xl font-semibold mb-4">Portfolio</h2>
        <p>Projects…</p>
      </section>

      <section id="contact" className="min-h-screen scroll-mt-24 px-4 py-16">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p>Email / links…</p>
      </section>
    </div>
  );
}
