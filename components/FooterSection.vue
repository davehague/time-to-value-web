<template>
  <footer class="bg-brand-dark text-white py-16 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
      <div class="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
      <svg class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96" viewBox="0 0 400 400"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="footer-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#footer-grid)" />
      </svg>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-6xl mx-auto">

        <!-- Main Footer Content -->
        <div class="grid lg:grid-cols-4 gap-12 mb-12">

          <!-- Brand Column -->
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-3 mb-6">
              <TimeToValueLogo size="lg" variant="white" />
              <span class="text-2xl font-inter font-bold">Time To Value</span>
            </div>

            <p class="text-gray-300 font-opensans leading-relaxed mb-6 max-w-md">
              Helping David beat Goliath by leveraging AI. We provide the signal in the noise,
              focus on agents, and help you skate to where the puck is going.
            </p>

            <!-- Social Links -->
            <div class="flex space-x-4">
              <a href="https://www.linkedin.com/company/time-to-value/"
                class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors group">
                <svg class="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a href="https://www.youtube.com/@time2value"
                class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-coral transition-colors group">
                <svg class="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-inter font-semibold mb-6">Quick Links</h4>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/#about" class="text-gray-300 hover:text-white font-opensans transition-colors">
                  About
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/guides" class="text-gray-300 hover:text-white font-opensans transition-colors">
                  Guides
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog" class="text-gray-300 hover:text-white font-opensans transition-colors">
                  Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#services" class="text-gray-300 hover:text-white font-opensans transition-colors">
                  Services
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#contact" class="text-gray-300 hover:text-white font-opensans transition-colors">
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-lg font-inter font-semibold mb-6">Get in Touch</h4>
            <ul class="space-y-3">
              <li class="flex items-center text-gray-300 font-opensans">
                <svg class="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                  </path>
                </svg>
                hello@time2value.com
              </li>
              <li class="flex items-center text-gray-300 font-opensans">
                <svg class="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Columbus, OH
              </li>
            </ul>
          </div>

        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-white/10 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            <!-- Copyright -->
            <div class="text-gray-400 font-opensans text-sm">
              © {{ currentYear }} Time To Value. All rights reserved.
            </div>

            <!-- Tagline -->
            <div class="text-center">
              <div class="inline-flex items-center px-4 py-2 bg-white/5 rounded-full">
                <span class="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                <span class="text-gray-300 font-inter font-medium text-sm">
                  Helping David Beat Goliath by Leveraging AI
                </span>
              </div>
            </div>

            <!-- Legal Links -->
            <!-- <div class="flex space-x-6">
              <a href="#" class="text-gray-400 hover:text-white font-opensans text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" class="text-gray-400 hover:text-white font-opensans text-sm transition-colors">
                Terms of Service
              </a>
            </div> -->

          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
