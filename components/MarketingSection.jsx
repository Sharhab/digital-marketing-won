// components/MarketingSection.jsx
export default function MarketingSection() {
  return (
    <div className="bg-[#0a2e47] p-8 text-white">
      <div className="space-y-8">
        {/* Section 1 */}
        <div>
          <h2 className="text-yellow-500 text-2xl font-bold flex items-center">
            <span className="mr-2">▶</span> DO YOU WANT MORE CUSTOMERS?
          </h2>
          <p className="text-base mt-2">
            With the support of our community, you will know the best strategies
            the most successful digital marketers are using to make a ton of
            money online.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-yellow-500 text-2xl font-bold flex items-center">
            <span className="mr-2">▶</span> DO YOU WANT TO KEEP YOUR CLIENTS
            LONGER?
          </h2>
          <p className="text-base mt-2">
            With our all-in-one marketing and sales platform, you will be able
            to keep your tools in one place (while saving a fortune) and
            streamline your entire delivery process so you can focus on keeping
            your clients happy.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-yellow-500 text-2xl font-bold flex items-center">
            <span className="mr-2">▶</span> DO YOU WANT TO SCALE YOUR BUSINESS?
          </h2>
          <p className="text-base mt-2">
            Globstand will help you grow your business by connecting you with
            the most successful digital marketers on the planet who will be able
            to help you close more deals or allow you to offer more services.
          </p>
        </div>
      </div>
    </div>
  );
}
