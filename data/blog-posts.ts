export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: number;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "finding-inspiration-in-urban-landscapes",
    title: "Finding Inspiration in Urban Landscapes",
    excerpt:
      "How the bustling energy of city life translates into vibrant abstract compositions that capture the essence of modern living.",
    content: `
      <p>The city never sleeps, and neither does my inspiration. Walking through the streets of Barcelona, I'm constantly amazed by the interplay of light, shadow, and movement that defines urban life.</p>
      
      <p>My latest series, "Urban Reflections," emerged from countless hours spent observing the way morning light filters through glass buildings, creating geometric patterns that shift and dance throughout the day. These observations became the foundation for a collection that explores the relationship between architecture and emotion.</p>
      
      <h2>The Process</h2>
      <p>Each piece begins with a photograph or sketch captured during my urban wanderings. I'm particularly drawn to moments of transition - the golden hour when office buildings become canvases of warm light, or the blue hour when neon signs begin to compete with the fading sky.</p>
      
      <p>Back in the studio, these moments are translated into bold strokes and vibrant colors. I use a palette knife to create texture that mimics the rough surfaces of concrete and brick, while fluid brushstrokes represent the constant movement of people and traffic.</p>
      
      <h2>Color as Emotion</h2>
      <p>Urban environments are often perceived as cold and impersonal, but I see them as incredibly emotional spaces. The warm yellows of taxi cabs, the deep blues of evening shadows, the electric greens of traffic lights - each color tells a story of human experience within the urban landscape.</p>
      
      <p>Through my work, I aim to reveal the poetry hidden in everyday city scenes, transforming the mundane into something extraordinary and deeply personal.</p>
    `,

    publishedAt: "2024-01-15",
    readTime: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
  {
    slug: "the-evolution-of-my-artistic-style",
    title: "The Evolution of My Artistic Style",
    excerpt:
      "A journey through 15 years of artistic development, from traditional landscapes to contemporary abstract expressions.",
    content: `
      <p>Looking back at my artistic journey, I'm struck by how much my style has evolved over the past 15 years. What began as traditional landscape paintings has transformed into the contemporary abstract work I create today.</p>
      
      <h2>Early Beginnings</h2>
      <p>My formal training was rooted in classical techniques. I spent years mastering the fundamentals - perspective, color theory, and realistic representation. These early works, while technically proficient, felt constrained by the need to replicate reality exactly as I saw it.</p>
      
      <p>The turning point came during a residency in Paris, where I was exposed to the works of contemporary masters who dared to break free from traditional constraints. I began to understand that art could be a language of emotion rather than just documentation.</p>
      
      <h2>Finding My Voice</h2>
      <p>The transition wasn't immediate. For several years, I experimented with different approaches - impressionistic techniques, mixed media, and digital integration. Each experiment taught me something new about my own artistic voice.</p>
      
      <p>The breakthrough came when I stopped trying to paint what I saw and started painting what I felt. This shift from external observation to internal expression marked the beginning of my current style.</p>
      
      <h2>Contemporary Expression</h2>
      <p>Today, my work is characterized by bold color choices, dynamic compositions, and a fearless approach to abstraction. I've learned to trust my instincts and let emotion guide my brush rather than rigid technique.</p>
      
      <p>This evolution continues every day. Each new piece teaches me something about myself as an artist and pushes me to explore new territories of expression.</p>
    `,

    publishedAt: "2024-01-08",
    readTime: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
  },
  {
    slug: "color-theory-in-contemporary-art",
    title: "Color Theory in Contemporary Art",
    excerpt:
      "Exploring how traditional color principles apply to modern abstract compositions and emotional expression.",
    content: `
      <p>Color is the language of emotion in visual art. While traditional color theory provides the grammar, contemporary art allows us to write poetry with pigment and light.</p>
      
      <h2>Beyond the Color Wheel</h2>
      <p>The basic principles of color theory - complementary, analogous, and triadic relationships - remain relevant, but contemporary art invites us to push these boundaries. I often work with unexpected color combinations that shouldn't work according to traditional rules, yet create powerful emotional responses.</p>
      
      <p>In my piece "Emotional Landscapes," I paired warm oranges with cool purples in ways that create visual tension and psychological depth. This tension mirrors the complexity of human emotion, which rarely fits into neat categories.</p>
      
      <h2>Cultural Context</h2>
      <p>Color perception is deeply influenced by cultural context and personal experience. What reads as calming blue to one viewer might evoke melancholy in another. As contemporary artists, we must be aware of these varied interpretations while staying true to our own color intuition.</p>
      
      <p>I've found that the most successful pieces are those where color choices feel both surprising and inevitable - unexpected enough to capture attention, yet so perfectly suited to the composition that they feel like the only possible choice.</p>
      
      <h2>Digital Age Considerations</h2>
      <p>The digital age has expanded our color vocabulary exponentially. We now work with colors that didn't exist in traditional pigments, and we must consider how our work will appear on screens as well as walls.</p>
      
      <p>This technological shift has influenced my palette choices, leading me to explore more saturated, digitally-inspired colors while maintaining the organic quality that comes from traditional painting techniques.</p>
    `,

    publishedAt: "2024-01-01",
    readTime: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1596710629144-6f6abf933384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    slug: "behind-the-scenes-studio-life",
    title: "Behind the Scenes: Studio Life",
    excerpt:
      "A glimpse into my daily routine, creative process, and the organized chaos that fuels artistic creation.",
    content: `
      <p>People often ask me about my studio practice and daily routine. The truth is, there's no typical day in the life of an artist, but there are rhythms and rituals that help maintain creative flow.</p>
      
      <h2>Morning Rituals</h2>
      <p>I start each day with coffee and a walk around my neighborhood. This quiet time allows my mind to wander and often leads to unexpected insights about works in progress. I carry a small sketchbook to capture fleeting ideas or interesting light patterns.</p>
      
      <p>Back in the studio, I spend the first hour reviewing yesterday's work with fresh eyes. This reflection time is crucial - it's when I make decisions about what stays, what needs adjustment, and what should be completely reworked.</p>
      
      <h2>The Creative Process</h2>
      <p>My studio is organized chaos. To an outsider, it might look cluttered, but every brush, every tube of paint, every reference image has its place in my creative ecosystem. I work on multiple pieces simultaneously, allowing ideas to cross-pollinate between canvases.</p>
      
      <p>Music plays a huge role in my process. Different genres evoke different emotional states, which directly influence my color choices and brushwork. Jazz for contemplative pieces, electronic music for energetic abstracts, classical for more structured compositions.</p>
      
      <h2>Challenges and Breakthroughs</h2>
      <p>Not every day is productive in the traditional sense. Some days are spent staring at a canvas, waiting for the right moment to make the next mark. These periods of apparent inactivity are actually crucial - they're when the subconscious mind processes and synthesizes ideas.</p>
      
      <p>The breakthrough moments, when they come, are electric. Suddenly, everything clicks, and hours pass without notice as the painting seems to paint itself. These are the moments that make all the struggle worthwhile.</p>
    `,

    publishedAt: "2023-12-20",
    readTime: 4,

    imageUrl:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
  },
  {
    slug: "upcoming-exhibition-new-horizons",
    title: "Upcoming Exhibition: New Horizons",
    excerpt:
      "Announcing my upcoming solo exhibition featuring 20 new works exploring themes of transformation and growth.",
    content: `
      <p>I'm thrilled to announce my upcoming solo exhibition, "New Horizons," opening March 15th at Gallery Moderna in Barcelona. This collection represents two years of intensive work exploring themes of transformation, growth, and the endless possibilities that lie ahead.</p>
      
      <h2>The Collection</h2>
      <p>The exhibition will feature 20 new works, ranging from intimate 12x16 inch studies to large-scale 60x48 inch statements. Each piece in the collection explores a different aspect of transformation - personal, societal, and environmental.</p>
      
      <p>The centerpiece of the show is "Metamorphosis," a triptych that traces the journey from constraint to freedom through bold gestural marks and an evolving color palette that moves from muted earth tones to vibrant, optimistic hues.</p>
      
      <h2>New Techniques</h2>
      <p>This body of work marks a significant evolution in my technique. I've been experimenting with mixed media, incorporating elements of collage and digital printing into traditional oil paintings. This hybrid approach allows me to layer meaning in ways that pure painting cannot achieve.</p>
      
      <p>Several pieces feature fragments of maps, sheet music, and text - elements that speak to the journey of transformation and the multiple paths we can take in life.</p>
      
      <h2>Opening Reception</h2>
      <p>The opening reception will be held on March 15th from 6-9 PM. I'll be giving an artist talk at 7 PM, discussing the inspiration behind the collection and my evolving artistic practice.</p>
      
      <p>The exhibition will run through April 30th, with several pieces available for acquisition. I'm particularly excited to share this new direction in my work with collectors and art enthusiasts.</p>
      
      <p>For those unable to attend in person, we'll be offering virtual tours and an online viewing room featuring high-resolution images and detailed descriptions of each work.</p>
    `,

    publishedAt: "2023-12-15",
    readTime: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRecentPosts(limit = 3): BlogPost[] {
  return blogPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}
