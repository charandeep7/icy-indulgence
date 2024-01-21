import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Privacy',
  description: 'privacy | Icy Indulgence',
}

export default function Privacy() {
  return (
    <div className="max-w-2xl mx-auto my-8 p-6 rounded-md shadow-md dark:shadow-white">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p>
        Welcome to Icy Indulgence, your go-to destination for delightful ice cream experiences. We are committed to protecting your privacy and ensuring the security of your personal information when you visit or make a purchase from our online shop.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Information We Collect</h2>
      <p>
        When you visit Icy Indulgence, we may collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to our site, and information about how you interact with the site.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Use of Personal Information</h2>
      <p>
        We use the information we collect to improve and optimize our site's performance and to provide you with a personalized and enjoyable experience. Any personal information provided during the purchasing process is used to fulfill your orders, communicate with you, and update you on the latest Icy Indulgence news and promotions.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Security</h2>
      <p>
        Icy Indulgence takes reasonable precautions to protect your personal information and ensure that it is not inappropriately lost, misused, accessed, disclosed, altered, or destroyed.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Third-Party Services</h2>
      <p>
        We may use third-party services, such as payment processors, to collect, process, and store your information. These third-party service providers have their own privacy policies and are responsible for handling your information securely. We recommend that you review their privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Changes to this Privacy Policy</h2>
      <p>
        Icy Indulgence reserves the right to update this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting on the website.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Contact Us</h2>
      <p>
        If you have any questions or concerns about our privacy policy, please feel free to contact us at <a href="mailto:kitishkumar2003@gmail.com" className="text-blue-700 underline">here</a>.
      </p>
    </div>
  );
}
