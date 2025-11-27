<template>
 <heroOverlay
    :image=img
    title="Blog"
    :breadcrumbs="[
        {label:'Home', link:'/'},
        {label:'Blog'}
    ]"
    />

  <div class="container mx-auto py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
    <!-- Blog List -->
    <div class="lg:col-span-3 space-y-14">

      <div
        v-for="post in posts"
        :key="post.id"
        class="space-y-4"
      >
        <img :src="post.image" class="w-full rounded" />

        <div class="flex items-center space-x-5 text-sm text-gray-500">
          <span>👤 Admin</span>
          <span>📅 {{ post.date }}</span>
          <span>🏷️ {{ post.category }}</span>
        </div>

        <h2 class="text-xl font-semibold">{{ post.title }}</h2>

        <p class="text-gray-600 text-sm leading-relaxed">
          {{ post.excerpt }}
        </p>

        <button class="text-yellow-600 hover:underline text-sm">Read more</button>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center space-x-2 pt-8">
        <button class="px-3 py-1 border rounded">1</button>
        <button class="px-3 py-1 border rounded">2</button>
        <button class="px-3 py-1 border rounded">3</button>
        <button class="px-5 py-1 border rounded">Next</button>
      </div>

    </div>

    <!-- Sidebar -->
    <aside class="space-y-10">

      <!-- Search -->
      <div>
        <input
          type="text"
          placeholder="Search"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <!-- Categories -->
      <div>
        <h3 class="font-semibold mb-3">Categories</h3>
        <ul class="space-y-2 text-gray-600 text-sm">
          <li v-for="c in categories" :key="c.name" class="flex justify-between">
            <span>{{ c.name }}</span>
            <span>{{ c.count }}</span>
          </li>
        </ul>
      </div>

      <!-- Recent Posts -->
      <div>
        <h3 class="font-semibold mb-3">Recent Posts</h3>
        <div v-for="item in recent" :key="item.id" class="flex items-start gap-3 mb-4">
          <img :src="item.image" class="w-12 h-12 rounded" />
          <div>
            <p class="text-sm font-medium">{{ item.title }}</p>
            <p class="text-xs text-gray-500">{{ item.date }}</p>
          </div>
        </div>
      </div>

    </aside>
  </div>




    <ShopBanner/>
</template>

<script setup>
import img from "~/assets/images/herobg.png"
const posts = [
  {
    id: 1,
    image: "/blog1.jpg",
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    category: "Wood",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 2,
    image: "/blog2.jpg",
    title: "Exploring new ways of decorating",
    date: "14 Oct 2022",
    category: "Handmade",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 3,
    image: "/blog3.jpg",
    title: "Handmade pieces that took time to make",
    date: "14 Oct 2022",
    category: "Wood",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  }
];

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 }
];

const recent = [
  { id: 1, title: "Going all-in with millennial design", date: "14 Oct 2022", image: "/blog1.jpg" },
  { id: 2, title: "Exploring new ways of decorating", date: "14 Oct 2022", image: "/blog2.jpg" },
  { id: 3, title: "Handmade pieces that took time to make", date: "14 Oct 2022", image: "/blog3.jpg" },
  { id: 4, title: "Colorful Crafts", date: "13 Oct 2022", image: "/blog4.jpg" }
];
</script>