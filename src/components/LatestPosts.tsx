import { motion } from "framer-motion";

const LatestPosts = () => {
  const posts = [
    { id: 1, title: "Is the alkaline diet effective for weight loss and disease prevention?" },
    { id: 2, title: "What is the best sports drink?" },
    { id: 3, title: "Health benefits of alkaline water" },
    { id: 4, title: "Why do we need to drink alkaline ionized water?" },
    { id: 5, title: "The 31st International Exhibition of Agricultural Industries, Foodstuffs, Machinery and Related Industries." },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h3 className="text-3xl font-bold text-black-900">Latest Posts</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Water-Filling Animation */}
            <motion.div
              className="absolute inset-0 bg-blue-500"
              initial={{ scaleY: 0 }}
              whileHover={{ scaleY: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                transformOrigin: "bottom",
                opacity: 0.3,
                zIndex: 1,
              }}
            ></motion.div>

            {/* Content */}
            <div className="relative p-6 z-10 flex flex-col h-full">
              <h4 className="text-lg font-semibold text-gray-900 mb-auto">{post.title}</h4>

              {/* Read More Button */}
              <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="water-button flex items-center space-x-2"
                  >
                    <span>Read More</span>
                  </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
