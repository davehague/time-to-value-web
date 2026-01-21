<template>
  <section class="py-20 bg-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="h-full w-full" style="background-image: radial-gradient(circle at 20% 80%, #2d6cdf 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2d6cdf 0%, transparent 50%);"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-inter font-bold text-brand-dark mb-6">
          What You'll Get on This Journey
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto font-opensans">
          My goal is to bring these themes to you in a consumable format — the same way I'd explain something over coffee to an ambitious friend who wants to upgrade their workflows, their job, and their life using AI.
        </p>
      </div>
      
      <!-- Value Propositions Grid -->
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <!-- Signal in the Noise -->
        <div class="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-blue/20 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-bl-3xl"></div>
          
          <div class="relative z-10">
            <!-- Icon -->
            <div class="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            
            <!-- Content -->
            <h3 class="text-2xl font-inter font-bold text-brand-dark mb-4">
              The Signal in the Noise
            </h3>
            <p class="text-gray-600 font-opensans leading-relaxed mb-6">
              My superpower is distilling down loads of technical information into practical and pragmatic takeaways. I'll give you the 20% that nets you 80% of the results and actually moves the needle.
            </p>
            
            <!-- Badge -->
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium">
              <span class="w-2 h-2 bg-brand-blue rounded-full mr-2"></span>
              Cut Through the Noise
            </div>
          </div>
        </div>
        
        <!-- Focus on Agents -->
        <div class="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-300 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-3xl"></div>
          
          <div class="relative z-10">
            <!-- Icon -->
            <div class="w-16 h-16 bg-gradient-to-br from-gray-700 to-brand-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            
            <!-- Content -->
            <h3 class="text-2xl font-inter font-bold text-brand-dark mb-4">
              A Focus on Agents
            </h3>
            <p class="text-gray-600 font-opensans leading-relaxed mb-6">
              Agents are the next step in the AI revolution. I'll guide you through how agents can automate tasks, work behind the scenes on pre-defined workflows, and even act proactively to help you reach your goals.
            </p>
            
            <!-- Badge -->
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
              <span class="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
              AI That Works for You
            </div>
          </div>
        </div>
        
        <!-- Big Picture Trends -->
        <div class="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-300 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-3xl"></div>
          
          <div class="relative z-10">
            <!-- Icon -->
            <div class="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            
            <!-- Content -->
            <h3 class="text-2xl font-inter font-bold text-brand-dark mb-4">
              Big Picture Trend Lines
            </h3>
            <p class="text-gray-600 font-opensans leading-relaxed mb-6">
              Beyond the day-to-day hype, I'll help you see the forest and not just the trees. Together we'll identify the through-lines and trends so we can skate to where the puck is going.
            </p>
            
            <!-- Badge -->
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
              <span class="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
              Future-Forward Thinking
            </div>
          </div>
        </div>
        
      </div>
      
      <!-- Call to Action -->
      <div class="text-center mt-16">
        <p class="text-xl text-brand-dark font-inter font-medium mb-6">
          Ready to punch above your weight class by leveraging AI?
        </p>
        <NuxtLink 
          to="#contact" 
          class="inline-flex items-center bg-gradient-to-r from-brand-coral to-red-500 hover:from-red-500 hover:to-brand-coral text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Join Me on This Journey
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
