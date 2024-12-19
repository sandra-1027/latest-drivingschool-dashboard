import React from 'react'

const SidebarPanel = () => {
  return (
    <>
      
     {/* Sidebar Panel */}
<div className="sidebar-panel">
  <div className="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750">
    {/* Sidebar Panel Header */}
    <div className="flex h-18 w-full items-center justify-between pl-4 pr-1">
      <p className="text-base tracking-wider text-slate-800 dark:text-navy-100">
        Layouts
      </p>
      <button className="sidebar-close btn size-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
    {/* Sidebar Panel Body */}
    <div className="nav-wrapper h-[calc(100%-4.5rem)] overflow-x-hidden pb-6" data-simplebar>
      <ul className="flex flex-1 flex-col px-4 font-inter">
        <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
          <button className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
            <span>Onboarding</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-slate-400 transition-transform ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <ul className="ac-panel">
            <li>
              <a href="pages-onboarding-1.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Onboarding v1</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-onboarding-2.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Onboarding v2</span>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
          <button className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
            <span>User Card</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-slate-400 transition-transform ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <ul className="ac-panel">
            <li>
              <a href="pages-card-user-1.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>User Card 1</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-card-user-2.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>User Card 2</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-card-user-3.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>User Card 3</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-card-user-4.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>User Card 4</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-card-user-5.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>User Card 5</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-card-user-6.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>User Card 6</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-card-user-7.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>User Card 7</span>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
          <button className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
            <span>Blog Card</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-slate-400 transition-transform ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <ul className="ac-panel">
            <li>
              <a href="pages-card-blog-1.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Blog Card 1</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-card-blog-2.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Blog Card 2</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-card-blog-3.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Blog Card 3</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-card-blog-4.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Blog Card 4</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-card-blog-5.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Blog Card 5</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-card-blog-6.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Blog Card 6</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-card-blog-7.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Blog Card 7</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-card-blog-8.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Blog Card 8</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-blog-details.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Blog Details</span>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
          <button className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
            <span>Help</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-slate-400 transition-transform ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <ul className="ac-panel">
            <li>
              <a href="pages-help-1.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Help 1</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-help-2.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Help 2</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-help-3.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Help 3</span>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
          <button className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
            <span>Price List</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-slate-400 transition-transform ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <ul className="ac-panel">
            <li>
              <a href="pages-price-list-1.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Price List 1</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-price-list-2.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Price List 2</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-price-list-3.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Price List 3</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-price-list-4.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Price List 4</span>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
          <button className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
            <span>Invoice</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-slate-400 transition-transform ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <ul className="ac-panel">
            <li>
              <a href="pages-invoice-1.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Invoice 1</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-invoice-2.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Invoice 2</span>
                </div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="my-3 mx-4 h-px bg-slate-200 dark:bg-navy-500" />
      <ul className="flex flex-1 flex-col px-4 font-inter">
        <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
          <button className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
            <span>Sign In</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-slate-400 transition-transform ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <ul className="ac-panel">
            <li>
              <a href="pages-sign-in-1.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Sign In 1</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-sign-in-2.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Sign In 2</span>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
          <button className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
            <span>Sign Up</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-slate-400 transition-transform ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <ul className="ac-panel">
            <li>
              <a href="pages-sign-up-1.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Sign Up 1</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-sign-up-2.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Sign Up 2</span>
                </div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="my-3 mx-4 h-px bg-slate-200 dark:bg-navy-500" />
      <ul className="flex flex-1 flex-col px-4 font-inter">
        <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
          <button className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
            <span>Error</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-slate-400 transition-transform ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <ul className="ac-panel">
            <li>
              <a href="pages-error-404-1.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Error 404 v1</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-error-404-2.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Error 404 v2</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-error-404-3.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Error 404 v3</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-error-404-4.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Error 404 v4</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-error-401.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Error 401</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-error-429.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Error 429</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-error-500.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Error 500</span>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
          <button className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
            <span>Starter</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-slate-400 transition-transform ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <ul className="ac-panel">
            <li>
              <a href="pages-starter-1.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Blurred Header</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-starter-2.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Unblurred Header</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-starter-3.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Centered Links</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-starter-4.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Minimal Sidebar</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-starter-5.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Horizontal Navigation</span>
                </div>
              </a>
            </li>
            <li>
              <a href="pages-starter-6.html" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
                <div className="flex items-center space-x-2">
                  <div className="size-1.5 rounded-full border border-current opacity-40" />
                  <span>Sideblock</span>
                </div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>

    </>
  )
}

export default SidebarPanel
