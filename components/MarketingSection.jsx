// components/MarketingSection.jsx
export default function MarketingSection() {
  return (
    <div className="p-8 mt-4 mb-6">
      <div className="space-y-8">
        {/* Section 1 */}
        <div>
          <h2 className="text-[#d97706] text-2xl font-bold  mb-2 flex items-center">
            <span className="mr-2">▶</span> DO YOU WANT MORE CUSTOMERS?
          </h2>
          <p className="text-base mt-3 mb-3  text-black">
            With the support of our community, you will know the best strategies
            the most successful digital marketers are using to make a ton of
            money online.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-[#d97706] text-2xl mb-2 font-bold flex items-center">
            <span className="mr-3">▶</span> DO YOU WANT TO KEEP YOUR CLIENTS LONGER?
          </h2>
          <p className="text-base mt-3 mb-3 text-black">
            With our all-in-one marketing and sales platform, you will be able
            to keep your tools in one place (while saving a fortune) and
            streamline your entire delivery process so you can focus on keeping
            your clients happy.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-[#d97706] mb-2 text-2xl font-bold flex items-center">
            <span className="mr-2">▶</span> DO YOU WANT TO SCALE YOUR BUSINESS?
          </h2>
          <p className="text-base mt-3 mb-3 text-black">
            Globstand will help you grow your business by connecting you with
            the most successful digital marketers on the planet who will be able
            to help you close more deals or allow you to offer more services.
          </p>
        </div>
      </div>
    </div>
  );
}
