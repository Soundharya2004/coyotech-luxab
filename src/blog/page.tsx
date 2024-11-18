import { Calendar, User } from 'lucide-react'
import LatestPosts from '../components/LatestPosts'
import FAQ from '../components/FAQ'

interface BlogPost {
  id: number
  title: string
  image: string
  category: string
  author: string
  date: string
  excerpt: string
}

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Why do we need to drink alkaline ionized water?",
      image: "https://luxab.ae/wp-content/uploads/2024/10/eca0f507-f1d5-4ce7-ba66-ff3b1872bf09-1-540x720.jpg",
      category: "Uncategorized",
      author: "admin",
      date: "Oct 31, 2024",
      excerpt: "Discover the essential benefits of alkaline ionized water for your health and wellness."
    },
    {
      id: 2,
      title: "Is the alkaline diet effective for weight loss?",
      image: "https://luxab.ae/wp-content/uploads/2024/10/Screenshot-2024-11-07-142910-418x380.png",
      category: "Uncategorized",
      author: "admin",
      date: "Oct 31, 2024",
      excerpt: "Learn about the relationship between alkaline diet and weight management."
    },
    {
      id: 3,
      title: "What is the best sports drink?",
      image: "https://luxab.ae/wp-content/uploads/2024/10/Screenshot-2024-11-07-143029-421x720.png",
      category: "Uncategorized",
      author: "admin",
      date: "Oct 31, 2024",
      excerpt: "Compare different sports drinks and find out which one suits your needs."
    },
    {
      id: 4,
      title: "Health benefits of alkaline water",
      image: "https://luxab.ae/wp-content/uploads/2024/10/woah-2-1280x600.jpg",
      category: "Uncategorized",
      author: "admin",
      date: "Oct 31, 2024",
      excerpt: "Explore the various health benefits of incorporating alkaline water into your daily routine."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-purple-600">
                  <a href={`/blog/${post.id}`}>{post.title}</a>
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center ml-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <LatestPosts />
        <FAQ />
      </div>
    </div>
  )
}