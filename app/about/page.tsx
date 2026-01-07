export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 py-12">
      <h1 className="text-4xl font-bold mb-6">About EvacumTechStore</h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Welcome to EvacumTechStore, your premier destination for quality tech products and electronics in Nigeria.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Our Mission</h2>
          <p>
            We are committed to providing our customers with the latest technology products at competitive prices,
            backed by excellent customer service and fast delivery across Nigeria.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Quality Assurance:</strong> All products are genuine with warranties</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Fast Delivery:</strong> Quick shipping across Nigeria</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Secure Payments:</strong> Multiple safe payment options</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Customer Support:</strong> Dedicated 24/7 support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}