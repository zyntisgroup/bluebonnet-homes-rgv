import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Compass,
  ShieldCheck
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const EnquiryForm: React.FC = () => {
  const [lotStatus, setLotStatus] = useState("I already own a lot in the RGV");
  const [city, setCity] = useState("Edinburg");
  const [sqftRange, setSqftRange] = useState("3,200 – 4,500 sq ft");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setErrorMessage("Please provide your name and email address so Michael & Ana can respond.");
      return;
    }
    setErrorMessage("");
    setSubmitted(true);
  };

  return (
    <section
      id="consultation"
      aria-label="Schedule a Private Custom Home Consultation"
      className="relative bg-ivory-warm text-espresso py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 5 Columns: Mission Studio Info & Consultation Promise */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-dark">
              <span className="w-8 h-[1px] bg-brass-dark" />
              <span>10 · Private Consultation &amp; Lot Walk</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-espresso leading-[1.06] tracking-tight">
              Let’s Walk Your Homesite or Review Your Vision Together.
            </h2>

            <p className="text-base text-espresso/80 leading-relaxed">
              Whether you already hold title to a parcel in Mission, McAllen, or Edinburg, or want a
              builder’s eye on a lot before you make an offer, schedule a private, zero-pressure
              consultation with <strong className="text-espresso">Michael &amp; Ana</strong>.
            </p>

            {/* Studio Details Card */}
            <div className="border border-espresso/15 bg-ivory p-6 space-y-4 shadow-sm">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-brass-dark font-semibold border-b border-espresso/10 pb-2.5">
                Bluebonnet Homes RGV · Studio Headquarters
              </div>

              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-brass-dark shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-espresso">
                    {SITE_CONFIG.contact.addressLine1}
                  </div>
                  <div className="text-espresso/75">{SITE_CONFIG.contact.cityStateZip}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-brass-dark shrink-0 mt-1" />
                <div>
                  <a
                    href={SITE_CONFIG.contact.phoneHref}
                    className="font-mono font-semibold text-espresso hover:text-brass-dark transition-colors"
                  >
                    {SITE_CONFIG.contact.phoneDisplay}
                  </a>
                  <span className="block text-xs text-espresso/60 mt-0.5">
                    Direct studio line (configurable in site settings)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-brass-dark shrink-0 mt-1" />
                <div className="text-xs text-espresso/75 leading-relaxed">
                  {SITE_CONFIG.contact.hours}
                </div>
              </div>
            </div>

            {/* Service Corridor Pills */}
            <div className="space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-espresso/65">
                Active Rio Grande Valley Building Corridors
              </div>
              <div className="flex flex-wrap gap-1.5">
                {SITE_CONFIG.contact.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-limestone/70 border border-espresso/12 font-mono text-xs text-espresso/85"
                  >
                    {area}, TX
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Interactive Project & Consultation Brief Form */}
          <div className="lg:col-span-7 border border-espresso/20 bg-ivory p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(48,40,32,0.07)]">
            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-14 h-14 mx-auto bg-brass/20 border border-brass flex items-center justify-center text-espresso">
                  <CheckCircle2 className="w-7 h-7 text-brass-dark" />
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-brass-dark">
                  Consultation Request Logged
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-espresso">
                  Thank You, {fullName}.
                </h3>
                <p className="text-sm sm:text-base text-espresso/80 max-w-lg mx-auto leading-relaxed">
                  We have recorded your project brief for{" "}
                  <strong className="text-espresso">{city}, TX</strong> ({lotStatus} · {sqftRange}).
                  Michael &amp; Ana will review your details and reach out to coordinate your private
                  consultation.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 border border-espresso/25 font-mono text-xs uppercase tracking-[0.16em] hover:bg-limestone transition-colors"
                  >
                    Edit Project Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="flex items-center justify-between border-b border-espresso/12 pb-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-brass-dark block">
                      Step 01 of 01 · Project Brief
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-espresso">
                      Request Your Private Consultation
                    </h3>
                  </div>
                  <Compass className="w-6 h-6 text-brass-dark hidden sm:block" />
                </div>

                {/* 1. Lot Status Selector */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase tracking-[0.16em] text-espresso/80">
                    1. Current Land / Homesite Status
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      "I already own a lot in the RGV",
                      "Evaluating specific lots now",
                      "Need help finding a homesite"
                    ].map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => setLotStatus(status)}
                        className={`p-3 text-left border text-xs font-medium transition-all ${
                          lotStatus === status
                            ? "border-espresso bg-espresso text-ivory"
                            : "border-espresso/20 bg-ivory-light text-espresso/80 hover:border-espresso/50"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Target City & Square Footage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="target-city"
                      className="block font-mono text-xs uppercase tracking-[0.16em] text-espresso/80"
                    >
                      2. Primary RGV City / Area
                    </label>
                    <select
                      id="target-city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-3 border border-espresso/25 bg-ivory-light text-sm text-espresso focus:outline-none focus:border-espresso"
                    >
                      {SITE_CONFIG.contact.serviceAreas.map((c) => (
                        <option key={c} value={c}>
                          {c}, TX
                        </option>
                      ))}
                      <option value="Other RGV Community">Other RGV Community</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="sqft-range"
                      className="block font-mono text-xs uppercase tracking-[0.16em] text-espresso/80"
                    >
                      3. Approximate Living Area
                    </label>
                    <select
                      id="sqft-range"
                      value={sqftRange}
                      onChange={(e) => setSqftRange(e.target.value)}
                      className="w-full px-3.5 py-3 border border-espresso/25 bg-ivory-light text-sm text-espresso focus:outline-none focus:border-espresso"
                    >
                      <option value="2,500 – 3,200 sq ft">2,500 – 3,200 sq ft</option>
                      <option value="3,200 – 4,500 sq ft">3,200 – 4,500 sq ft</option>
                      <option value="4,500 – 6,000+ sq ft">4,500 – 6,000+ sq ft (Estate)</option>
                      <option value="Undecided / Seeking Guidance">
                        Undecided / Seeking Guidance
                      </option>
                    </select>
                  </div>
                </div>

                {/* 3. Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="client-name"
                      className="block font-mono text-xs uppercase tracking-[0.14em] text-espresso/80"
                    >
                      Full Name *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Dr. Elena Garza"
                      className="w-full px-3.5 py-3 border border-espresso/25 bg-ivory-light text-sm text-espresso placeholder:text-taupe focus:outline-none focus:border-espresso"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="client-email"
                      className="block font-mono text-xs uppercase tracking-[0.14em] text-espresso/80"
                    >
                      Email Address *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="elena@example.com"
                      className="w-full px-3.5 py-3 border border-espresso/25 bg-ivory-light text-sm text-espresso placeholder:text-taupe focus:outline-none focus:border-espresso"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="client-phone"
                      className="block font-mono text-xs uppercase tracking-[0.14em] text-espresso/80"
                    >
                      Telephone
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(956) 000-0000"
                      className="w-full px-3.5 py-3 border border-espresso/25 bg-ivory-light text-sm text-espresso placeholder:text-taupe focus:outline-none focus:border-espresso"
                    />
                  </div>
                </div>

                {/* 4. Architectural Notes */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="project-notes"
                    className="block font-mono text-xs uppercase tracking-[0.14em] text-espresso/80"
                  >
                    Architectural Style, Lot Location, or Key Priorities
                  </label>
                  <textarea
                    id="project-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about your lot, preferred architectural style (Contemporary, Modern Mediterranean, Tuscan), or target move-in timeframe..."
                    className="w-full px-3.5 py-3 border border-espresso/25 bg-ivory-light text-sm text-espresso placeholder:text-taupe focus:outline-none focus:border-espresso"
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs font-mono text-red-700 bg-red-50 border border-red-200 px-3 py-2">
                    {errorMessage}
                  </p>
                )}

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-espresso/70">
                    <ShieldCheck className="w-4 h-4 text-brass-dark shrink-0" />
                    <span>Reviewed personally by Michael &amp; Ana · Strict privacy</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-espresso text-ivory font-mono text-xs uppercase tracking-[0.18em] font-semibold hover:bg-brass hover:text-espresso-obsidian transition-colors"
                  >
                    <span>Request Private Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
