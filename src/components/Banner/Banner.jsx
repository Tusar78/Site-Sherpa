import React from 'react'

export default function Banner() {
  return (
    <div className="bg-primary px-4 py-2 text-center text-small text-white">
  <div className="mx-auto max-w-7xl">
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
  </div>
</div>
  )
}
