import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, User, Share2, Bookmark, Pin, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/src/content/blog';
import { Button, EmailCapture } from '@/src/components/Layout';
import { motion } from 'motion/react';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" />;

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="pt-24">
      {/* Hero */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-black mb-8 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" /> BACK TO BLOG
          </Link>
          <span className="block text-[#E60023] font-black uppercase tracking-widest text-sm mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-500 font-medium">
            <div className="flex items-center"><User className="w-4 h-4 mr-2" /> {post.author}</div>
            <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <article className="flex-1 max-w-3xl">
            <div className="rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
              <img 
                src={post.thumbnail} 
                alt={post.title} 
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="prose prose-lg prose-slate max-w-none 
              prose-headings:font-black prose-headings:tracking-tight prose-headings:uppercase
              prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-black prose-strong:font-bold
              prose-blockquote:border-l-4 prose-blockquote:border-[#E60023] prose-blockquote:bg-gray-50 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl prose-blockquote:italic
              prose-li:text-gray-600 prose-li:mb-2
              prose-a:text-[#E60023] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
            ">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Post Footer */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-6">
              <div className="flex space-x-4">
                <Button variant="outline" size="sm"><Share2 className="w-4 h-4 mr-2" /> Share</Button>
                <Button variant="outline" size="sm"><Bookmark className="w-4 h-4 mr-2" /> Save</Button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Tags:</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold">#Pinterest</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold">#PassiveIncome</span>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-12">
            {/* CTA Box */}
            <div className="bg-black text-white p-8 rounded-[2rem] sticky top-28">
              <div className="bg-[#E60023] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <Pin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 leading-tight uppercase tracking-tight">FREE PINTEREST STARTER KIT</h3>
              <p className="text-gray-400 mb-8 text-sm">Get the exact templates and SEO checklist we use to drive 100k+ monthly views.</p>
              <Link to="/starter-kit">
                <Button className="w-full">Download Now</Button>
              </Link>
            </div>

            {/* Related Posts */}
            <div>
              <h4 className="text-lg font-black mb-6 uppercase tracking-tight">Related Guides</h4>
              <div className="space-y-6">
                {relatedPosts.map(p => (
                  <Link key={p.id} to={`/blog/${p.slug}`} className="group flex gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm leading-tight group-hover:text-[#E60023] transition-colors line-clamp-2">{p.title}</h5>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 block">{p.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Newsletter */}
      <EmailCapture title="Ready to start your journey?" subtitle="Join our community of 5,000+ side hustlers and get weekly growth tips." />
    </div>
  );
}
