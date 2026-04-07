'use client'

import { useState } from 'react'
import { Play, AlertCircle, ExternalLink } from 'lucide-react'

interface VideoPlayerProps {
  videoUrl: string
  title: string
  onWatched?: () => void
}

function getEmbedUrl(url: string): { src: string; isExternal: boolean } {
  if (!url) return { src: '', isExternal: false }

  // Google Drive: drive.google.com/file/d/FILE_ID/view  →  .../preview
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/)
  if (driveMatch) {
    return { src: `https://drive.google.com/file/d/${driveMatch[1]}/preview`, isExternal: false }
  }

  // YouTube embed already
  if (url.includes('youtube.com/embed/')) {
    return { src: url.split('?')[0], isExternal: false }
  }
  // youtu.be/ID
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/)
  if (shortMatch) return { src: `https://www.youtube.com/embed/${shortMatch[1]}`, isExternal: false }
  // youtube.com/watch?v=ID
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/)
  if (watchMatch) return { src: `https://www.youtube.com/embed/${watchMatch[1]}`, isExternal: false }
  // youtube.com/shorts/ID
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/)
  if (shortsMatch) return { src: `https://www.youtube.com/embed/${shortsMatch[1]}`, isExternal: false }

  // Vimeo: vimeo.com/VIDEO_ID
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) return { src: `https://player.vimeo.com/video/${vimeoMatch[1]}`, isExternal: false }

  // Direct video file (mp4, webm)
  if (url.match(/\.(mp4|webm|ogg)(\?|$)/i)) return { src: url, isExternal: true }

  // Unknown — return as-is
  return { src: url, isExternal: false }
}

function isYouTubeUrl(url: string) {
  return url.includes('youtube.com') || url.includes('youtu.be')
}

export default function VideoPlayer({ videoUrl, title, onWatched }: VideoPlayerProps) {
  const [started, setStarted] = useState(false)
  const [errored, setErrored] = useState(false)

  const { src, isExternal } = getEmbedUrl(videoUrl)
  const isYT = isYouTubeUrl(videoUrl)

  const handleStart = () => {
    setStarted(true)
    setErrored(false)
    setTimeout(() => onWatched?.(), 3000)
  }

  const iframeSrc = isYT ? `${src}?autoplay=1&rel=0&modestbranding=1` : src

  return (
    <div className="w-full">
      <div className="relative w-full rounded-2xl overflow-hidden bg-black" style={{ aspectRatio: '16/9' }}>

        {/* Preview / Play button */}
        {!started && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group z-10"
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
                <p className="text-text-muted text-sm mt-1">Video darsni boshlash uchun bosing</p>
              </div>
            </div>
          </div>
        )}

        {/* Error state */}
        {started && errored && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface z-20 gap-4 px-6 text-center">
            <AlertCircle size={40} className="text-yellow-400" />
            <div>
              <p className="text-text-primary font-semibold mb-1">Video yuklanmadi</p>
              <p className="text-text-muted text-sm mb-4">
                {isYT
                  ? 'YouTube bu tarmoqda bloklangan bo\'lishi mumkin. Video muallifiga murojaat qiling yoki Google Drive linkini ishlating.'
                  : 'Video manbasiga ulanib bo\'lmadi.'}
              </p>
              {videoUrl && (
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-xl text-sm hover:bg-blue-500/30 transition-colors"
                >
                  <ExternalLink size={14} />
                  Tashqi manbada ochish
                </a>
              )}
            </div>
            <button onClick={() => { setStarted(false); setErrored(false) }} className="text-xs text-text-muted hover:text-text-secondary">
              Orqaga qaytish
            </button>
          </div>
        )}

        {/* Direct video file */}
        {started && !errored && isExternal && (
          <video
            src={src}
            autoPlay
            controls
            className="absolute inset-0 w-full h-full"
            onError={() => setErrored(true)}
          />
        )}

        {/* Iframe (YouTube / Drive / Vimeo) */}
        {started && !errored && !isExternal && src && (
          <iframe
            key={src}
            src={iframeSrc}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            onError={() => setErrored(true)}
          />
        )}

        {/* No URL */}
        {started && !src && (
          <div className="absolute inset-0 flex items-center justify-center bg-surface z-20">
            <p className="text-text-muted text-sm">Video URL kiritilmagan</p>
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <h2 className="text-base font-semibold text-text-primary">{title}</h2>
        {started && !errored && (
          <span className="text-xs text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            Tomosha qilinmoqda
          </span>
        )}
      </div>
    </div>
  )
}
