<template>
  <section id="content" class="py-20 bg-gradient-to-br from-gray-50 via-white to-brand-cream/30 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-20 w-40 h-40">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 100 L100 20 L180 100 L100 180 Z" stroke="#2d6cdf" stroke-width="2" fill="none"/>
          <circle cx="100" cy="100" r="30" stroke="#ff6b5d" stroke-width="1" fill="none"/>
        </svg>
      </div>
      <div class="absolute bottom-20 right-20 w-32 h-32">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="100" height="100" stroke="#a6e3c6" stroke-width="2" fill="none" rx="20"/>
        </svg>
      </div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-brand-green/10 rounded-full text-brand-green font-medium mb-6">
          <span class="w-2 h-2 bg-brand-green rounded-full mr-2"></span>
          Content & Education
        </div>
        <h2 class="text-4xl md:text-5xl font-inter font-bold text-brand-dark mb-6">
          Learn to Skate Where the Puck is Going
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto font-opensans leading-relaxed">
          Stay ahead of the curve with content that cuts through the hype and delivers 
          the insights you need to make AI work for your business.
        </p>
      </div>
      
      <!-- Featured Content Types -->
      <div class="grid lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
        
        <!-- Video Content -->
        <div class="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-blue/30 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-bl-3xl"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            
            <h3 class="text-2xl font-inter font-bold text-brand-dark mb-4">
              Video Tutorials
            </h3>
            <p class="text-gray-600 font-opensans leading-relaxed mb-6">
              Step-by-step guides that break down complex AI concepts into actionable tutorials. 
              Like having a friend explain it over coffee.
            </p>
            
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>
                AI Agent Implementations
              </div>
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>
                Workflow Automation Guides
              </div>
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>
                Tool Reviews & Comparisons
              </div>
            </div>
            
            <div class="text-brand-blue font-inter font-semibold group-hover:text-blue-700 transition-colors">
              Watch Latest Videos →
            </div>
          </div>
        </div>
        
        <!-- Trend Analysis -->
        <div class="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-coral/30 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-coral/10 to-transparent rounded-bl-3xl"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-br from-brand-coral to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            
            <h3 class="text-2xl font-inter font-bold text-brand-dark mb-4">
              Trend Analysis
            </h3>
            <p class="text-gray-600 font-opensans leading-relaxed mb-6">
              Big picture insights that help you see the forest, not just the trees. 
              Understand where AI is heading and how to position yourself.
            </p>
            
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-brand-coral rounded-full mr-3"></span>
                Market Analysis & Predictions
              </div>
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-brand-coral rounded-full mr-3"></span>
                Technology Deep Dives
              </div>
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-brand-coral rounded-full mr-3"></span>
                Strategic Opportunities
              </div>
            </div>
            
            <div class="text-brand-coral font-inter font-semibold group-hover:text-red-600 transition-colors">
              Read Latest Analysis →
            </div>
          </div>
        </div>
        
        <!-- Practical Guides -->
        <div class="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-green/30 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-green/10 to-transparent rounded-bl-3xl"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-br from-brand-green to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
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
                <span class="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                Implementation Frameworks
              </div>
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                Best Practice Playbooks
              </div>
              <div class="flex items-center text-gray-600 text-sm">
                <span class="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                ROI Optimization Tips
              </div>
            </div>
            
            <div class="text-brand-green font-inter font-semibold group-hover:text-green-600 transition-colors">
              Download Guides →
            </div>
          </div>
        </div>
        
      </div>
      
      <!-- Content Preview Section -->
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          
          <!-- Content Info -->
          <div>
            <h3 class="text-3xl font-inter font-bold text-brand-dark mb-6">
              Get Value, Faster
            </h3>
            <p class="text-lg text-gray-600 font-opensans leading-relaxed mb-8">
              Join thousands of ambitious individuals and business owners who are already using AI 
              to punch above their weight class. Get the signal in the noise with actionable insights 
              delivered straight to your inbox.
            </p>
            
            <!-- Key Benefits -->
            <div class="space-y-4 mb-8">
              <div class="flex items-start">
                <div class="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-inter font-semibold text-brand-dark mb-1">Weekly AI insights</h4>
                  <p class="text-gray-600 font-opensans text-sm">The most important AI developments, distilled into actionable takeaways</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-6 h-6 bg-brand-coral rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-inter font-semibold text-brand-dark mb-1">Exclusive tutorials</h4>
                  <p class="text-gray-600 font-opensans text-sm">Step-by-step guides you won't find anywhere else</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-inter font-semibold text-brand-dark mb-1">Early access</h4>
                  <p class="text-gray-600 font-opensans text-sm">Be first to know about new tools, trends, and opportunities</p>
                </div>
              </div>
            </div>
            
            <!-- Newsletter Signup -->
            <div class="bg-gradient-to-r from-brand-blue/5 to-brand-coral/5 rounded-2xl p-6">
              <h4 class="font-inter font-semibold text-brand-dark mb-3">Stay Ahead of the Curve</h4>
              <div class="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  class="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:outline-none font-opensans"
                >
                <button class="bg-gradient-to-r from-brand-blue to-blue-600 text-white px-6 py-3 rounded-xl font-inter font-semibold hover:from-blue-600 hover:to-brand-blue transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p class="text-gray-500 text-xs mt-2 font-opensans">No spam, just value. Unsubscribe anytime.</p>
            </div>
          </div>
          
          <!-- Visual Element -->
          <div class="relative">
            <div class="bg-gradient-to-br from-brand-dark via-gray-800 to-brand-dark rounded-2xl p-8 text-white relative overflow-hidden">
              <!-- Decorative elements -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-blue/20 to-transparent rounded-bl-3xl"></div>
              <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-coral/20 to-transparent rounded-tr-3xl"></div>
              
              <div class="relative z-10">
                <div class="text-4xl font-inter font-bold mb-4">5K+</div>
                <div class="text-xl font-inter font-semibold text-gray-300 mb-2">Subscribers</div>
                <div class="text-gray-400 font-opensans text-sm mb-6">
                  Join ambitious individuals and business owners leveraging AI to compete with giants
                </div>
                
                <!-- Testimonial style quote -->
                <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p class="text-gray-200 font-opensans text-sm italic mb-3">
                    "This content cuts through all the AI hype and gives me exactly what I need to implement in my business."
                  </p>
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-coral rounded-full mr-3"></div>
                    <div>
                      <div class="text-white font-opensans text-sm font-medium">Sarah Chen</div>
                      <div class="text-gray-400 text-xs">Small Business Owner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
