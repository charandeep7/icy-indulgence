import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Security',
  description: 'security | Icy Indulgence',
}

export default function Security() {
  return (
    <div className="max-w-2xl mx-auto my-8 p-6 rounded-md shadow-md dark:shadow-white">
      <h1 className="text-3xl font-bold mb-4">Security</h1>

      <p>
        At Icy Indulgence, we take the security of your information seriously. We have implemented measures to ensure a safe and secure environment for our users. Below are some key aspects of our security practices:
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Secure Connection</h2>
      <p>
        All data transmitted between your device and our servers is encrypted using industry-standard SSL/TLS protocols. This encryption helps protect your personal and financial information during the ordering process.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Data Protection</h2>
      <p>
        We employ robust measures to safeguard your data against unauthorized access, disclosure, alteration, and destruction. Access to your personal information is restricted to authorized personnel only.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Payment Security</h2>
      <p>
        When making a purchase on Icy Indulgence, your payment information is handled securely through trusted third-party payment processors. We do not store your payment details on our servers.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Regular Audits and Monitoring</h2>
      <p>
        We conduct regular security audits and monitoring to identify and address potential vulnerabilities. This proactive approach helps us maintain a secure online environment for our users.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">User Account Security</h2>
      <p>
        Protecting your user accounts is a priority. We encourage you to use strong, unique passwords and enable two-factor authentication (2FA) when available to enhance the security of your account.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Reporting Security Concerns</h2>
      <p>
        If you believe you have identified a security vulnerability on our platform, please report it to us immediately by contacting us at <a href="mailto:kitishkumar2003@gmail.com" className="text-blue-700 underline">security@icyindulgence.com</a>.
      </p>

      <p>
        Your security is our priority at Icy Indulgence, and we are committed to maintaining a safe and enjoyable experience for all users.
      </p>
    </div>
  );
}
