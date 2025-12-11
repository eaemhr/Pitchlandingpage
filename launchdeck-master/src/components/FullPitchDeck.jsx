import React, { useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  ChartPieIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  StarIcon
} from "@heroicons/react/24/solid";

const slides = [
  {
    title: "Company Overview",
    subtitle: "AI-Powered Analytics Platform",
    description:
      "We are revolutionizing how businesses leverage data analytics through artificial intelligence and machine learning. Our mission is to democratize advanced analytics, making it accessible to companies of all sizes without requiring extensive technical expertise or large data science teams.",
    details: [
      { label: "Founded", value: "2023" },
      { label: "Team Size", value: "25 People" },
      { label: "Location", value: "San Francisco, CA" },
      { label: "Stage", value: "Series A" },
    ],
    icon: ChartBarIcon,
  },
  {
    title: "Market Opportunity",
    subtitle: "$50B+ Market Opportunity",
    description:
      "The global business analytics market is experiencing explosive growth, driven by digital transformation initiatives and increasing demand for data-driven decision making across all industries.",
    marketCards: [
      { label: "Total Addressable Market", value: "$50B", color: "bg-cyan-50" },
      { label: "Serviceable Market", value: "$15B", color: "bg-cyan-50" },
      { label: "Target Market", value: "$3B", color: "bg-cyan-50" },
    ],
    points: [
      { icon: GlobeAltIcon, text: "Digital transformation accelerating across industries" },
      { icon: AcademicCapIcon, text: "Growing adoption of AI & ML in enterprise software" },
      { icon: RocketLaunchIcon, text: "Increasing need for real-time insights & predictive analytics" },
    ],
    icon: GlobeAltIcon,
  },
  {
    title: "Product Demo",
    subtitle: "Platform Overview — Key Features",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    points: [
      { icon: ChartBarIcon, text: "AI-powered predictive analytics with 95% accuracy rate" },
      { icon: UserGroupIcon, text: "Drag-and-drop dashboard builder for custom visualizations" },
      { icon: ChartPieIcon, text: "Real-time data processing & automated reporting" },
      { icon: UserGroupIcon, text: "Natural language queries for non-technical users" },
      { icon: ShieldCheckIcon, text: "Enterprise-grade security & compliance features" },
    ],
    icon: UserGroupIcon,
  },
  {
    title: "Business Model",
    subtitle: "Revenue Streams",
    plans: [
      {
        name: "Starter — $99/mo",
        subtitle: "For small teams and startups",
        features: ["Up to 5 users", "10GB data storage", "Basic analytics", "Email support"],
        highlighted: false,
      },
      {
        name: "Professional — $499/mo",
        subtitle: "For growing businesses",
        features: ["Up to 25 users", "100GB data storage", "Advanced AI features", "Priority support"],
        highlighted: true,
      },
      {
        name: "Enterprise — Custom",
        subtitle: "For large organizations",
        features: ["Unlimited users", "Unlimited storage", "Custom integrations", "Dedicated support"],
        highlighted: false,
      },
    ],
    additional: [
      { icon: CurrencyDollarIcon, title: "Professional Services", description: "Implementation, training, and consulting services" },
      { icon: CurrencyDollarIcon, title: "API Access", description: "Premium API tiers for developers & partners" },
    ],
    icon: CurrencyDollarIcon,
  },
  {
    title: "Competitive Advantage",
    subtitle: "Why We Win",
    advantages: [
      { icon: ChartBarIcon, title: "Superior Technology", description: "Our proprietary AI algorithms deliver 10x faster processing and 95% prediction accuracy, significantly outperforming legacy analytics platforms" },
      { icon: UserGroupIcon, title: "User Experience", description: "Intuitive interface designed for non-technical users, eliminating the learning curve and enabling immediate productivity gains" },
      { icon: ChartPieIcon, title: "Cost Efficiency", description: "70% lower total cost of ownership compared to competitors, with transparent pricing and no hidden fees or expensive add-ons" },
      { icon: ShieldCheckIcon, title: "Enterprise Security", description: "Bank-level encryption, SOC 2 compliance, and GDPR readiness ensure data protection and regulatory compliance" },
      { icon: RocketLaunchIcon, title: "Market Position", description: "We are positioned as the only analytics platform that combines enterprise-grade AI capabilities with consumer-grade simplicity. While competitors focus on either power users or basic analytics, we bridge the gap by serving both technical and non-technical users within the same organization, creating a unique competitive moat." },
    ],
    icon: CheckCircleIcon,
  },
  {
    title: "Go-to-Market Strategy",
    subtitle: "Growth Strategy",
    strategy: [
      { icon: RocketLaunchIcon, title: "Product-Led Growth", description: "Free trial with instant value demonstration, converting 25% of trial users to paid customers through seamless onboarding and quick wins" },
      { icon: UserGroupIcon, title: "Enterprise Sales", description: "Dedicated sales team targeting Fortune 1000 companies with custom solutions, professional services, and white-glove implementation support" },
      { icon: GlobeAltIcon, title: "Strategic Partnerships", description: "Partnerships with major cloud providers, consulting firms, and technology integrators to expand market reach and accelerate adoption" },
      { icon: AcademicCapIcon, title: "Content Marketing", description: "Thought leadership through webinars, whitepapers, and industry reports establishing us as the go-to resource for analytics best practices" },
    ],
    icon: RocketLaunchIcon,
  },
  {
    title: "Financial Projections",
    subtitle: "3-Year Forecast",
    table: [
      { metric: "Revenue", y1: "$3.5M", y2: "$12M", y3: "$35M" },
      { metric: "Customers", y1: "1,200", y2: "3,500", y3: "8,000" },
      { metric: "Gross Margin", y1: "75%", y2: "80%", y3: "82%" },
      { metric: "Team Size", y1: "45", y2: "85", y3: "150" },
    ],
    metrics: [
      { icon: ChartBarIcon, label: "CAC Payback", value: "8 months" },
      { icon: ChartPieIcon, label: "LTV/CAC Ratio", value: "5.2x" },
      { icon: CheckCircleIcon, label: "Net Revenue Retention", value: "130%" },
    ],
    icon: ChartBarIcon,
  },
  {
    title: "Team",
    subtitle: "Leadership Team",
    members: [
      {
        name: "David Martinez",
        role: "CEO & Co-Founder",
        description: "Former VP at Salesforce — 15+ years in enterprise SaaS",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Dr. Lisa Wang",
        role: "CTO & Co-Founder",
        description: "PhD in AI — former Google AI researcher, 20+ patents",
        avatarUrl: "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "James Anderson",
        role: "CFO",
        description: "Former CFO at Zoom — led 3 IPOs, CPA & MBA",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      },
    ],
    advisors: [
      { name: "Jennifer Lee", role: "Former CMO at Adobe" },
      { name: "Robert Chen", role: "Partner at Sequoia Capital" },
      { name: "Dr. Sarah Johnson", role: "AI Ethics Professor at Berkeley" },
      { name: "Michael Brown", role: "Former CRO at HubSpot" },
    ],
    icon: UserGroupIcon,
  },
  {
    title: "Investment Opportunity",
    subtitle: "Series A Funding",
    funding: "$2.5M",
    valuation: "Pre-money valuation: $12M",
    progressBars: [
      { label: "Product Development", percentage: 40, color: "bg-cyan-600" },
      { label: "Sales & Marketing", percentage: 35, color: "bg-cyan-600" },
      { label: "Team Expansion", percentage: 20, color: "bg-cyan-600" },
      { label: "Operations", percentage: 5, color: "bg-cyan-600" },
    ],
    milestones: [
      "Reach $5M ARR within 18 months with 2,000+ customers",
      "Launch enterprise tier with advanced security & compliance",
      "Expand to European and Asian markets with localized solutions",
      "Strategic partnerships with top 3 cloud providers",
      "Achieve profitability by end of Year 2 with positive unit economics",
    ],
    cta: "We're looking for strategic investors who share our vision of democratizing advanced analytics.",
    icon: CurrencyDollarIcon,
  },
];

export default function FullPitchDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  const handleContactClick = () => {
    // Try to find a contact section on the current page
    const contactSection = document.getElementById("contact");
    const contactSection2 = document.getElementById("contact-section");
    const contactSection3 = document.getElementById("contact-us");
    
    // Check different possible IDs
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    } else if (contactSection2) {
      contactSection2.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    } else if (contactSection3) {
      contactSection3.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    } else {
      
      alert("Please navigate to our contact page to schedule a meeting.");
      
    
    }
  };


  return (
   <section id="full-pitch-deck" className="w-full py-16 bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen flex flex-col items-center">
      {/* Tagline */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Full Pitch Deck</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Explore our complete investor presentation with detailed information about our vision, strategy, and growth plans
        </p>
      </div>

      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <div className="text-sm text-gray-600">Slide {activeIndex + 1} of {slides.length}</div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          {/* Title + icon */}
          <div className="flex items-center gap-3 mb-4">
            {slide.icon && <slide.icon className="w-8 h-8 text-cyan-600" />}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{slide.title}</h2>
          </div>

          {slide.subtitle && <h3 className="text-xl text-gray-700 font-semibold mb-3">{slide.subtitle}</h3>}
          {slide.description && <p className="text-gray-700 mb-6 leading-relaxed max-w-4xl">{slide.description}</p>}

          {/* Slide 3: Image and points side by side */}
          {slide.imageUrl && slide.points && (
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              {/* Image Section */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={slide.imageUrl} 
                  alt={slide.title} 
                  className="w-full h-64 object-cover"
                />
              </div>
              
              {/* Points Section */}
              <div className="space-y-4">
                {slide.points.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg border border-cyan-100">
                    {p.icon && <p.icon className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />}
                    <div className="text-gray-700">{p.text}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Slide details */}
          {slide.details && !slide.imageUrl && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {slide.details.map((d, i) => (
                <div key={i} className="p-4 bg-cyan-50 rounded-lg border border-cyan-100 text-center">
                  <div className="text-sm text-cyan-700">{d.label}</div>
                  <div className="text-lg font-bold text-cyan-800">{d.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Market Cards */}
          {slide.marketCards && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {slide.marketCards.map((c, i) => (
                  <div key={i} className={`${c.color} rounded-xl p-6 border border-cyan-100 shadow-sm text-center`}>
                    <div className="text-3xl font-extrabold text-cyan-800">{c.value}</div>
                    <div className="mt-1 font-medium text-cyan-700">{c.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {slide.points.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg border border-cyan-100">
                    {p.icon && <p.icon className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />}
                    <div className="text-gray-700">{p.text}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Pricing Plans */}
          {slide.plans && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {slide.plans.map((p, i) => (
                <div 
                  key={i} 
                  className={`p-6 rounded-xl border ${p.highlighted ? 'border-cyan-500 bg-cyan-50 shadow-md' : 'border-gray-200 bg-cyan-50'} transition-all duration-300`}
                >
                  <div className={`text-xl font-semibold mb-2 ${p.highlighted ? 'text-cyan-800' : 'text-gray-900'}`}>
                    {p.name}
                  </div>
                  <div className="text-sm text-gray-600 mb-3">{p.subtitle}</div>
                  <ul className="space-y-2">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Additional Revenue Streams */}
          {slide.additional && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {slide.additional.map((a, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg border border-cyan-100">
                  {a.icon && <a.icon className="w-6 h-6 text-cyan-600 flex-shrink-0" />}
                  <div>
                    <div className="font-semibold text-gray-900">{a.title}</div>
                    <div className="text-gray-600 text-sm">{a.description}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Competitive Advantages */}
          {slide.advantages && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {slide.advantages.map((a, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg border border-cyan-100">
                  {a.icon && <a.icon className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />}
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{a.title}</div>
                    <div className="text-gray-700 text-sm">{a.description}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Strategy Cards */}
          {slide.strategy && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {slide.strategy.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg border border-cyan-100">
                  {s.icon && <s.icon className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />}
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{s.title}</div>
                    <div className="text-gray-700 text-sm">{s.description}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Financial Table */}
          {slide.table && (
            <div className="mb-6">
              <div className="overflow-x-auto rounded-lg border border-cyan-100">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-cyan-50">
                      <th className="p-4 text-left text-cyan-800 font-semibold border-b border-cyan-100">Metric</th>
                      <th className="p-4 text-left text-cyan-800 font-semibold border-b border-cyan-100">Year 1</th>
                      <th className="p-4 text-left text-cyan-800 font-semibold border-b border-cyan-100">Year 2</th>
                      <th className="p-4 text-left text-cyan-800 font-semibold border-b border-cyan-100">Year 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slide.table.map((r, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-cyan-50"}>
                        <td className="p-4 border-b border-cyan-100 font-medium text-gray-900">{r.metric}</td>
                        <td className="p-4 border-b border-cyan-100 text-gray-700">{r.y1}</td>
                        <td className="p-4 border-b border-cyan-100 text-gray-700">{r.y2}</td>
                        <td className="p-4 border-b border-cyan-100 text-gray-700">{r.y3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {slide.metrics && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  {slide.metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-lg bg-cyan-50 border border-cyan-100 text-center">
                      <m.icon className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                      <div className="text-sm text-cyan-700">{m.label}</div>
                      <div className="text-xl font-bold text-cyan-800">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Team Members */}
          {slide.members && (
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {slide.members.map((mem, i) => (
                  <div key={i} className="text-center p-4 bg-cyan-50 rounded-lg border border-cyan-100">
                    <img 
                      src={mem.avatarUrl} 
                      alt={mem.name} 
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-white shadow-md"
                    />
                    <div className="font-semibold text-gray-900">{mem.name}</div>
                    <div className="text-cyan-700 font-medium mb-2">{mem.role}</div>
                    <div className="text-gray-600 text-sm">{mem.description}</div>
                  </div>
                ))}
              </div>

              {slide.advisors && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Advisory Board</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {slide.advisors.map((a, i) => (
                      <div key={i} className="p-3 border border-cyan-100 rounded-lg bg-cyan-50">
                        <div className="font-medium text-gray-900">{a.name}</div>
                        <div className="text-gray-600 text-sm">{a.role}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Investment Slide - Progress bars and milestones side by side */}
          {slide.progressBars && slide.milestones && (
            <div className="mb-6">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-cyan-800">{slide.funding}</div>
                <div className="text-lg font-semibold text-cyan-700">{slide.subtitle}</div>
                <div className="text-sm text-gray-600 mt-1">{slide.valuation}</div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                {/* Progress Bars */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Use of Funds</h4>
                  {slide.progressBars.map((p, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between">
                        <div className="text-gray-700">{p.label}</div>
                        <div className="text-gray-900 font-medium">{p.percentage}%</div>
                      </div>
                      <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`${p.color} h-6 rounded-full transition-all duration-500`} 
                          style={{ width: `${p.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Milestones */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Milestones</h4>
                  <div className="space-y-3">
                    {slide.milestones.map((m, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-cyan-50 rounded-lg border border-cyan-100">
                        <StarIcon className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                        <div className="text-gray-700">{m}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {slide.cta && (
                <div className="rounded-lg border border-cyan-100 bg-cyan-50 p-6 text-center mt-4">
                  <div className="text-gray-700 mb-4">{slide.cta}</div>
                  <button 
                    onClick={handleContactClick}
                    className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition"
                  >
                    Schedule Investor Meeting
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
          <button
            onClick={() => setActiveIndex((s) => Math.max(s - 1, 0))}
            disabled={activeIndex === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-50 text-cyan-700 border border-cyan-100 hover:bg-cyan-100 transition disabled:opacity-50"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Previous
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full ${i === activeIndex ? "bg-cyan-600" : "bg-gray-300"}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveIndex((s) => Math.min(s + 1, slides.length - 1))}
            disabled={activeIndex === slides.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition disabled:opacity-50"
          >
            Next
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}