"use client";

import Image from "next/image";
import Link from "next/link";

// Particle background code commented out - was only used in password form
// declare global {
//   interface Window {
//     particlesJS?: (tagId: string, params?: Record<string, unknown>) => void;
//     pJSDom?: Array<{
//       pJS: {
//         fn: {
//           vendors: {
//             destroy?: () => void;
//           };
//         };
//       };
//     }>;
//   }
// }

// const PARTICLE_OPTIONS: Record<string, unknown> = {
//   particles: {
//     number: {
//       value: 120,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//     color: {
//       value: ["#ffffff", "#a5b4fc", "#c7d2fe"],
//     },
//     shape: {
//       type: "circle",
//       stroke: {
//         width: 0,
//       },
//     },
//     opacity: {
//       value: 0.6,
//       random: true,
//       anim: {
//         enable: true,
//         speed: 0.6,
//         opacity_min: 0.2,
//         sync: false,
//       },
//     },
//     size: {
//       value: 2.5,
//       random: true,
//       anim: {
//         enable: true,
//         speed: 2,
//         size_min: 0.8,
//         sync: false,
//       },
//     },
//     line_linked: {
//       enable: false,
//     },
//     move: {
//       enable: true,
//       speed: 0.6,
//       direction: "none",
//       random: true,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: {
//         enable: false,
//         mode: "repulse",
//       },
//       onclick: {
//         enable: false,
//       },
//       resize: true,
//     },
//   },
//   retina_detect: true,
// };

// const ParticleBackground = () => {
//   useEffect(() => {
//     let canceled = false;

//     const initParticles = async () => {
//       await import("particles.js");
//       if (canceled) return;
//       window.particlesJS?.("particles-background", PARTICLE_OPTIONS);
//     };

//     initParticles();

//     return () => {
//       canceled = true;
//       window.pJSDom?.forEach((instance) => {
//         instance?.pJS?.fn?.vendors?.destroy?.();
//       });
//       window.pJSDom = [];
//     };
//   }, []);

//   return (
//     <div
//       id="particles-background"
//       className="pointer-events-none absolute inset-0"
//       aria-hidden="true"
//     />
//   );
// };

// Password protection commented out - open entry now
// const PASSWORD = "NIGHTSINTHESUN";

export default function Home() {
  // Authentication logic commented out - open entry now
  // const [isAuthenticated, setIsAuthenticated] = useState(() => {
  //   if (typeof window !== "undefined") {
  //     return localStorage.getItem("ovmbr_authenticated") === "true";
  //   }
  //   return false;
  // });
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (password === PASSWORD) {
  //     setIsAuthenticated(true);
  //     localStorage.setItem("ovmbr_authenticated", "true");
  //     setError("");
  //   } else {
  //     setError("Incorrect password. Please try again.");
  //     setPassword("");
  //   }
  // };

  // Password form commented out - open entry now
  // if (!isAuthenticated) {
  //   return (
  //     <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 font-sans dark:bg-black">
  //       <ParticleBackground />
  //       <div className="relative z-10 flex flex-col items-center justify-center gap-6 p-8">
  //         <div className="flex flex-col items-center justify-center gap-2">
  //           <h1 className="text-4xl md:text-6xl font-bold text-white">Guest Area</h1>
  //           <p>Please enter the password below.</p>
  //         </div>
  //         <form
  //           onSubmit={handleSubmit}
  //           className="flex flex-col gap-4 w-full max-w-md"
  //         >
  //           <input
  //             type="password"
  //             value={password}
  //             onChange={(e) => {
  //               setPassword(e.target.value);
  //               setError("");
  //             }}
  //             placeholder="Enter password"
  //             className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FFD926] text-white"
  //             autoFocus
  //           />
  //           {error && <p className="text-red-500 text-sm">{error}</p>}
  //           <button
  //             type="submit"
  //             className="cursor-pointer hover:bg-[#FFD926] hover:text-black flex gap-2 w-full px-8 py-4 items-center justify-center font-bold border-[2px] text-lg"
  //           >
  //             Submit
  //             <ArrowRight />
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 font-sans dark:bg-black">
      <div className="relative z-10 flex min-h-screen overflow-hidden w-screen items-center justify-center sm:items-start">
        <Image
          className="absolute top-0 h-screen hidden md:block w-full z-10"
          src="/images/ovmbr/ovmbr-title-2.png"
          alt="Title Card"
          width={1512}
          height={24}
        />
        <Image
          className="absolute top-0 h-screen hidden md:block w-full"
          src="/images/ovmbr/ovmbr.png"
          alt="BG Image"
          width={1400}
          height={24}
        />
        <Image
          className="absolute top-0 h-screen block md:hidden w-full"
          src="/images/ovmbr/ovmbr-bg-mobile.jpg"
          alt="BG Image"
          width={1400}
          height={24}
        />
      </div>
      <Image
        className="absolute bottom-0 left-0 "
        src="/images/leaves-1.png"
        alt="Title Card"
        width={363}
        height={24}
      />
      <Image
        className="absolute bottom-0 right-0 "
        src="/images/leaves-2.png"
        alt="Title Card"
        width={363}
        height={24}
      />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bottom-[50px] flex md:flex-row flex-col gap-4 left-1/2 z-10">
        <Link
          href="https://www.theexhibit.co/events/GXOO-2025-qu4sl167n"
          className="px-7 md:px-10 py-3 cursor-pointer bg-[#FFD926] hover:bg-[#D13833] text-black hover:text-white flex items-center justify-center font-bold text-lg"
        >
          Buy Tickets (N)
        </Link>
        <Link
          href="https://link.dice.fm/bc1b3c86c67d"
          className="px-7 md:px-10 py-3 cursor-pointer bg-[#FFD926] hover:bg-[#D13833] text-black hover:text-white flex items-center justify-center font-bold text-lg"
        >
          Buy Tickets (£/$)
        </Link>
        <Link
          href="https://paystack.shop/ovmbr-cruise"
          className="px-7 md:px-10 py-3 cursor-pointer bg-[#FFD926] hover:bg-[#D13833] text-black hover:text-white flex items-center justify-center font-bold text-lg"
        >
          Table Packages
        </Link>
      </div>
    </div>
  );
}
