<template>
  <section id="content" class="py-20 bg-gray-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-20 w-40 h-40">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 100 L100 20 L180 100 L100 180 Z" stroke="#2d6cdf" stroke-width="2" fill="none" />
          <circle cx="100" cy="100" r="30" stroke="#2d6cdf" stroke-width="1" fill="none" />
        </svg>
      </div>
      <div class="absolute bottom-20 right-20 w-32 h-32">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="100" height="100" stroke="#2d6cdf" stroke-width="2" fill="none" rx="20" />
        </svg>
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-gray-200 rounded-full text-gray-700 font-medium mb-6">
          <span class="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
          Content & Education
        </div>
        <h2 class="text-3xl md:text-4xl font-inter font-bold text-brand-dark mb-6">
          Learn to Skate Where the Puck is Going
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto font-opensans leading-relaxed">
          Stay ahead of the curve with content that cuts through the hype and delivers
          the insights you need to make AI work for your business.
        </p>
      </div>

      <!-- Featured Content Types -->
      <div class="grid lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">

        <!-- Video Content -->
        <div
          class="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-blue/30 relative overflow-hidden">
          <div
            class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-bl-3xl">
          </div>

          <div class="relative z-10">
            <div
              class="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">
                </path>
              </svg>
            </div>

            <h3 class="text-2xl font-inter font-bold text-brand-dark mb-4">
              Video Tutorials
            </h3>
            <p class="text-gray-600 font-opensans leading-relaxed mb-6">
              Short, actionable guides that break down complex AI concepts into step-by-step tutorials.
              Like having a friend explain it over coffee.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>
                AI Agent Implementations
              </div>
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Workflow Automation Guides
              </div>
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Tool Reviews & Comparisons
              </div>
            </div>

            <a href="https://www.youtube.com/@time2value" target="_blank"
              class="text-brand-blue font-inter font-semibold group-hover:text-blue-700 transition-colors">
              Watch Latest Videos →
            </a>
          </div>
        </div>

        <!-- Written Analysis -->
        <div
          class="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-300 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-3xl">
          </div>

          <div class="relative z-10">
            <div
              class="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>

            <h3 class="text-2xl font-inter font-bold text-brand-dark mb-4">
              Written Analysis
            </h3>
            <p class="text-gray-600 font-opensans leading-relaxed mb-6">
              Big picture insights that help you see the forest, not just the trees.
              Understand where AI is heading and how to position yourself.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                Market Analysis & Predictions
              </div>
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Technology Deep Dives
              </div>
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Strategic Opportunities
              </div>
            </div>

            <a href="/blog" class="text-gray-600 font-inter font-semibold group-hover:text-gray-800 transition-colors">
              Read Latest Articles →
            </a>
          </div>
        </div>

        <!-- Practical Guides -->
        <div
          class="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-300 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-3xl">
          </div>

          <div class="relative z-10">
            <div
              class="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                </path>
              </svg>
            </div>

            <h3 class="text-2xl font-inter font-bold text-brand-dark mb-4">
              Practical Guides
            </h3>
            <p class="text-gray-600 font-opensans leading-relaxed mb-6">
              The 20% that gets you 80% of the way there. Distilled, actionable guides
              that actually move the needle for your business.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                Implementation Frameworks
              </div>
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Best Practice Playbooks
              </div>
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                ROI Optimization Tips
              </div>
            </div>

            <a href="/guides"
              class="text-gray-600 font-inter font-semibold group-hover:text-gray-800 transition-colors">
              View Guides →
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
