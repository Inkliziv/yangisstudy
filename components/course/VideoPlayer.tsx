'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

interface VideoPlayerProps {
  videoUrl: string
  title: string
  onWatched?: () => void
}

export default function VideoPlayer({ videoUrl, title, onWatched }: VideoPlayerProps) {
  const [started, setStarted] = useState(false)

  // Extract embed URL
  const embedUrl = videoUrl.includes('embed')
    ? videoUrl
    : videoUrl.replace('watch?v=', 'embed/')

  const handleStart = () => {
    setStarted(true)
    // Mark as watched after clicking play
    setTimeout(() => onWatched?.(), 3000)
  }

  return (
    <div className="w-full">
      <div className="relative w-full rounded-2xl overflow-hidden bg-black" style={{ aspectRatio: '16/9' }}>
        {!started ? (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
            onClick={handleStart}
            style={{
              background: 'linear-gradient(135deg, #0d1b3e 0%, #0a0e1a 100%)',
            }}
          >
            {/* Thumbnail overlay */}
            <div className="absolute inset-0 bg-grid opacity-30" />

            {/* Play button */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-glow-blue group-hover:scale-110 transition-transform duration-300">
                <Play size={32} className="text-white ml-1" fill="white" />
              </div>
              <div className="text-center px-6">
                <p className="text-text-primary font-semibold text-lg font-display">{title}</p>
                <p className="text-text-muted text-sm mt-1">Video darsni boshlash uchun bosing</p>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            src={`${embedUrl}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <h2 className="text-base font-semibold text-text-primary">{title}</h2>
        {started && (
          <span className="text-xs text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            Tomosha qilinmoqda
          </span>
        )}
      </div>
    </div>
  )
}
