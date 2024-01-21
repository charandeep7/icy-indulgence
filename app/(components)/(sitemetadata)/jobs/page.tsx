import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Jobs',
  description: 'Jobs at Icy Indulgence',
}

export default function Jobs() {
  return (
    <div className="max-w-2xl mx-auto my-8 p-6 rounded-md shadow-md dark:shadow-white">
      <h1 className="text-3xl font-bold mb-4">Join Our Team</h1>

      <p>
        At Icy Indulgence, we are always on the lookout for passionate and talented individuals to join our team. If you have a love for ice cream, creativity, and a dedication to exceptional customer service, we'd love to hear from you!
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Current Openings</h2>
      <p>
        We currently have openings for the following positions:
      </p>

      <ul className="list-disc pl-6 mt-2">
        <li>Software Developer</li>
        <li>Ice Cream Artisan</li>
        <li>Customer Service Representative</li>
        <li>Marketing Coordinator</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">How to Apply</h2>
      <p>
        To apply for a position at Icy Indulgence, please follow these steps:
      </p>

      <ol className="list-decimal pl-6 mt-2">
        <li>Review the job descriptions and requirements for the desired position.</li>
        <li>Prepare your resume and a cover letter expressing your interest in the role.</li>
        <li>Send your application to <a href="mailto:kitishkumar2003@gmail.com" className="text-blue-700 underline">jobs@icyindulgence.com</a>.</li>
      </ol>

      <p>
        Our team will carefully review your application, and if your qualifications align with our needs, we'll be in touch for further steps in the hiring process.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Benefits of Joining Icy Indulgence</h2>
      <p>
        Joining Icy Indulgence comes with a range of benefits, including a fun and collaborative work environment, opportunities for career growth, and, of course, delicious ice cream perks!
      </p>

      <p>
        We look forward to welcoming new members to the Icy Indulgence family. Thank you for considering a career with us!
      </p>
    </div>
  );
}
