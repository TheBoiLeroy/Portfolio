export default function ContactPage() {
  return (
    <main className="p-20 max-w-xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <form action="https://formspree.io/f/yourformid" method="POST" className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Your Name" required className="border p-2 rounded" />
        <input type="email" name="email" placeholder="Your Email" required className="border p-2 rounded" />
        <textarea name="message" placeholder="Your Message" rows={5} required className="border p-2 rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </main>
  );
}