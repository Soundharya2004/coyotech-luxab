import { Star } from 'lucide-react'

interface Review {
  rating: number
  text: string
  author: {
    name: string
    title: string
    image: string
  }
}

export default function Reviews() {
  const reviews: Review[] = [
    {
      rating: 5,
      text: "Always a delightful experience at Brewed Awakenings.",
      author: {
        name: "Ashley Davis",
        title: "Tech Enthusiast",
        image: "https://luxab.ae/wp-content/uploads/2024/10/4a71f64b1f55758349751a95c02ab73be353f75f.jpg",
      },
    },
    {
      rating: 5,
      text: "Experience a welcoming sanctuary for coffee enthusiasts to unwind and savor artisanal brews.",
      author: {
        name: "Megan Anderson",
        title: "Small Business Owner",
        image: "https://luxab.ae/wp-content/uploads/2024/10/1fe8ae8069338e8a2770cc5eea182302d3558800.jpg",
      },
    },
  ]

  return (
    <section className="py-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Customer Experiences and Reviews
          </h2>
          <p className="mx-auto max-w-[600px] text-sm text-gray-500 dark:text-gray-400">
            Uncover the joy and satisfaction shared by patrons who have savored memorable moments at Brewed Awakenings, where every visit is a delightful experience.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 p-4 bg-white rounded-lg shadow dark:bg-gray-800"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
                <span className="sr-only">{review.rating} stars</span>
              </div>
              <p className="text-sm">{review.text}</p>
              <div className="flex items-center gap-3">
                <img
                  alt={`${review.author.name}'s profile picture`}
                  className="rounded-full object-cover w-10 h-10"
                  src={review.author.image}
                />
                <div>
                  <p className="text-sm font-semibold">{review.author.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {review.author.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}