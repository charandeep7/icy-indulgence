import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Icy Indulgence',
}

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto my-8 p-6 rounded-md shadow-md dark:shadow-white">
      <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>

      <p>
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out using the contact information below:
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Contact Information</h2>
      <p>
        <strong>Email:</strong> <a href="mailto:kitishkumar2003@gmail.com" className="text-blue-700 underline">kitishkumar2003@gmail.com</a>
      </p>

      <p>
        <strong>Phone:</strong> +91 8873286865
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Visit Us</h2>
      <p>
        Icy Indulgence Ice Cream Shop <br />
        887 Scoop Street, Ice Cream World
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Business Hours</h2>
      <p>
        Monday to Friday: 12:00 PM - 9:00 PM <br />
        Saturday and Sunday: 11:00 AM - 10:00 PM
      </p>

      <p>
        Feel free to drop by during our business hours, or contact us via email or phone for any inquiries. We're here to make your ice cream experience delightful!
      </p>
    </div>
  );
}
