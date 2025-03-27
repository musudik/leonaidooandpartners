import React from "react";
import styled from "styled-components";
import Gold_Image from "../../assets/Gold_Investment.jpg"; // You'll need to add this image
import WhatsAppButton from "../common/WhatsAppButton";

const PageWrapper = styled.div`
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Button = styled.button`
  background: #774800;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #8b5500;
  }
`;

const Gold = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <div className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="mt-16">
              <h1 className="text-6xl font-black mb-4">
                <span className="text-[#774800]">Gold Investments</span>
                <span className="text-[#74767a] ml-2">in Germany</span>
              </h1>
              <h2 className="text-2xl text-gray-600 mb-8">
                Secure Your Wealth with Tax-Free Benefits
              </h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    At Leonaidoo and Partners, we help you build and protect
                    your wealth through smart financial strategies. Investing in
                    gold is one of the safest and most tax-efficient ways to
                    grow your assets in Germany. Whether you're a first-time
                    buyer or an experienced investor, we make the process
                    seamless and rewarding.
                  </p>
                </div>

                {/* Why Invest Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#774800] mb-3">
                    Why Invest in Gold?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Gold is more than just a precious metal—it's a financial
                    shield. Here's why it belongs in your portfolio:
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2">✔</span>
                      <span>
                        <strong>Wealth Preservation</strong> – Gold retains
                        value even in times of economic instability.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2">✔</span>
                      <span>
                        <strong>Crisis-Proof Asset</strong> – A reliable hedge
                        against inflation and market fluctuations.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2">✔</span>
                      <span>
                        <strong>Liquidity & Flexibility</strong> – Easily
                        bought, sold, or passed on to future generations.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Tax Benefits Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#774800] mb-3">
                    Tax Benefits of Gold in Germany
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Germany offers exclusive tax advantages that make gold a
                    superior investment choice:
                  </p>
                  <ul className="list-none space-y-4">
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">✅</span>
                      <div>
                        <span className="font-semibold">
                          0% VAT on Investment Gold
                        </span>{" "}
                        – Buy gold bars and qualifying coins tax-free under EU
                        regulations.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">✅</span>
                      <div>
                        <span className="font-semibold">
                          Tax-Free Profits After One Year
                        </span>{" "}
                        – Hold your gold for at least 12 months, and any gains
                        from selling it are completely exempt from capital gains
                        tax.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">✅</span>
                      <div>
                        <span className="font-semibold">No Wealth Tax</span> –
                        Unlike real estate or other assets, gold holdings are
                        not subject to wealth tax in Germany.
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Button onClick={() => (window.location.href = "/contact")}>
                    Book a Free Consultation
                  </Button>
                </div>
              </div>

              {/* Right Column - Image and Additional Info */}
              <div className="space-y-8">
                <div className="relative">
                  <img
                    src={Gold_Image}
                    alt="Gold Investment"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c17f59] rounded-full z-10"></div>
                </div>

                <div className="space-y-6 mt-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#774800] mb-3">
                      How to Invest in Gold the Right Way
                    </h3>
                    <p className="text-gray-600 mb-4">
                      At Leonaidoo and Partners, we simplify gold investments
                      with expert guidance. Our team helps you:
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>
                          <strong>Choose Investment-Grade Gold</strong> – We
                          ensure your gold meets purity standards for maximum
                          value.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>
                          <strong>Source from Trusted Dealers</strong> – Avoid
                          hidden costs and counterfeit risks by working with our
                          verified partners.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>
                          <strong>Strategize for Long-Term Gains</strong> –
                          Whether for personal wealth or business asset
                          planning, we tailor solutions that maximize your
                          returns.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                    <h3 className="text-xl font-bold text-[#774800] mb-3">
                      Start Your Gold Investment Journey Today
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Gold is not just an asset—it's a legacy. Let us help you
                      make smart, tax-efficient investment decisions that secure
                      your future.
                    </p>
                    <p className="text-gray-600 font-medium">
                      📞 Book a Free Consultation Now – Discover how gold can be
                      the cornerstone of your financial success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
      <WhatsAppButton phoneNumber="4917647757767" />
    </PageWrapper>
  );
};

export default Gold;
