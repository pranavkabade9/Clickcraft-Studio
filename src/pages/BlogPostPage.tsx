import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, User, Share2, Bookmark, Pin, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/src/content/blog';
import { Button, EmailCapture, Container } from '@/src/components/Layout';
import { motion } from 'motion/react';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" />;

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="bg-gray-50 py-12 md:py-24">
        <Container className="max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-[10px] md:text-sm font-bold text-gray-500 hover:text-black mb-6 md:mb-8 transition-colors uppercase tracking-widest">
            <ArrowLeft className="mr-2 w-3 h-3 md:w-4 md:h-4" /> BACK TO BLOG
          </Link>
          <span className="block text-[#E60023] font-black uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-6xl font-black tracking-tight mb-6 md:mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 font-medium text-xs md:text-base">
            <div className="flex items-center"><User className="w-3 h-3 md:w-4 md:h-4 mr-2" /> {post.author}</div>
            <div className="flex items-center"><Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" /> {post.date}</div>
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container className="py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
          {/* Main Content */}
          <article className="flex-1 max-w-3xl">
            <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-8 md:mb-12 shadow-xl md:shadow-2xl">
              <img 
                src={post.thumbnail} 
                alt={post.title} 
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="prose prose-base md:prose-lg prose-slate max-w-none 
              prose-headings:font-black prose-headings:tracking-tight prose-headings:uppercase
              prose-h1:text-3xl md:prose-h1:text-4xl prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-10 md:prose-h2:mt-12 prose-h2:mb-4 md:prose-h2:mb-6
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5 md:prose-p:mb-6 prose-p:text-sm md:prose-p:text-base
              prose-strong:text-black prose-strong:font-bold
              prose-blockquote:border-l-4 prose-blockquote:border-[#E60023] prose-blockquote:bg-gray-50 prose-blockquote:p-4 md:prose-blockquote:p-6 prose-blockquote:rounded-r-xl md:prose-blockquote:rounded-r-2xl prose-blockquote:italic
              prose-li:text-gray-600 prose-li:mb-1 md:prose-li:mb-2 prose-li:text-sm md:prose-li:text-base
              prose-a:text-[#E60023] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
            ">
              <ReactMarkdown
                components={{
                  a: ({ node, ...props }) => {
                    const isAmazonLink = props.children?.toString().toLowerCase().includes('amazon');
                    if (isAmazonLink) {
                      return (
                        <a
                          {...props}
                          className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-[#E60023] text-white font-bold rounded-full hover:bg-[#ad001a] transition-all no-underline mt-4 shadow-lg hover:shadow-xl active:scale-95 text-sm md:text-base"
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      );
                    }
                    return <a {...props} />;
                  },
                  img: ({ node, ...props }) => (
                    <img 
                      {...props} 
                      className="rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl mx-auto my-8 md:my-12 border border-gray-100" 
                      referrerPolicy="no-referrer" 
                    />
                  )
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Post Footer */}
            <div className="mt-12 md:mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-6">
              <div className="flex space-x-3 md:space-x-4">
                <Button variant="outline" size="sm" className="text-xs md:text-sm"><Share2 className="w-3 h-3 md:w-4 md:h-4 mr-2" /> Share</Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm"><Bookmark className="w-3 h-3 md:w-4 md:h-4 mr-2" /> Save</Button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-widest">Tags:</span>
                <span className="bg-gray-100 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold">#Pinterest</span>
                <span className="bg-gray-100 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold">#PassiveIncome</span>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-10 md:space-y-12">
            {/* CTA Box */}
            <div className="bg-black text-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] lg:sticky lg:top-28">
              <div className="bg-[#E60023] w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-6">
                <Pin className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 leading-tight uppercase tracking-tight">FREE PINTEREST STARTER KIT</h3>
              <p className="text-gray-400 mb-6 md:mb-8 text-xs md:text-sm">Get the exact templates and SEO checklist we use to drive 100k+ monthly views.</p>
              <Link to="/starter-kit">
                <Button className="w-full py-3 md:py-4">Download Now</Button>
              </Link>
            </div>

            {/* Related Posts */}
            <div>
              <h4 className="text-base md:text-lg font-black mb-5 md:mb-6 uppercase tracking-tight">Related Guides</h4>
              <div className="space-y-5 md:space-y-6">
                {relatedPosts.map(p => (
                  <Link key={p.id} to={`/blog/${p.slug}`} className="group flex gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden flex-shrink-0">
                      <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h5 className="font-bold text-xs md:text-sm leading-tight group-hover:text-[#E60023] transition-colors line-clamp-2">{p.title}</h5>
                      <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 block">{p.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>

      {/* Newsletter */}
      <EmailCapture title="Ready to start your journey?" subtitle="Join our community of 5,000+ side hustlers and get weekly growth tips." />
    </div>
  );
}
