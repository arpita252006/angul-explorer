export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

/*const img = (name: string) =>
  `https://placehold.co/1280x720/1a1a1a/ffffff?text=${encodeURIComponent(name)}`; */

import { img } from "@/lib/img"; // adjust path if needed

export const blogPosts: BlogPost[] = [
  {
    id: "weekend-getaway-satkosia",
    title: "A Weekend Getaway to Satkosia Gorge",
    excerpt: "Experience the raw beauty of Satkosia Gorge with a two-day itinerary covering boat rides, nature trails, and riverside camping.",
    content: `Satkosia Gorge is one of those rare places that takes your breath away the moment you arrive. Nestled in the Eastern Ghats of Odisha, this 22-kilometer gorge carved by the Mahanadi River is a masterpiece of nature.\n\nOur weekend began with an early morning drive from Angul, winding through lush countryside dotted with rice paddies and small villages. The approach to Satkosia builds anticipation — the hills grow taller, the forests denser, and the air cooler.\n\nDay one was all about the river. We took a boat ride through the gorge, gliding between towering cliff faces adorned with hanging vines and flowering plants. Our guide pointed out a basking mugger crocodile and several species of kingfishers. The silence, broken only by birdsong and the gentle lapping of water, was profoundly peaceful.\n\nIn the evening, we set up camp at the eco-tourism site overlooking the river. The sunset painted the gorge in shades of gold and amber. After a dinner of locally prepared fish curry and rice, we sat around a campfire sharing stories under a canopy of stars.\n\nDay two started with a nature trail through the surrounding forest. We spotted fresh elephant tracks and heard the distinctive call of the Malabar pied hornbill. The trail ended at a viewpoint that offered a panoramic vista of the gorge — a sight that makes you feel simultaneously small and deeply connected to the world.\n\nSatkosia is not a place of luxury resorts and curated experiences. It is raw, authentic, and profoundly beautiful. And that is exactly why you should visit.`,
    image: img("blogs/Satkosia+Blog"),
    date: "2025-12-15",
    author: "Angul Explorer Team",
  },
  {
    id: "temple-trail-angul",
    title: "The Temple Trail: Spiritual Angul",
    excerpt: "A journey through the sacred temples of Angul District, from the grand Jagannath Temple to the mystical Maa Hingula shrine.",
    content: `Angul District may not be the first place that comes to mind when you think of temple tourism in Odisha, but it should be. The district is home to a rich tapestry of temples, each with its own character and spiritual significance.\n\nOur temple trail began at the Angul Jagannath Temple, the spiritual anchor of the town. Modeled after the famous Puri Jagannath Temple, it buzzes with devotional energy. The morning aarti, with its rhythmic chanting and the fragrance of incense, sets a contemplative tone for the journey ahead.\n\nFrom there, we traveled to Binikei Temple, an ancient shrine whose stone carvings tell stories from centuries past. The craftsmanship on the temple walls is remarkable — intricate figures and geometric patterns that have survived the passage of time.\n\nThe highlight of the trail was Maa Hingula Temple. Set in a forested area, approaching the temple feels like entering another world. The air is thick with devotion and the sound of bells. Devotees believe the goddess grants wishes to those who come with a pure heart. The experience here is intense and deeply personal.\n\nWe concluded our trail at the Budhi Thakurani Temple, where we were fortunate to witness preparations for the annual festival. The community's enthusiasm and the colorful decorations being prepared gave us a glimpse of the vibrant cultural life that revolves around these sacred spaces.\n\nAngul's temples are not tourist attractions in the conventional sense — they are living, breathing centers of faith and community. Visiting them is an exercise in cultural immersion.`,
    image: img("blogs/Temple+Trail+Blog"),
    date: "2025-11-20",
    author: "Angul Explorer Team",
  },
  {
    id: "waterfall-hunting-monsoon",
    title: "Waterfall Hunting in Monsoon Season",
    excerpt: "The monsoon transforms Angul's waterfalls into thundering cascades. Here is our guide to the best waterfall experiences.",
    content: `There is something primal about standing before a waterfall at full force during the monsoon. The sound is overwhelming, the mist drenches you within seconds, and the sheer volume of water tumbling down is humbling.\n\nAngul District is blessed with several beautiful waterfalls, and we set out to visit them all during the peak monsoon season in August.\n\nDerjang Waterfall was our first stop and immediately set the bar high. The monsoon had transformed this normally gentle cascade into a roaring torrent. The trek to the falls was slippery but manageable with proper footwear. The reward was spectacular — a wall of white water crashing into a churning pool below, sending spray dozens of meters into the air.\n\nJaraka Waterfall offered a different experience — more intimate, more secluded. The trek through the forest was magical, with every leaf dripping and small streams crossing our path. The waterfall itself, while smaller than Derjang, had a delicate beauty that was deeply calming.\n\nKuludi Waterfall surprised us with its setting among bamboo groves. The bamboo rustled in the wind and rain, creating a natural symphony that complemented the waterfall's own music. We spent over an hour here, simply sitting and absorbing the experience.\n\nPatrapada Waterfall was the most accessible of the four, making it popular with families. Despite the crowd, the waterfall's charm was undeniable. Children playing in the shallow downstream areas, families sharing picnic lunches under improvised rain shelters — it was a scene of simple joy.\n\nIf you plan to visit Angul's waterfalls, the monsoon season (July-September) is the time. Just bring waterproof bags for your electronics, wear good shoes, and be prepared to get thoroughly, gloriously wet.`,
    image: img("blogs/Waterfall+Blog"),
    date: "2025-10-08",
    author: "Angul Explorer Team",
  },
  {
    id: "taste-of-angul",
    title: "A Taste of Angul: Local Food Guide",
    excerpt: "From street-side dalma to restaurant biryanis, discover the culinary landscape of Angul District.",
    content: `Every destination is best understood through its food, and Angul is no exception. The district's cuisine is rooted in the Odia culinary tradition — simple, flavorful, and deeply satisfying.\n\nOur food journey began with the most Odia of dishes: dalma. This lentil and vegetable stew, flavored with panch phutana (five-spice tempering) and a dash of ghee, is comfort food at its finest. Nearly every small eatery and home in Angul serves its own version, and each is worth trying.\n\nPakhala, fermented rice soaked in water and served with fried vegetables and fish fry, is the quintessential summer meal. On a hot Angul afternoon, a plate of pakhala with a side of badi chura (sun-dried lentil fritters crumbled and seasoned) is as refreshing as a cold drink.\n\nFor those who enjoy meat, the local chicken and mutton preparations are excellent. Slowly cooked with onions, tomatoes, and a careful blend of spices, these curries are hearty and flavorful. Many roadside dhabas serve these with thick, handmade rotis.\n\nFor a more formal dining experience, Luminous Restaurant offers a reliable menu spanning Odia, North Indian, and Chinese cuisines. Their paneer butter masala and mutton curry are local favorites. Zafran Restaurant provides a more refined experience, with excellent biryanis and kebabs that rival those of larger cities.\n\nStreet food in Angul centers around familiar Odia snacks: gupchup (pani puri), aloo chop, bara, and the ever-present samosa. The evening market near the town center is the best place to sample these.\n\nAngul's food scene may not be as well-known as those of Odisha's coastal cities, but it offers authentic, unpretentious cuisine that nourishes both body and spirit.`,
    image: img("blogs/Food+Blog"),
    date: "2025-09-14",
    author: "Angul Explorer Team",
  },
];

export const getBlogPost = (id: string) => blogPosts.find((b) => b.id === id);
