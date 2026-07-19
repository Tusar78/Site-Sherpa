import React, { useState } from 'react'

export default function Banner() {
  // Initialize state based on localStorage to prevent showing the banner if it was previously closed
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('isoBannerClosed') !== 'true'
    }
    return true // Default to visible on server-side rendering
  })

  const handleClose = () => {
    setIsVisible(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem('isoBannerClosed', 'true')
    }
  }

  if (!isVisible) return null

  return (
    <div className="sticky top-0 z-100 bg-primary px-4 py-2 text-white">
      <div className="relative mx-auto flex max-w-7xl items-center justify-center">
        <p className="text-center text-sm pr-8">
          ISO audit coming up? Know exactly where you stand before the external
          auditor does{" "}
          <a
            href="#"
            className="inline-flex items-center gap-1 underline underline-offset-2"
          >
            from $499, not $15,000
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="h-4 w-4 flex-shrink-0"
            >
              <path
                d="M10.78 7.33288L7.20405 3.75687L8.14685 2.81406L13.3323 7.99954L8.14685 13.1849L7.20405 12.2421L10.78 8.66621H2.66565V7.33288H10.78Z"
                fill="white"
              />
            </svg>
          </a>
        </p>
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-1 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Close banner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  )
}