<template>
  <li>
    <div class="question" @click="expand=!expand; isActive=!isActive" :class="{ collapsed: isActive }">{{ question }}<i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
    <div v-if="expand" class="collapse show" data-bs-parent=".faq-list">
      <p>{{ answer }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "FAQItem",
  props: {
    question: String,
    answer: String
  },
  data () {
    return {
      isActive: true,
      expand: false
    }
  }
}
</script>

