"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Star, Crown, Sparkles, Utensils, Briefcase, Award, Waves, Heart, Dumbbell, Car, Building, MessageCircle, Users, Mail } from 'lucide-react';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="small"
      background="aurora"
      cardStyle="glass-flat"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "reviews" }
          ]}
          brandName="Grand Vista"
          button={{
            text: "Book Now",
            href: "https://booking.grandvista.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury at Grand Vista"
          description="Where modern elegance meets exceptional hospitality. Discover unparalleled comfort and service in the heart of the city."
          tag="5-Star Excellence"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.grandvista.com"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411498419-mrvinr4m.jpg"
          imageAlt="Grand Vista Hotel exterior with modern architecture"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="At Grand Vista, we redefine hospitality by creating extraordinary experiences that exceed every expectation. Our commitment to excellence ensures every moment of your stay is memorable."
          features={[
            {
              icon: Crown,
              title: "Concierge Excellence",
              description: "Our dedicated concierge team provides personalized service 24/7, ensuring every need is anticipated and every request fulfilled with the utmost care."
            },
            {
              icon: Sparkles,
              title: "Spa & Wellness",
              description: "Indulge in our world-class spa featuring rejuvenating treatments, state-of-the-art fitness center, and tranquil wellness spaces."
            },
            {
              icon: Utensils,
              title: "Fine Dining",
              description: "Experience culinary excellence at our award-winning restaurants, featuring internationally acclaimed chefs and locally sourced ingredients."
            },
            {
              icon: Briefcase,
              title: "Business Center",
              description: "State-of-the-art business facilities with high-speed connectivity, private meeting rooms, and professional support services for discerning business travelers."
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardFour
          title="World-Class Amenities"
          description="Discover the exceptional facilities and services that make Grand Vista your perfect choice for luxury accommodation."
          tag="Premium Services"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Infinity Pool & Terrace",
              description: "Relax in our stunning rooftop infinity pool overlooking the city skyline, complete with poolside service and comfortable lounging areas.",
              icon: Waves
            },
            {
              title: "Luxury Spa & Salon",
              description: "Pamper yourself with rejuvenating treatments, massages, and beauty services in our serene spa environment designed for ultimate relaxation.",
              icon: Heart
            },
            {
              title: "Fitness & Recreation",
              description: "Stay active in our fully equipped fitness center featuring modern equipment, personal training services, and group fitness classes.",
              icon: Dumbbell
            },
            {
              title: "Valet & Transportation",
              description: "Enjoy seamless arrival and departure with our professional valet parking service and luxury transportation arrangements throughout the city.",
              icon: Car
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxurious Accommodations"
          description="Choose from our carefully designed rooms and suites, each offering sophisticated comfort and stunning views of the city."
          tag="Premium Rooms"
          tagIcon={Building}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          products={[
            {
              id: "deluxe",
              name: "Deluxe City Room",
              price: "From $299/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411502213-c9bh5qli.jpg",
              imageAlt: "Elegant deluxe room with city view"
            },
            {
              id: "suite",
              name: "Executive Suite",
              price: "From $599/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411503053-tkn6hagy.jpg",
              imageAlt: "Spacious executive suite with luxury amenities"
            },
            {
              id: "presidential",
              name: "Presidential Suite",
              price: "From $1,299/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411503601-vjbexwnh.jpg",
              imageAlt: "Luxurious presidential suite with panoramic views"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Read about the exceptional experiences our guests have enjoyed at Grand Vista Hotel."
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO, TechCorp",
              company: "Fortune 500 Company",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411504362-50eohhli.jpg",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Director",
              company: "Global Finance Ltd",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411505079-xhmex9mv.jpg",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Executive",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411505771-e8remi5d.jpg",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Williams",
              role: "Business Consultant",
              company: "Strategic Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411506613-0rtei921.jpg",
              imageAlt: "Portrait of David Williams"
            }
          ]}
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="Trusted by Leading Hospitality Brands"
          description="Join the network of premier hotels and resorts that choose Grand Vista standards for excellence in luxury hospitality."
          tag="Industry Partners"
          tagIcon={Users}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411507392-m52vgszf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411508047-m7jfsfax.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411508620-cz6kk9xp.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411509263-hhknern2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411509789-u6jxc0pi.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411510575-zu9dzl6f.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763411511319-cof31qcc.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Subscribe for Exclusive Offers"
          description="Be the first to know about special packages, seasonal promotions, and exclusive events at Grand Vista Hotel."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="By subscribing, you agree to receive promotional emails from Grand Vista Hotel. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Vista"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Guest Reviews", href: "reviews" },
                { label: "Careers", href: "careers" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "https://booking.grandvista.com" },
                { label: "Gift Cards", href: "giftcards" },
                { label: "Loyalty Program", href: "loyalty" },
                { label: "Special Offers", href: "offers" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}