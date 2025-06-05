<template>
  <section id="services" class="py-20 bg-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <svg class="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2d6cdf" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#services-grid)"/>
      </svg>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium mb-6">
          <span class="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
          Services & Solutions
        </div>
        <h2 class="text-4xl md:text-5xl font-inter font-bold text-brand-dark mb-6">
          How We Help You Win
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto font-opensans leading-relaxed">
          From strategy to implementation, we provide the AI expertise you need to compete 
          with companies 10x your size.
        </p>
      </div>
      
      <!-- Services Grid -->
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-3 gap-8 mb-16">
          
          <!-- AI Strategy & Consulting -->
          <div class="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-blue/30 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-bl-3xl"></div>
            
            <div class="relative z-10">
              <!-- Image -->
              <div class="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue/5 to-blue-50 flex items-center justify-center">
                <img 
                  src="/services/abstract-brain.png" 
                  alt="AI Strategy and Consulting" 
                  class="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                >
              </div>
              
              <h3 class="text-2xl font-inter font-bold text-brand-dark mb-4">
                AI Strategy & Consulting
              </h3>
              <p class="text-gray-600 font-opensans leading-relaxed mb-6">
                We help you develop a comprehensive AI strategy that aligns with your business goals. 
                From identifying opportunities to creating implementation roadmaps.
              </p>
              
              <ul class="space-y-3 mb-6">
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-brand-blue mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  AI opportunity assessment
                </li>
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-brand-blue mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Strategic roadmap development
                </li>
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-brand-blue mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  ROI optimization planning
                </li>
              </ul>
              
              <div class="text-brand-blue font-inter font-semibold group-hover:text-blue-700 transition-colors">
                Learn More →
              </div>
            </div>
          </div>
          
          <!-- AI Agent Development -->
          <div class="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-300 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-3xl"></div>
            
            <div class="relative z-10">
              <!-- Image -->
              <div class="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <img 
                  src="/services/robot-assistant.png" 
                  alt="AI Agent Development" 
                  class="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                >
              </div>
              
              <h3 class="text-2xl font-inter font-bold text-brand-dark mb-4">
                AI Agent Development
              </h3>
              <p class="text-gray-600 font-opensans leading-relaxed mb-6">
                Custom AI agents that work behind the scenes on your workflows, automate repetitive tasks, 
                and proactively help you achieve your business goals.
              </p>
              
              <ul class="space-y-3 mb-6">
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Custom agent design
                </li>
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Proactive AI implementation
                </li>
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Ongoing optimization
                </li>
              </ul>
              
              <div class="text-gray-600 font-inter font-semibold group-hover:text-gray-800 transition-colors">
                Learn More →
              </div>
            </div>
          </div>
          
          <!-- Workflow Automation -->
          <div class="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-300 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-3xl"></div>
            
            <div class="relative z-10">
              <!-- Image -->
              <div class="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <img 
                  src="/services/process-flowchart.png" 
                  alt="Workflow Automation" 
                  class="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                >
              </div>
              
              <h3 class="text-2xl font-inter font-bold text-brand-dark mb-4">
                Workflow Automation
              </h3>
              <p class="text-gray-600 font-opensans leading-relaxed mb-6">
                Transform your manual processes into intelligent, automated workflows that save time, 
                reduce errors, and scale with your business growth.
              </p>
              
              <ul class="space-y-3 mb-6">
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Process optimization
                </li>
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Integration development
                </li>
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Performance monitoring
                </li>
              </ul>
              
              <div class="text-gray-600 font-inter font-semibold group-hover:text-gray-800 transition-colors">
                Learn More →
              </div>
            </div>
          </div>
          
        </div>
        
        <!-- Process Section -->
        <div class="bg-gradient-to-br from-brand-dark via-gray-800 to-brand-dark rounded-3xl p-8 md:p-12 text-white">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-inter font-bold mb-4">
              Our Proven Process
            </h3>
            <p class="text-gray-300 font-opensans text-lg max-w-2xl mx-auto">
              We follow a structured approach to ensure your AI implementation delivers real value, fast.
            </p>
          </div>
          
          <div class="grid md:grid-cols-4 gap-8">
            
            <!-- Step 1 -->
            <div class="text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl font-inter font-bold">1</span>
              </div>
              <h4 class="text-lg font-inter font-semibold mb-2">Discover</h4>
              <p class="text-gray-300 text-sm font-opensans">
                Understand your challenges, goals, and current processes
              </p>
            </div>
            
            <!-- Step 2 -->
            <div class="text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl font-inter font-bold">2</span>
              </div>
              <h4 class="text-lg font-inter font-semibold mb-2">Design</h4>
              <p class="text-gray-300 text-sm font-opensans">
                Create custom AI solutions tailored to your specific needs
              </p>
            </div>
            
            <!-- Step 3 -->
            <div class="text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl font-inter font-bold">3</span>
              </div>
              <h4 class="text-lg font-inter font-semibold mb-2">Deploy</h4>
              <p class="text-gray-300 text-sm font-opensans">
                Implement and integrate AI solutions into your workflows
              </p>
            </div>
            
            <!-- Step 4 -->
            <div class="text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl font-inter font-bold">4</span>
              </div>
              <h4 class="text-lg font-inter font-semibold mb-2">Deliver</h4>
              <p class="text-gray-300 text-sm font-opensans">
                Monitor performance and optimize for maximum value
              </p>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
