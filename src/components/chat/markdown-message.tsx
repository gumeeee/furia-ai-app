"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

interface MarkdownMessageProps {
  content: string;
}

export default function MarkdownMessage({ content }: MarkdownMessageProps) {
  const components: Components = {
    code: ({ node, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      const isCodeBlock =
        node?.position?.start.line !== node?.position?.end.line;

      if (isCodeBlock && match) {
        return (
          <div className="rounded-md overflow-hidden my-4 border border-zinc-800">
            <div className="bg-zinc-800/50 px-4 py-1 text-xs text-zinc-400 border-b border-zinc-800">
              {match[1]}
            </div>
            <pre className="bg-zinc-900/70 p-4 overflow-x-auto">
              <code className={className} {...props}>
                {children}
              </code>
            </pre>
          </div>
        );
      }

      return (
        <code
          className="bg-zinc-800 text-amber-300 px-1 py-0.5 rounded"
          {...props}
        >
          {children}
        </code>
      );
    },
    table: ({ children }) => (
      <div className="overflow-x-auto my-4">
        <table className="border-collapse border border-zinc-800 w-full">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-zinc-800/50">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="border border-zinc-800 px-4 py-2 text-left text-gold/90 font-medium">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-zinc-800 px-4 py-2">{children}</td>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gold/30 pl-4 italic text-zinc-400 my-4">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-zinc-800 my-4" />,
    img: ({ src, alt }) => (
      <div className="flex justify-center my-4">
        <img
          src={src || "/placeholder.svg"}
          alt={alt || ""}
          className="max-w-full h-auto rounded-md"
        />
      </div>
    ),
  };

  return (
    <div className="prose prose-invert max-w-none prose-headings:text-gold prose-headings:font-bold prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-a:text-amber-400 hover:prose-a:text-amber-300 prose-a:no-underline hover:prose-a:underline prose-p:my-2 prose-li:my-0 prose-ol:my-2 prose-ul:my-2">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
