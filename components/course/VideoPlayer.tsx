'use client'

import { useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'

interface VideoPlayerProps {
  videoUrl: string
  title: string
  onWatched?: () => void
}

// Returns { embedSrc, watchUrl }
function parseVideoUrl(url: string): { embedSrc: string; watchUrl: string } {
  if (!url) return { embedSrc: '', watchUrl: '' }

  // Google Drive
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/?]+)/)
  if (driveMatch) {
    return {
      embedSrc: `https://drive.google.com/file/d/${driveMatch[1]}/preview`,
      watchUrl: `https://drive.google.com/file/d/${driveMatch[1]}/view`,
    }
  }

  // YouTube — extract video ID from any format
  let videoId = ''
  if (url.includes('youtube.com/embed/')) {
    videoId = url.replace(/.*youtube\.com\/embed\//, '').split(/[?&]/)[0]
  } else {
    const ytMatch =
      url.match(/[?&]v=([a-zA-Z0-9_-]{11})/) ||
      url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/) ||
      url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/)
    if (ytMatch) videoId = ytMatch[1]
  }

  if (videoId) {
    return {
      // youtube-nocookie.com: same content, fewer tracking restrictions, passes more filters
      embedSrc: `https://www.youtube-nocookie.com/embed/${videoId}`,
      watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
    }
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) {
    return {
      embedSrc: `https://player.vimeo.com/video/${vimeoMatch[1]}`,
      watchUrl: url,
    }
  }

  // Direct file
  return { embedSrc: url, watchUrl: url }
}

export default function VideoPlayer({ videoUrl, title, onWatched }: VideoPlayerProps) {
  const [started, setStarted] = useState(false)

  const { embedSrc, watchUrl } = parseVideoUrl(videoUrl)

  const handleStart = () => {
    setStarted(true)
    setTimeout(() => onWatched?.(), 5000)
  }

  return (
    <div className="w-full">
      {/* Player */}
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-black"
        style={{ aspectRatio: '16/9' }}
      >
        {!started ? (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
            onClick={handleStart}
            style={{ background: 'linear-gradient(135deg, #0d1b3e 0%, #0a0e1a 100%)' }}
          >
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-glow-blue group-hover:scale-110 transition-transform duration-300">
                <Play size={32} className="text-white ml-1" fill="white" />
              </div>
              <div className="text-center px-6">
                <p className="text-text-primary font-semibold text-lg font-display">{title}</p>
                <p className="text-text-muted text-sm mt-1">
                  Video darsni boshlash uchun bosing
                </p>
              </div>
            </div>
          </div>
        ) : embedSrc ? (
          <iframe
            key={embedSrc}
            src={`${embedSrc}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-surface">
            <p className="text-text-muted text-sm">Video URL kiritilmagan</p>
          </div>
        )}
      </div>

      {/* Footer: title + external link */}
      <div className="mt-3 flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-text-primary truncate">{title}</h2>
        {watchUrl && (
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-1.5 text-xs text-text-muted hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={13} />
            Tashqida ko'rish
          </a>
        )}
      </div>

      {/* Hint shown after play clicked */}
      {started && (
        <p className="mt-2 text-xs text-text-muted text-center">
          Agar video yuklanmasa —{' '}
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            shu yerda YouTube da oching
          </a>
        </p>
      )}
    </div>
  )
}
