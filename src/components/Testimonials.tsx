export const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Thompson",
      role: "Property Investor",
      content: "Working with Vickie was the best decision for my investment journey. Her market knowledge and guidance were invaluable.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Real Estate Investor",
      content: "Thanks to Vickie's expertise, I've successfully expanded my property portfolio beyond what I thought possible.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
  ];

  return (
    <section className="py-20 bg-luxury-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center mb-12 text-luxury-dark">
          Client Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-luxury-dark">{testimonial.name}</p>
                  <p className="text-sm text-luxury-dark/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-luxury-dark/80">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};