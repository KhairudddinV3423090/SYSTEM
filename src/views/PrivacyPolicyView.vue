<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
const lastUpdateDate = '30 January 2022'
</script>

<template>
  <MainLayout>
    <div class="max-w-3xl mx-auto px-4 py-12">
      <!-- Header Section -->
      <header class="text-center mb-16">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p class="text-sm text-gray-500">Last Updated: {{ lastUpdateDate }}</p>
      </header>

      <!-- Main Content -->
      <main class="space-y-12">
        <!-- First Section -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">
            Lorem ipsum dolor sit amet
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
        </section>

        <!-- Second Section -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </h2>
          <div class="space-y-6">
            <p class="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec dui. Suspendisse nisl risus, at aliquam
              sem, id nulla urna neque. Et imperdiet elit laoreet. Vestibulum
              ante ipsum primis in. Neque egestas congue quisque egestas diam
              in. Sit amet tellus cras adipiscing enim eu turpis egestas. Id
              velit ut tortor pretium viverra.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec dui. Suspendisse nisl risus, at aliquam
              sem, id nulla urna neque. Et imperdiet elit laoreet. Vestibulum
              ante ipsum primis in. Neque egestas congue quisque egestas diam
              in. Sit amet tellus cras adipiscing enim eu turpis egestas. Id
              velit ut tortor pretium viverra suspendisse. Cursus turpis massa
              tincidunt dui ut ornare lectus sit amet.
            </p>
          </div>
        </section>
      </main>
    </div>
  </MainLayout>
</template>
