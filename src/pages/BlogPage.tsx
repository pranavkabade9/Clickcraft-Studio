import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { BlogCard, Button, Container } from '@/src/components/Layout';
import { BLOG_POSTS } from '@/src/content/blog';

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const activeCategory = searchParams.get('cat') || 'All';
  const categories = ['All', 'Pinterest Marketing', 'Make Money Online', 'Side Hustles', 'Affiliate Marketing'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 tracking-tight uppercase">The Knowledge Base</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
            Everything you need to know about Pinterest growth, affiliate marketing, and building a side hustle in India.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10 md:mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSearchParams(cat === 'All' ? {} : { cat })}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
            <input 
              type="text" 
              placeholder="Search guides..." 
              className="w-full pl-10 md:pl-12 pr-6 py-2.5 md:py-3 rounded-full bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-black transition-all text-sm md:text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-16 md:py-20 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-400">No posts found matching your criteria.</h3>
            <Button 
              variant="ghost" 
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setSearchParams({});
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}
