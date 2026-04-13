import Link from "next/link";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding JavaScript Arrays",
      author: "Mahmud Kayes",
      date: "2026-04-05",
      tags: ["JavaScript", "Beginner", "Programming"],
      content:
        "JavaScript arrays allow you to store multiple values in a single variable. They are useful when working with lists of data such as products, users, or blog posts. Common array methods include map, filter, and reduce.",
    },
    {
      id: 2,
      title: "Getting Started with React",
      author: "Mahmud Kayes",
      date: "2026-04-07",
      tags: ["React", "Frontend", "Web Development"],
      content:
        "React is a popular JavaScript library for building user interfaces. It uses components to create reusable UI pieces and makes it easier to manage application state and dynamic content.",
    },
    {
      id: 3,
      title: "Why Tailwind CSS is Popular",
      author: "Mahmud Kayes",
      date: "2026-04-09",
      tags: ["Tailwind CSS", "CSS", "UI Design"],
      content:
        "Tailwind CSS is a utility-first CSS framework that allows developers to build modern designs quickly. Instead of writing custom CSS, developers apply small utility classes directly in the HTML.",
    },
    {
      id: 4,
      title: "Introduction to APIs",
      author: "Mahmud Kayes",
      date: "2026-04-10",
      tags: ["API", "Backend", "Web"],
      content:
        "An API, or Application Programming Interface, allows different software systems to communicate with each other. APIs are widely used in web development to fetch or send data between the client and server.",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Blogs</h2>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3 className="text-4xl font-bold mb-2">{blog.title}</h3>
          <Link href={`blogs/${blog.id}`}>Show Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
