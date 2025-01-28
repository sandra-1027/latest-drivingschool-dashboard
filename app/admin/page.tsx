// 'use client'
// import React from "react";
// import { useAuth } from "../context/AuthContext";

// const page = () => {
//   // const {state, setAuthData } = useAuth(); 
//   // const user = state?.user;
//   return (
//     <div>
//       <h1 style={{ fontSize: "24px", marginTop: "20px" }}> Dashboard</h1>
// {/* {user.username} */}
//     </div>
//   );
// };

// export default page;







// 'use client'

// import { getSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export default function AdminPage() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const checkSession = async () => {
//       const session = await getSession();
//       if (!session || session.user.role !== 'admin') {
//         router.push('/login'); // Redirect to login if not admin
//       } else {
//         setIsAuthenticated(true);
//       }
//     };
//     checkSession();
//   }, [router]);

//   if (!isAuthenticated) {
//     return <div>Loading...</div>;
//   }

//   return <h1>Welcome to the Admin Dashboard</h1>;
// }


// 'use client'
// import withAuth from "@/hoc/withAuth";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";



// const AdminPage = () => {
 
  
//   return <div style={{ fontSize: "24px", marginTop: "20px" }}>Welcome to the Admin Dashboard</div>;
// };

// // Wrap the AdminPage component with withAuth, specifying "admin" role
// export default withAuth(AdminPage, ['admin']);














import withAuth from '@/hoc/withAuth';
import React from 'react'

const AdminPage = () => {
  return (
    <main className="main-content w-full px-[var(--margin-x)] pb-8">
  <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
      <div className="card flex-row justify-between p-4">
        <div>
          <p className="text-xs+ uppercase">New Followers</p>
          <div className="mt-8 flex items-baseline space-x-1">
            <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
              1.3k
            </p>
            <p className="text-xs text-success">+21%</p>
          </div>
        </div>
        <div className="mask is-squircle flex size-10 items-center justify-center bg-warning/10">
          <i className="fa-solid fa-user text-xl text-warning" />
        </div>
        <div className="absolute bottom-0 right-0 overflow-hidden rounded-lg">
          <i className="fa-solid fa-user translate-x-1/4 translate-y-1/4 text-5xl opacity-15" />
        </div>
      </div>
      <div className="card flex-row justify-between p-4">
        <div>
          <p className="text-xs+ uppercase">Views</p>
          <div className="mt-8 flex items-baseline space-x-1">
            <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
              30.6m
            </p>
            <p className="text-xs text-success">+4%</p>
          </div>
        </div>
        <div className="mask is-squircle flex size-10 items-center justify-center bg-info/10">
          <i className="fa-solid fa-eye text-xl text-info" />
        </div>
        <div className="absolute bottom-0 right-0 overflow-hidden rounded-lg">
          <i className="fa-solid fa-eye translate-x-1/4 translate-y-1/4 text-5xl opacity-15" />
        </div>
      </div>
      <div className="card flex-row justify-between p-4">
        <div>
          <p className="text-xs+ uppercase">Likes</p>
          <div className="mt-8 flex items-baseline space-x-1">
            <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
              4.3m
            </p>
            <p className="text-xs text-success">+8%</p>
          </div>
        </div>
        <div className="mask is-squircle flex size-10 items-center justify-center bg-success/10">
          <i className="fa-solid fa-thumbs-up text-xl text-success" />
        </div>
        <div className="absolute bottom-0 right-0 overflow-hidden rounded-lg">
          <i className="fa-solid fa-thumbs-up translate-x-1/4 translate-y-1/4 text-5xl opacity-15" />
        </div>
      </div>
      <div className="card flex-row justify-between p-4">
        <div>
          <p className="text-xs+ uppercase">Reports</p>
          <div className="mt-8 flex items-baseline space-x-1">
            <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
              11.6k
            </p>
            <p className="text-xs text-error">-2.3%</p>
          </div>
        </div>
        <div className="mask is-squircle flex size-10 items-center justify-center bg-error/10">
          <i className="fa-solid fa-bug text-xl text-error" />
        </div>
        <div className="absolute bottom-0 right-0 overflow-hidden rounded-lg">
          <i className="fa-solid fa-bug translate-x-1/4 translate-y-1/4 text-5xl opacity-15" />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
      <div>
        <div className="flex h-8 items-center justify-between">
          <h2 className="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
            Activity
          </h2>
          <select className="form-select h-8 rounded-full border border-slate-300 bg-slate-50 px-2.5 pr-9 text-xs+ hover:border-slate-400 focus:border-primary dark:border-navy-600 dark:bg-navy-900 dark:hover:border-navy-400 dark:focus:border-accent">
            <option>05 - 12 May</option>
            <option>12 - 19 May</option>
            <option>19 - 26 May</option>
            <option>26 - 02 June</option>
            <option>02 - 09 June</option>
          </select>
        </div>
        <div>
          <div x-init="$nextTick(() => { $el._x_chart = new ApexCharts($el,pages.charts.influencerActivity); $el._x_chart.render() });" />
        </div>
      </div>
      <div>
        <div className="flex h-8 items-center justify-between">
          <h2 className="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
            Top Perfrormers
          </h2>
          <a href="#" className="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">
            View All
          </a>
        </div>
        <table className="w-full">
          <tbody>
            <tr>
              <td className="whitespace-nowrap pt-4">
                <div className="flex items-center space-x-3">
                  <div className="avatar size-9">
                    <img className="rounded-full" src="images/avatar/avatar-3.jpg" alt="avatar" />
                  </div>
                  <h3 className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                    Konnor Guzman
                  </h3>
                </div>
              </td>
              <td className="whitespace-nowrap px-2 pt-4">
                <a href="#" className="font-inter tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light">@konnor721
                </a>
              </td>
              <td className="whitespace-nowrap pt-4">
                <p className="text-right font-medium text-slate-700 dark:text-navy-100">
                  25%
                </p>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap pt-4">
                <div className="flex items-center space-x-3">
                  <div className="avatar size-9">
                    <img className="rounded-full" src="images/avatar/avatar-20.jpg" alt="avatar" />
                  </div>
                  <h3 className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                    Alfredo Elliott
                  </h3>
                </div>
              </td>
              <td className="whitespace-nowrap px-2 pt-4">
                <a href="#" className="font-inter tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light">@Alfredoe
                </a>
              </td>
              <td className="whitespace-nowrap pt-4">
                <p className="text-right font-medium text-slate-700 dark:text-navy-100">
                  36%
                </p>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap pt-4">
                <div className="flex items-center space-x-3">
                  <div className="avatar size-9">
                    <img className="rounded-full" src="images/avatar/avatar-19.jpg" alt="avatar" />
                  </div>
                  <h3 className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                    Henry Curtis
                  </h3>
                </div>
              </td>
              <td className="whitespace-nowrap px-2 pt-4">
                <a href="#" className="font-inter tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light">@Henry2001
                </a>
              </td>
              <td className="whitespace-nowrap pt-4">
                <p className="text-right font-medium text-slate-700 dark:text-navy-100">
                  65%
                </p>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap pt-4">
                <div className="flex items-center space-x-3">
                  <div className="avatar size-9">
                    <img className="rounded-full" src="images/avatar/avatar-11.jpg" alt="avatar" />
                  </div>
                  <h3 className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                    Katrina West
                  </h3>
                </div>
              </td>
              <td className="whitespace-nowrap px-2 pt-4">
                <a href="#" className="font-inter tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light">@Katrinlady
                </a>
              </td>
              <td className="whitespace-nowrap pt-4">
                <p className="text-right font-medium text-slate-700 dark:text-navy-100">
                  69%
                </p>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap pt-4">
                <div className="flex items-center space-x-3">
                  <div className="avatar size-9">
                    <img className="rounded-full" src="images/avatar/avatar-5.jpg" alt="avatar" />
                  </div>
                  <h3 className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                    Lance Tucker
                  </h3>
                </div>
              </td>
              <td className="whitespace-nowrap px-2 pt-4">
                <a href="#" className="font-inter tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light">@Lanc11
                </a>
              </td>
              <td className="whitespace-nowrap pt-4">
                <p className="text-right font-medium text-slate-700 dark:text-navy-100">
                  86%
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="flex flex-col rounded-xl bg-info/10 py-5 dark:bg-navy-800 lg:flex-row">
      <div className="flex flex-col px-4 sm:px-5 lg:w-48 lg:shrink-0 lg:py-3">
        <h3 className="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-lg">
          Channels
        </h3>
        <p className="mt-3 grow">
          Channels analytics calculated based on your activity
        </p>
        <div className="mt-3 flex items-center space-x-2">
          <div className="flex size-7 items-center justify-center rounded-full bg-success/15 text-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
          </div>
          <p className="text-base font-medium text-slate-700 dark:text-navy-100">
            3.3%
          </p>
        </div>
      </div>
      <div className="scrollbar-sm mt-5 flex space-x-4 overflow-x-auto px-4 sm:px-5 lg:mt-0 lg:pl-0">
        <div className="flex w-36 shrink-0 flex-col items-center">
          <img className="z-10 size-10" src="images/logos/instagram-round.svg" alt="flag" />
          <div className="card -mt-5 w-full rounded-2xl px-3 py-5 text-center">
            <p className="mt-3 text-base font-medium text-slate-700 dark:text-navy-100">
              Instagram
            </p>
            <a href="#" className="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light">@theapp721
            </a>
            <div className="mt-6 flex justify-center space-x-1 font-inter">
              <p className="text-4xl font-medium text-slate-700 dark:text-navy-100">
                +2
              </p>
              <p className="mt-1 font-medium text-slate-700 dark:text-navy-100">
                %
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-36 shrink-0 flex-col items-center">
          <img className="z-10 size-10" src="images/logos/facebook-round.svg" alt="flag" />
          <div className="card -mt-5 w-full rounded-2xl px-3 py-5 text-center">
            <p className="mt-3 text-base font-medium text-slate-700 dark:text-navy-100">
              Facebook
            </p>
            <a href="#" className="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light">@theapp721
            </a>
            <div className="mt-6 flex justify-center space-x-1 font-inter">
              <p className="text-4xl font-medium text-slate-700 dark:text-navy-100">
                +3
              </p>
              <p className="mt-1 font-medium text-slate-700 dark:text-navy-100">
                %
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-36 shrink-0 flex-col items-center">
          <img className="z-10 size-10" src="images/logos/tik_tok-round.svg" alt="flag" />
          <div className="card -mt-5 w-full rounded-2xl px-3 py-5 text-center">
            <p className="mt-3 text-base font-medium text-slate-700 dark:text-navy-100">
              Tik Tok
            </p>
            <a href="#" className="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light">@theapptik
            </a>
            <div className="mt-6 flex justify-center space-x-1 font-inter">
              <p className="text-4xl font-medium text-slate-700 dark:text-navy-100">
                +1
              </p>
              <p className="mt-1 font-medium text-slate-700 dark:text-navy-100">
                %
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-36 shrink-0 flex-col items-center">
          <img className="z-10 size-10" src="images/logos/twitter-round.svg" alt="flag" />
          <div className="card -mt-5 w-full rounded-2xl px-3 py-5 text-center">
            <p className="mt-3 text-base font-medium text-slate-700 dark:text-navy-100">
              Twitter
            </p>
            <a href="#" className="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light">@theapporg
            </a>
            <div className="mt-6 flex justify-center space-x-1 font-inter">
              <p className="text-4xl font-medium text-slate-700 dark:text-navy-100">
                +1
              </p>
              <p className="mt-1 font-medium text-slate-700 dark:text-navy-100">
                %
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-36 shrink-0 flex-col items-center">
          <img className="z-10 size-10" src="images/logos/pinterest-round.svg" alt="flag" />
          <div className="card -mt-5 w-full rounded-2xl px-3 py-5 text-center">
            <p className="mt-3 text-base font-medium text-slate-700 dark:text-navy-100">
              Pinterest
            </p>
            <a href="#" className="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light">@theapporg
            </a>
            <div className="mt-6 flex justify-center space-x-1 font-inter">
              <p className="text-4xl font-medium text-slate-700 dark:text-navy-100">
                +2
              </p>
              <p className="mt-1 font-medium text-slate-700 dark:text-navy-100">
                %
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-36 shrink-0 flex-col items-center">
          <img className="z-10 size-10" src="images/logos/discord-round.svg" alt="flag" />
          <div className="card -mt-5 w-full rounded-2xl px-3 py-5 text-center">
            <p className="mt-3 text-base font-medium text-slate-700 dark:text-navy-100">
              Discord
            </p>
            <a href="#" className="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light">@theapp2
            </a>
            <div className="mt-6 flex justify-center space-x-1 font-inter">
              <p className="text-4xl font-medium text-slate-700 dark:text-navy-100">
                +1
              </p>
              <p className="mt-1 font-medium text-slate-700 dark:text-navy-100">
                %
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-36 shrink-0 flex-col items-center">
          <img className="z-10 size-10" src="images/logos/youtube-round.svg" alt="flag" />
          <div className="card -mt-5 w-full rounded-2xl px-3 py-5 text-center">
            <p className="mt-3 text-base font-medium text-slate-700 dark:text-navy-100">
              Youtube
            </p>
            <a href="#" className="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light">@theapp
            </a>
            <div className="mt-6 flex justify-center space-x-1 font-inter">
              <p className="text-4xl font-medium text-slate-700 dark:text-navy-100">
                +2
              </p>
              <p className="mt-1 font-medium text-slate-700 dark:text-navy-100">
                %
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-36 shrink-0 flex-col items-center">
          <img className="z-10 size-10" src="images/logos/tumblr-round.svg" alt="flag" />
          <div className="card -mt-5 w-full rounded-2xl px-3 py-5 text-center">
            <p className="mt-3 text-base font-medium text-slate-700 dark:text-navy-100">
              Tumblr
            </p>
            <a href="#" className="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light">@theapp
            </a>
            <div className="mt-6 flex justify-center space-x-1 font-inter">
              <p className="text-4xl font-medium text-slate-700 dark:text-navy-100">
                +1
              </p>
              <p className="mt-1 font-medium text-slate-700 dark:text-navy-100">
                %
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
  )
}

// export default page
export default withAuth(AdminPage, ['admin']);