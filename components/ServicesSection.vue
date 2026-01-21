<template>
  <section id="services" class="py-20 bg-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <svg class="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2d6cdf" stroke-width="1" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#services-grid)" />
      </svg>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Personal Introduction -->
      <div class="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 mb-16">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Profile Photo -->
          <div class="relative flex-shrink-0">
            <div
              class="w-32 h-32 bg-gradient-to-br from-brand-blue to-blue-700 rounded-2xl flex items-center justify-center">
              <!-- Replace this placeholder with your actual photo -->
              <img src="/dave-headshot.png" alt="Dave Hague" class="w-32 h-32 rounded-2xl object-cover">

            </div>
          </div>

          <!-- Personal Message -->
          <div class="text-center md:text-left">
            <h3 class="text-2xl font-inter font-bold text-brand-dark mb-3">
              Hi, I'm Dave
            </h3>
            <p class="text-lg text-gray-600 font-opensans leading-relaxed mb-4">
              I'm the person behind Time to Value, and I'm passionate about helping individuals and small businesses
              harness the power of AI. As a solo consultant, I work directly with you to cut through the AI hype
              and focus on what actually works for your specific situation.
            </p>
            <a href="https://www.linkedin.com/in/david-hague-developer/" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center px-6 py-3 bg-[#0077B5] text-white font-medium rounded-lg hover:bg-[#005885] transition-colors duration-300">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect with me on LinkedIn
            </a>
          </div>
        </div>
      </div>

      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium mb-6">
          <span class="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
          Services & Solutions
        </div>
        <h2 class="text-3xl md:text-4xl font-inter font-bold text-brand-dark mb-6">
          Let Me Help You With:
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto font-opensans leading-relaxed">
          From strategy to implementation, I provide the AI expertise you need to compete
          with companies 10x your size.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-3 gap-8 mb-16">

          <!-- AI Strategy & Consulting -->
          <div
            class="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-blue/30 relative overflow-hidden">
            <div
              class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-bl-3xl">
            </div>

            <div class="relative z-10">
              <!-- Image -->
              <div
                class="w-full h-40 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue/5 to-blue-50 flex items-center justify-center">
                <img src="/services/abstract-brain.png" alt="AI Strategy and Consulting"
                  class="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300">
              </div>

              <h3 class="text-2xl font-inter font-bold text-brand-dark mb-4">
                AI Training & Consulting
              </h3>
              <p class="text-gray-600 font-opensans leading-relaxed mb-6">
                I help you get the most out of AI, developing a plan that fits within your business.
                From identifying opportunities to creating implementation roadmaps.
              </p>

              <ul class="space-y-3 mb-6">
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-brand-blue mt-0.5 mr-3 flex-shrink-0" fill="currentColor"
                    viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  AI opportunity assessment
                </li>
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-brand-blue mt-0.5 mr-3 flex-shrink-0" fill="currentColor"
                    viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  Strategic roadmap development
                </li>
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-brand-blue mt-0.5 mr-3 flex-shrink-0" fill="currentColor"
                    viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  AI trainings and workshops
                </li>
              </ul>
            </div>
          </div>

          <!-- AI Agent Development -->
          <div
            class="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-300 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-3xl">
            </div>

            <div class="relative z-10">
              <!-- Image -->
              <div
                class="w-full h-40 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <img src="/services/robot-assistant.png" alt="AI Agent Development"
                  class="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300">
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
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  Custom agent design
                </li>
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  Proactive AI implementation
                </li>
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  Ongoing support and optimization
                </li>
              </ul>
            </div>
          </div>

          <!-- Workflow Automation -->
          <div
            class="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-300 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-3xl">
            </div>

            <div class="relative z-10">
              <!-- Image -->
              <div
                class="w-full h-40 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <img src="/services/process-flowchart.png" alt="Workflow Automation"
                  class="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300">
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
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  Process optimization
                </li>
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  Integration development
                </li>
                <li class="flex items-start text-gray-600">
                  <svg class="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  Performance monitoring
                </li>
              </ul>
            </div>
          </div>

        </div>

        <!-- Process Section -->
        <div class="bg-gradient-to-br from-brand-dark via-gray-800 to-brand-dark rounded-3xl p-8 md:p-12 text-white">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-inter font-bold mb-4">
              My Proven Process
            </h3>
            <p class="text-gray-300 font-opensans text-lg max-w-2xl mx-auto">
              I follow a structured approach to ensure your AI implementation delivers real value, fast.
            </p>
          </div>

          <div class="grid md:grid-cols-4 gap-8">

            <!-- Step 1 -->
            <div class="text-center group">
              <div
                class="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl font-inter font-bold">1</span>
              </div>
              <h4 class="text-lg font-inter font-semibold mb-2">Discover</h4>
              <p class="text-gray-300 text-sm font-opensans">
                Understand your challenges, goals, and current processes
              </p>
            </div>

            <!-- Step 2 -->
            <div class="text-center group">
              <div
                class="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl font-inter font-bold">2</span>
              </div>
              <h4 class="text-lg font-inter font-semibold mb-2">Design</h4>
              <p class="text-gray-300 text-sm font-opensans">
                Create custom AI solutions tailored to your specific needs
              </p>
            </div>

            <!-- Step 3 -->
            <div class="text-center group">
              <div
                class="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl font-inter font-bold">3</span>
              </div>
              <h4 class="text-lg font-inter font-semibold mb-2">Deploy</h4>
              <p class="text-gray-300 text-sm font-opensans">
                Implement and integrate AI solutions into your workflows
              </p>
            </div>

            <!-- Step 4 -->
            <div class="text-center group">
              <div
                class="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
