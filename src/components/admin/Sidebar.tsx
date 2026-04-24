// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { LucideIcon } from "lucide-react";

// type MenuItem = {
//   name: string;
//   path: string;
//   icon: LucideIcon;
// };

// export default function Sidebar({
//   open,
//   menu,
// }: {
//   open: boolean;
//   menu: MenuItem[];
// }) {
//   const pathname = usePathname();

//   return (
//     <>
//       {/* ===================== DESKTOP SIDEBAR ===================== */}
//       <aside
//         className={`
//           hidden md:flex
//           fixed left-0 top-0 h-screen w-64
//           bg-[#0F2F2A]/90 backdrop-blur-lg text-white
//           border-r border-white/10 flex-col shadow-xl z-50
//           transform transition-transform duration-300
//           ${open ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >
//         {/* LOGO */}
//         <div className="px-5 py-6 border-b border-white/10">
//           <Image
//             src="/logo.png"
//             alt="INSANOVA"
//             width={130}
//             height={50}
//             className="object-contain"
//           />
//         </div>

//         {/* MENU */}
//         <nav className="flex-1 px-3 py-6 space-y-1">
//           {menu.map((item) => {
//             const isActive = pathname === item.path;

//             return (
//               <Link
//                 key={item.name}
//                 href={item.path}
//                 className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition ${
//                   isActive
//                     ? "bg-white/10 text-white"
//                     : "text-white/70 hover:bg-white/10"
//                 }`}
//               >
//                 <item.icon size={18} />
//                 {item.name}
//               </Link>
//             );
//           })}
//         </nav>
//       </aside>

//       {/* ===================== MOBILE BOTTOM NAV ===================== */}
//       <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
//         <div className="bg-[#0F2F2A]/90 backdrop-blur-xl border-t border-white/10 px-2 pt-2 pb-[calc(10px+env(safe-area-inset-bottom))]">
//           <div className="flex items-center justify-around">
//             {menu
//               .filter((item) => item.name.toLowerCase() !== "settings")
//               .map((item) => {
//                 const isActive = pathname === item.path;

//                 return (
//                   <Link
//                     key={item.name}
//                     href={item.path}
//                     className={`
//                       relative flex flex-col items-center justify-center
//                       min-w-[64px] px-2 py-1 rounded-xl
//                       transition-all duration-200
//                       ${isActive ? "text-white" : "text-white/60"}
//                     `}
//                   >
//                     {/* ACTIVE BACKGROUND PILL */}
//                     <div
//                       className={`
//                         absolute inset-0 mx-auto w-12 h-12 rounded-xl
//                         transition-all duration-300
//                         ${isActive ? "bg-white/10" : "bg-transparent"}
//                       `}
//                     />

//                     {/* ICON */}
//                     <div className="relative z-10 mb-1">
//                       <item.icon
//                         size={20}
//                         className={`transition-all duration-200 ${
//                           isActive ? "scale-110" : "scale-100"
//                         }`}
//                       />
//                     </div>

//                     {/* LABEL */}
//                     <span
//                       className={`
//                         relative z-10 text-[10px] tracking-wide
//                         ${isActive ? "text-white font-medium" : "text-white/60"}
//                       `}
//                     >
//                       {item.name}
//                     </span>

//                     {/* ACTIVE DOT */}
//                     {isActive && (
//                       <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-green-400" />
//                     )}
//                   </Link>
//                 );
//               })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// ==========================================================================================
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

type MenuItem = {
  name: string;
  path: string;
  icon: LucideIcon;
};

export default function Sidebar({
  open,
  menu,
}: {
  open: boolean;
  menu: MenuItem[];
}) {
  const pathname = usePathname();

  // 🔥 REMOVE SETTINGS FROM ALL SIDEBAR (desktop + mobile)
  const filteredMenu = menu.filter(
    (item) => item.name.toLowerCase() !== "settings",
  );

  return (
    <>
      {/* ===================== DESKTOP SIDEBAR ===================== */}
      <aside
        className={`
          hidden md:flex
          fixed left-0 top-0 h-screen w-64
          bg-[#0F2F2A]/90 backdrop-blur-lg text-white
          border-r border-white/10 flex-col shadow-xl z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* LOGO */}
        <div className="px-5 py-6 border-b border-white/10">
          <Image
            src="/logo.png"
            alt="INSANOVA"
            width={130}
            height={50}
            className="object-contain"
          />
        </div>

        {/* MENU */}
        <nav className="flex-1 px-3 py-6 space-y-1">
          {filteredMenu.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* ===================== MOBILE BOTTOM NAV ===================== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-[#0F2F2A]/90 backdrop-blur-xl border-t border-white/10 px-2 pt-2 pb-[calc(10px+env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-around">
            {filteredMenu.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`
                    relative flex flex-col items-center justify-center
                    min-w-[64px] px-2 py-1 rounded-xl
                    transition-all duration-200
                    ${isActive ? "text-white" : "text-white/60"}
                  `}
                >
                  <div
                    className={`
                      absolute inset-0 mx-auto w-12 h-12 rounded-xl
                      transition-all duration-300
                      ${isActive ? "bg-white/10" : "bg-transparent"}
                    `}
                  />

                  <div className="relative z-10 mb-1">
                    <item.icon
                      size={20}
                      className={`transition-all duration-200 ${
                        isActive ? "scale-110" : "scale-100"
                      }`}
                    />
                  </div>

                  <span
                    className={`
                      relative z-10 text-[10px] tracking-wide
                      ${isActive ? "text-white font-medium" : "text-white/60"}
                    `}
                  >
                    {item.name}
                  </span>

                  {isActive && (
                    <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-green-400" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
