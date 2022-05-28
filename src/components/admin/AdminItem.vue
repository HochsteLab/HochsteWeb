<template>
  <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
    <div class="member">
      <div class="member-img">
        <img :src="icon" class="img-fluid" alt="">
        <div class="social">
          <slot name="social" />
        </div>
      </div>
      <div class="member-info">
        <h4>{{ name }}</h4>
        <span>{{ role }}</span>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberItem",
  props: {
    icon: String,
    name: String,
    role: String
  }
}
</script>

