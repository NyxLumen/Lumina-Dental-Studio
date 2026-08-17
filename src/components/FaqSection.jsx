import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { HelpCircle, ShieldCheck } from 'lucide-react';

const FAQS = [
  {
    q: 'How long do E-max porcelain veneers last?',
    a: 'Our E-max porcelain veneers are custom-milled to 0.2mm ultra-thin thickness and bonded directly to your natural enamel. With regular hygiene checkups, they last 15 to 20+ years while resisting food & beverage stains.'
  },
  {
    q: 'Is guided keyhole dental implant surgery painful?',
    a: 'Not at all. We utilize computer-guided 3D surgical templates and single-tooth targeted anesthesia. The keyhole procedure requires no scalpel incisions or stitches, resulting in minimal post-treatment discomfort.'
  },
  {
    q: 'How fast do 3D clear aligners straighten teeth?',
    a: 'Because our aligners are planned using high-resolution 3D optical scanning and AI root movement tracking, average treatment times range from 6 to 12 months — roughly 40% faster than traditional braces.'
  },
  {
    q: 'What sterilization safety standards does Lumina Dental follow?',
    a: 'We adhere strictly to European EN13060 Class-B autoclave sterilization standards. Every instrument undergoes a 7-step ultrasonic decontamination process and is unsealed in front of you during your visit.'
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-[#f6f6fa]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <Card section>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-5 space-y-4">
              <Badge variant="accent">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Patient Inquiries</span>
              </Badge>

              <h2 className="text-3xl sm:text-4xl font-display font-normal text-[#151581] tracking-[-0.03em]">
                Clinical answers for your peace of mind
              </h2>

              <p className="text-sm text-[#a1a1cd] font-body leading-relaxed">
                Transparent information regarding treatment durability, anesthesia comfort, and our European safety protocols.
              </p>

              <div className="pt-4 flex items-center space-x-2 text-xs font-body text-[#00bb76]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>All consultations include a complimentary 3D intraoral evaluation.</span>
              </div>
            </div>

            {/* Right Accordion Column */}
            <div className="lg:col-span-7 bg-[#f6f5f4] rounded-[32px] p-6 sm:p-8 border border-[#d6d6d6]/60">
              <Accordion>
                {FAQS.map((faq, idx) => (
                  <AccordionItem key={idx}>
                    <AccordionTrigger
                      isOpen={openIdx === idx}
                      onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                    >
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent isOpen={openIdx === idx}>
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
}
