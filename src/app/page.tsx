"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Heart, Star, MessageCircle, Users, Shield, Calendar } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Pawsome Homes"
          button={{
            text: "Contact Us",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Where Every Dog Feels at Home"
          description="Premium boarding, daycare, and grooming services for your beloved companion. Experience the difference of personalized care in a loving environment."
          tag="Premium Dog Care"
          tagIcon={Heart}
          buttons={[
            {
              text: "Book a Visit",
              href: "contact"
            },
            {
              text: "Our Services",
              href: "services"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5481539/pexels-photo-5481539.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Happy golden retriever in a comfortable home environment"
          imagePosition="right"
        />
      </div>
      
      <div id="services" data-section="services">
        <FeatureCardOne
          title="Exceptional Care Services"
          description="From daily boarding to specialized grooming, we provide comprehensive care that keeps your dog happy, healthy, and loved."
          tag="Services"
          tagIcon={Star}
          features={[
            {
              title: "Premium Boarding",
              description: "Spacious, comfortable accommodations with 24/7 supervision and plenty of playtime for your furry friend.",
              imageSrc: "https://images.pexels.com/photos/8120956/pexels-photo-8120956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Dogs playing in spacious boarding facility"
            },
            {
              title: "Fun-Filled Daycare",
              description: "Socialization and exercise programs designed to keep your dog active and engaged throughout the day.",
              imageSrc: "https://images.pexels.com/photos/8422170/pexels-photo-8422170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Group of dogs playing in daycare"
            },
            {
              title: "Professional Grooming",
              description: "Complete grooming services from baths and brushing to nail trims and styling by certified professionals.",
              imageSrc: "https://images.pexels.com/photos/19145897/pexels-photo-19145897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional dog grooming session"
            },
            {
              title: "Training Programs",
              description: "Positive reinforcement training to help your dog develop good behaviors and social skills.",
              imageSrc: "https://images.pexels.com/photos/6111622/pexels-photo-6111622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Dog training session with professional trainer"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Pet Parents Say"
          description="Hear from the families who trust us with their beloved companions every day."
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Dog Owner",
              company: "Golden Retriever Mom",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Pet Parent",
              company: "Beagle Dad",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/15556792/pexels-photo-15556792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Mike Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Working Professional",
              company: "Labrador Owner",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5128272/pexels-photo-5128272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "First-time Owner",
              company: "Husky Parent",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/30880519/pexels-photo-30880519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Caring Team"
          description="Experienced professionals dedicated to providing the best care for your furry family members."
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Jessica Martinez",
              role: "Facility Manager",
              description: "With over 8 years in animal care, Jessica ensures every dog receives personalized attention and the highest quality care.",
              imageSrc: "https://images.pexels.com/photos/7470753/pexels-photo-7470753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Jessica Martinez",
              socialLinks: [
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "2",
              name: "Alex Thompson",
              role: "Lead Trainer",
              description: "Certified professional trainer specializing in positive reinforcement methods and behavioral development programs.",
              imageSrc: "https://images.pexels.com/photos/90764/man-studio-portrait-light-90764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Alex Thompson",
              socialLinks: [
                {
                  icon: "Twitter",
                  url: "https://twitter.com"
                }
              ]
            },
            {
              id: "3",
              name: "Maria Santos",
              role: "Head Groomer",
              description: "Licensed grooming specialist with expertise in all breeds, ensuring your dog looks and feels their absolute best.",
              imageSrc: "https://images.pexels.com/photos/19145897/pexels-photo-19145897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Maria Santos",
              socialLinks: [
                {
                  icon: "Instagram",
                  url: "https://instagram.com"
                }
              ]
            }
          ]}
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Pet Industry Leaders"
          description="We work alongside the most respected names in pet care to bring you the best services and products."
          tag="Partners"
          tagIcon={Shield}
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4744752/pexels-photo-4744752.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/20263979/pexels-photo-20263979.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/27372364/pexels-photo-27372364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1350563/pexels-photo-1350563.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1954693/pexels-photo-1954693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Calendar}
          title="Ready to Give Your Dog the Best Care?"
          description="Schedule a visit to see our facilities and meet our caring team. We'll create a personalized care plan for your furry friend."
          inputPlaceholder="Enter your email"
          buttonText="Book Visit"
          termsText="By signing up, you agree to receive updates about our services and special offers."
          imageSrc="https://images.pexels.com/photos/6812475/pexels-photo-6812475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern dog care facility interior"
          mediaPosition="left"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Dog Boarding",
                  href: "services"
                },
                {
                  label: "Day Care",
                  href: "services"
                },
                {
                  label: "Grooming",
                  href: "services"
                },
                {
                  label: "Training",
                  href: "services"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Team",
                  href: "team"
                },
                {
                  label: "Facilities",
                  href: "facilities"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Book a Visit",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "contact"
                },
                {
                  label: "Hours",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Pawsome Homes"
        />
      </div>
    </ThemeProvider>
  );
}