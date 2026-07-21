"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  program: {
    title: string;
    subtitle: string;
    price: string;
  } | null;
};

const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // Your WhatsApp Number

export default function JoinModal({
  open,
  onClose,
  program,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const submit = async () => {
    if (!program) return;

    if (!form.name || !form.phone) {
      alert("Please fill Name and Phone Number.");
      return;
    }

    // Save into Google Sheet (We'll build this next)
    await fetch("/api/enquiry", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        program: program.title,
        package: program.subtitle,
        price: program.price,
      }),
    });

    const text = `Hi CALYBER 👋

I want to join the *${program.title} ${program.subtitle}*

Program Price: ${program.price}

-------------------------

Name : ${form.name}

Phone : ${form.phone}

Email : ${form.email}

Message : ${form.message || "N/A"}

Please share the next steps.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
    );

    onClose();

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: .92,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: .95,
            }}
            transition={{
              duration: .35,
            }}
            className="fixed left-1/2 top-1/2 z-[1000] w-[95%] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-primary/20 bg-[#0E0E0E]"
          >
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  Join Program
                </p>

                <h2 className="mt-2 font-display text-3xl font-black">
                  {program?.title}
                </h2>
              </div>

              <button onClick={onClose}>
                <X />
              </button>
            </div>

            <div className="space-y-5 p-6">

              <input
                placeholder="Full Name"
                className="w-full rounded-xl border border-white/10 bg-[#151515] px-5 py-4 outline-none focus:border-primary"
                value={form.name}
                onChange={(e)=>
                  setForm({
                    ...form,
                    name:e.target.value
                  })
                }
              />

              <input
                placeholder="Phone Number"
                className="w-full rounded-xl border border-white/10 bg-[#151515] px-5 py-4 outline-none focus:border-primary"
                value={form.phone}
                onChange={(e)=>
                  setForm({
                    ...form,
                    phone:e.target.value
                  })
                }
              />

              <input
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-[#151515] px-5 py-4 outline-none focus:border-primary"
                value={form.email}
                onChange={(e)=>
                  setForm({
                    ...form,
                    email:e.target.value
                  })
                }
              />

              <textarea
                rows={4}
                placeholder="Message (Optional)"
                className="w-full rounded-xl border border-white/10 bg-[#151515] px-5 py-4 outline-none focus:border-primary"
                value={form.message}
                onChange={(e)=>
                  setForm({
                    ...form,
                    message:e.target.value
                  })
                }
              />

              <button
                onClick={submit}
                className="w-full rounded-xl bg-primary py-4 font-bold uppercase tracking-wider text-black transition hover:scale-[1.02]"
              >
                Join Now →
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}