import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About',
  description: 'About Icy Indulgence',
}

export default function About() {
  return (
    <div className="max-w-2xl mx-auto my-8 p-6 rounded-md shadow-md dark:shadow-white">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <p>
        Welcome to Icy Indulgence, where the joy of ice cream meets the art of indulgence. Our journey began with a passion for crafting exceptional frozen delights that bring smiles to faces and create lasting memories.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Our Mission</h2>
      <p>
        At Icy Indulgence, our mission is simple — to provide a delightful and unique ice cream experience. We believe in the power of quality ingredients, creative flavors, and a commitment to customer satisfaction.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Crafting Delicious Moments</h2>
      <p>
        Every scoop at Icy Indulgence is a result of careful craftsmanship and a dedication to delivering unparalleled taste. From classic flavors to innovative creations, our goal is to tantalize your taste buds with each bite.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Community and Sustainability</h2>
      <p>
        We cherish our community and strive to contribute positively to the environment. Icy Indulgence is committed to sustainable practices, from sourcing ingredients responsibly to minimizing our ecological footprint.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Join Us on the Journey</h2>
      <p>
        Whether you're a longtime fan or discovering Icy Indulgence for the first time, we invite you to join us on this flavorful journey. Explore our menu, savor the richness of our ice creams, and become a part of the Icy Indulgence family.
      </p>

      <p>
        Thank you for choosing Icy Indulgence. We look forward to sweetening your moments with our delectable treats!
      </p>
    </div>
  );
}
