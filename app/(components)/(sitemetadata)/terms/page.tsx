import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms & Conditions of Icy Indulgence',
}

export default function Terms() {
  return (
    <div className="max-w-2xl mx-auto my-8 p-6 rounded-md shadow-md dark:shadow-white">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

      <p>
        Welcome to Icy Indulgence! By using our website, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before accessing or using our site.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Intellectual Property</h2>
      <p>
        The content on Icy Indulgence, including images, text, and logos, is the property of Icy Indulgence and is protected by copyright laws. You may not use, reproduce, or distribute our content without prior written permission.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">User Responsibilities</h2>
      <p>
        When using Icy Indulgence, you agree not to engage in any conduct that may harm, disable, or impair the proper functioning of the website. You also agree not to use the site for any illegal or unauthorized purpose.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Ordering and Payments</h2>
      <p>
        When placing an order on Icy Indulgence, you agree to provide accurate and current information. Payment processing is handled by secure third-party services, and we do not store your payment information.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Limitation of Liability</h2>
      <p>
        Icy Indulgence is not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of or inability to use the site. By using the site, you agree to indemnify and hold us harmless from any claims or demands.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Changes to Terms</h2>
      <p>
        Icy Indulgence reserves the right to update these terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the site after changes constitutes your acceptance of the revised terms.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Contact Us</h2>
      <p>
        If you have any questions or concerns about our terms of service, please feel free to contact us at <a href="mailto:kitishkumar2003@gmail.com" className="text-blue-700 underline">here</a>.
      </p>
    </div>
  );
}
