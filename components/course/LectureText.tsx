'use client'

import ReactMarkdown from 'react-markdown'
import { Printer } from 'lucide-react'
import Button from '@/components/ui/Button'

interface LectureTextProps {
  content: string
  title: string
  onRead?: () => void
}

export default function LectureText({ content, title, onRead }: LectureTextProps) {
  const handlePrint = () => window.print()

  return (
    <div className="w-full">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6 no-print">
        <h2 className="text-lg font-semibold text-text-primary font-display">Ma'ruza matni</h2>
        <div className="flex items-center gap-2">
          {onRead && (
            <Button variant="secondary" size="sm" onClick={onRead}>
              O'qib bo'ldim
            </Button>
          )}
          <Button variant="ghost" size="sm" onClick={handlePrint}>
            <Printer size={14} />
            Chop etish
          </Button>
        </div>
      </div>

      {/* Content */}
      <article className="prose-dark max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-2xl font-bold text-text-primary font-display mt-0 mb-4">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl font-semibold text-text-primary font-display mt-8 mb-3 pb-2 border-b border-border">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="text-text-secondary leading-relaxed mb-4">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-1.5 mb-4 text-text-secondary">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside space-y-1.5 mb-4 text-text-secondary">{children}</ol>
            ),
            li: ({ children }) => <li className="leading-relaxed">{children}</li>,
            code: ({ inline, children }: any) =>
              inline ? (
                <code className="bg-surface-3 text-blue-400 px-1.5 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              ) : (
                <code className="block">{children}</code>
              ),
            pre: ({ children }) => (
              <pre className="bg-surface border border-border rounded-xl p-4 overflow-x-auto mb-4 text-sm font-mono text-slate-300">
                {children}
              </pre>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-500 pl-4 my-4 text-text-secondary italic">
                {children}
              </blockquote>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-text-primary">{children}</strong>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse text-sm">{children}</table>
              </div>
            ),
            th: ({ children }) => (
              <th className="px-4 py-2 text-left text-text-primary font-semibold bg-surface-2 border border-border">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-2 text-text-secondary border border-border">{children}</td>
            ),
            tr: ({ children }) => (
              <tr className="hover:bg-surface-2 transition-colors">{children}</tr>
            ),
            a: ({ href, children }) => (
              <a href={href} className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  )
}
