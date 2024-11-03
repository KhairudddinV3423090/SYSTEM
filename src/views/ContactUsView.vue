<script setup lang="ts">
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'

// Data Formulir
const form = ref({
  name: '',
  email: '',
  province: '',
  city: '',
  message: '',
})

const provinces = ref(['Province 1', 'Province 2', 'Province 3']) // Sesuaikan dengan data sebenarnya
const cities = ref(['City 1', 'City 2', 'City 3']) // Sesuaikan dengan data sebenarnya
const isSubmitted = ref(false)

// Fungsi untuk Submit Formulir
function submitForm() {
  // Tambahkan logika validasi jika diperlukan
  console.log('Form Submitted:', form.value)
  isSubmitted.value = true

  // Reset form setelah submit
  form.value = {
    name: '',
    email: '',
    province: '',
    city: '',
    message: '',
  }

  // Tampilkan pesan sukses
  setTimeout(() => {
    isSubmitted.value = false
  }, 3000)
}
</script>

<template>
  <MainLayout>
    <main class="w-full h-full overflow-x-hidden">
      <!-- Bagian Judul dan Informasi Kontak -->
      <section class="px-20 pt-5 flex justify-center items-center">
        <div class="flex flex-col items-center gap-4 pt-12 px-32 text-center">
          <h1 class="text-gray-900 text-2xl font-bold uppercase">
            Contact Us
          </h1>
          <h3 class="text-gray-800 text-4xl font-bold leading-tight tracking-tight">
            Let’s Start a Conversation
          </h3>
          <p class="text-gray-500 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
        </div>
      </section>

      <!-- Bagian Informasi dan Form -->
      <section class="bg-white px-20 py-10 flex justify-center">
        <div class="contact-container flex flex-col gap-8 w-full max-w-2xl">
          <!-- Informasi Kontak -->
          <div class="bg-yellow-300 p-8 flex justify-between text-left text-gray-900">
            <div>
              <p class="text-lg font-semibold">Working hours</p>
              <hr class="my-2 border-gray-600" />
              <p class="font-bold mt-2">Monday To Friday</p>
              <p>9:00 AM to 8:00 PM</p>
              <p class="text-gray-600">Our Support Team is available 24/7</p>
            </div>
            <div>
              <p class="text-lg font-semibold">Contact Us</p>
              <hr class="my-2 border-gray-600" />
              <p class="font-bold mt-2">020 7993 2905</p>
              <p><a href="mailto:hello@finsweet.com" class="text-blue-700">hello@finsweet.com</a></p>
            </div>
          </div>

          <!-- Formulir Kontak -->
          <form @submit.prevent="submitForm" class="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              v-model="form.name"
              class="border p-4"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              v-model="form.email"
              class="border p-4"
              required
            />

            <div class="flex gap-4">
              <select
                v-model="form.province"
                class="border p-4 flex-1"
                required
              >
                <option value="" disabled selected>Province</option>
                <option v-for="province in provinces" :key="province">
                  {{ province }}
                </option>
              </select>

              <select v-model="form.city" class="border p-4 flex-1" required>
                <option value="" disabled selected>City</option>
                <option v-for="city in cities" :key="city">{{ city }}</option>
              </select>
            </div>

            <textarea
              v-model="form.message"
              placeholder="Message"
              rows="4"
              class="border p-4"
              required
            ></textarea>
            <button type="submit" class="bg-blue-600 text-white py-4 px-6 font-semibold hover:bg-blue-700">
              Send Message
            </button>
          </form>

          <div v-if="isSubmitted" class="p-4 text-center bg-green-500 text-white font-semibold rounded">
            <p>Thank you! Your message has been sent.</p>
          </div>
        </div>
      </section>
    </main>
  </MainLayout>
</template>
