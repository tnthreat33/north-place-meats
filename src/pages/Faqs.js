import "../App.css";

export default function Faqs() {
  return (
    <div className="faq-container">
      <div className="faq-left">
        <h1>Frequently</h1>
        <h1>asked questions</h1>
        <div className="faq-underline"></div>
      </div>

      <div className="faq-right">
        <div className="faq-item">
          <h2>What is your shipping policy?</h2>
          <p>
            You ship items within 7 days of receiving your order. Your order comes frozen with dry ice.
          </p>
        </div>

        <div className="faq-item">
          <h2>How can I track my order?</h2>
          <p>
            Once your order has been shipped, you will receive a confirmation
            email with a tracking number and a link to track your shipment.
          </p>
        </div>

        <div className="faq-item">
          <h2>Do you offer international shipping?</h2>
          <p>
            No, we do not offer international shipping at this time. Check back later or for
            more info, email us at{" "}
            <span className="faq-link">hello@reallygreatsite.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
