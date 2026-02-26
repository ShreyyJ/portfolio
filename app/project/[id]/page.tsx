'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Cursor = dynamic(() => import('../../../components/Cursor'), { ssr: false })

const projects = [
  {
    id: 1,
    title: 'Personal Tutor',
    subtitle: 'RAG-based Conversational AI',
    description: 'A RAG-based conversational tutoring system that answers user questions from uploaded documents, improving accuracy by grounding responses in retrieved document context.',
    longDescription: 'Built a sophisticated RAG-based conversational tutoring system using Pinecone vector search for semantic document retrieval. The system processes uploaded documents, chunks them optimally, creates embeddings, and retrieves the most relevant context to ground GPT-4 responses — dramatically reducing hallucinations. Achieved ~1.8s average end-to-end response latency for documents up to 50 pages.',
    tags: ['Python', 'LangChain', 'Pinecone', 'Streamlit', 'GPT-4', 'RAG'],
    color: '#7c6af7',
    github: 'https://github.com/ShreyyJ',
    live: 'https://tutor-app.prathhomesrv.uk/',
    highlights: [
      'Pinecone vector search for semantic retrieval',
      '1.8s avg response latency for 50-page docs',
      'Reduced LLM hallucinations via structured context',
      'Optimized chunk size & embedding strategy',
    ],
    number: '01',
  },
  {
    id: 2,
    title: 'Real-Time Chat',
    subtitle: 'Scalable Chat Application',
    description: 'A production-grade real-time chat system with Socket.IO, delivering instant message synchronization with <200ms latency and multi-user support.',
    longDescription: 'A full-stack real-time chat application powered by Socket.IO for instant bidirectional communication. Built with React 18 + shadcn/ui featuring 7 customizable themes, image attachments with preview/download, and real-time presence indicators. Containerized with Docker Compose for scalable, maintainable deployment.',
    tags: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'Docker', 'shadcn/ui'],
    color: '#4fd1c5',
    github: 'https://github.com/ShreyyJ',
    live: 'https://messaging-app-v2.prathhomesrv.uk/',
    highlights: [
      '<200ms message delivery latency',
      '7 customizable UI themes',
      'Real-time presence indicators',
      'Docker Compose containerization',
    ],
    number: '02',
  },
  {
    id: 3,
    title: 'Agentic ExpenseManager',
    subtitle: 'AI-powered Financial Automation',
    description: 'An end-to-end agentic expense management system where an OpenAI LLM with LangGraph autonomously plans and executes financial tasks from natural language.',
    longDescription: 'A cutting-edge agentic system combining Streamlit UI with FastAPI backend, where LangGraph orchestrates an OpenAI agent to autonomously handle expense logging, category aggregation, and budget analysis from plain language commands. Reduced manual tracking effort by 80% through scheduling, retry handling, and Google Sheets MCP server integration for standardized tool execution.',
    tags: ['Python', 'FastAPI', 'LangGraph', 'MCP', 'OpenAI', 'Streamlit', 'Google Sheets'],
    color: '#f687b3',
    github: 'https://github.com/ShreyyJ',
    live: '#',
    highlights: [
      '80% reduction in manual tracking effort',
      'LangGraph multi-step agentic planning',
      'Google Sheets MCP server integration',
      'Optimized token usage & response latency',
    ],
    number: '03',
  },
]

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id))
  const liveUrl = project?.live && project.live !== '#' ? project.live : null

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-text mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-accent hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Cursor />
      <main 
        className="min-h-screen pt-20 pb-20 px-6 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 18% 12%, ${project.color}28 0%, ${project.color}10 24%, transparent 52%),
            radial-gradient(circle at 82% 78%, ${project.color}1f 0%, ${project.color}0a 22%, transparent 50%),
            linear-gradient(160deg, ${project.color}16 0%, ${project.color}08 28%, #050508 68%)
          `,
        }}
      >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${project.color}26 0%, transparent 70%)` }}
        />
        <div
          className="absolute bottom-[-12rem] right-[-8rem] w-[30rem] h-[30rem] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${project.color}1f 0%, transparent 72%)` }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-text-dim hover:text-text transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="font-mono text-xs tracking-widest uppercase">Back</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: project.color, boxShadow: `0 0 12px ${project.color}` }}
            />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: project.color }}>
              {project.number} / PROJECT
            </span>
          </div>
          <h1 className="font-display text-5xl font-light text-text mb-3">{project.title}</h1>
          <p className="font-mono text-sm" style={{ color: project.color }}>
            {project.subtitle}
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div
            className="w-full h-96 rounded-2xl overflow-hidden border flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
              borderColor: `${project.color}20`,
            }}
          >
            <img
              src={`/project-${project.id}.svg`}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Live Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-16"
        >
          <h2 className="font-display text-2xl font-light text-text mb-4">Live Preview</h2>
          {liveUrl ? (
            <div
              className="w-full rounded-2xl overflow-hidden border relative"
              style={{ borderColor: `${project.color}20`, background: `${project.color}08` }}
            >
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src={liveUrl}
                  title={`${project.title} Live Preview`}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
                />
              </div>
            </div>
          ) : (
            <div
              className="rounded-2xl border px-6 py-5 text-sm text-text-dim"
              style={{ borderColor: `${project.color}20`, background: `${project.color}08` }}
            >
              Live preview is not available yet.
            </div>
          )}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Description */}
            <div>
              <h2 className="font-display text-2xl font-light text-text mb-4">Overview</h2>
              <p className="text-text-dim leading-relaxed text-sm">
                {project.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-display text-2xl font-light text-text mb-4">Key Highlights</h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ background: project.color }}
                    />
                    <span className="text-text-dim text-sm">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Tags */}
            <div className="mb-8">
              <h3 className="font-mono text-xs tracking-widest uppercase text-text-dim mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg font-mono text-xs border"
                    style={{
                      background: `${project.color}12`,
                      border: `1px solid ${project.color}25`,
                      color: project.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border transition-all hover:scale-105"
                style={{
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}25`,
                  color: project.color,
                }}
              >
                <Github size={16} />
                <span className="font-mono text-xs tracking-wider">GitHub</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border transition-all hover:scale-105"
                style={{
                  background: project.color,
                  border: `1px solid ${project.color}`,
                  color: '#050508',
                }}
              >
                <ExternalLink size={16} />
                <span className="font-mono text-xs tracking-wider">Live Demo</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
    </>
  )
}
