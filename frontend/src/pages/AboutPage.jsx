import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      {/* Introduction Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-6">
          About Terrarium & Clothing
        </h1>
        <p className="text-lg text-gray-700 text-center mb-4">
          At Terrarium, we blend nature's beauty with stylish fashion, offering
          an exclusive range of terrariums and clothing designed to enrich your
          living space and wardrobe. Whether you're looking to add a touch of
          greenery to your home or refresh your clothing collection, we've got
          you covered.
        </p>
        <p className="text-lg text-gray-700 text-center mb-6">
          Our mission is to provide high-quality products that help you embrace
          nature and express your unique style. We carefully craft each
          terrarium and design every piece of clothing to bring you joy and
          lasting memories.
        </p>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg text-gray-700">
          Founded in [Year], Terrarium & Clothing started as a small passion
          project combining our love for sustainable design and fashion. Over
          the years, we have grown into a trusted brand, offering a curated
          selection of terrariums and fashion items for nature enthusiasts and
          style lovers alike.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          From handpicked plants to carefully designed fabrics, we are committed
          to providing products that are not only aesthetically pleasing but
          also eco-friendly. Our designs reflect our dedication to
          sustainability and craftsmanship, ensuring you get the best of both
          worlds.
        </p>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">1. What is a terrarium?</h3>
            <p className="text-lg text-gray-700">
              A terrarium is a small, enclosed garden usually made of glass that
              houses plants and creates a miniature ecosystem. They’re perfect
              for bringing a touch of nature into your home or office.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              2. How do I care for my terrarium?
            </h3>
            <p className="text-lg text-gray-700">
              Terrariums are low-maintenance but require occasional care. Ensure
              they receive indirect sunlight and water them sparingly. Always
              check the moisture level inside your terrarium and avoid
              overwatering.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              3. What types of clothing do you offer?
            </h3>
            <p className="text-lg text-gray-700">
              We offer a variety of clothing styles, including casual wear,
              tops, dresses, and activewear. Our clothing collection is designed
              with comfort and fashion in mind, using sustainable fabrics
              whenever possible.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              4. How do I choose the right size for clothing?
            </h3>
            <p className="text-lg text-gray-700">
              We provide a detailed size chart on each product page to help you
              find your perfect fit. If you’re unsure about sizing, feel free to
              reach out to our customer service team for assistance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              5. Do you offer international shipping?
            </h3>
            <p className="text-lg text-gray-700">
              Yes, we offer international shipping to most countries. Shipping
              fees and times will vary depending on your location, and these
              details are provided at checkout.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              6. How can I contact customer support?
            </h3>
            <p className="text-lg text-gray-700">
              You can reach our customer support team by emailing us at
              support@terrariumclothing.com or by using the contact form on our
              website. We’re here to assist you with any questions or concerns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
