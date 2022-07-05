<script setup>
import Admin from "@/components/admin/Admin.vue";
import AdminItem from '@/components/admin/AdminItem.vue';

import FAQ from "@/components/faq/FAQ.vue";
import FAQItem from "@/components/faq/FAQItem.vue";
</script>

<template>
  <section id="top" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>Welcome to <br> Hochste Networks!!</h1>
          <ul>
            <li><i class="ri-check-line"></i> Virtual Private Server</li>
            <li><i class="ri-check-line"></i> Infrastructure as a Service</li>
            <li><i class="ri-check-line"></i> Software as a Service</li>
          </ul>
          <div class="mt-3">
            <a href="#" class="btn-get-started">Register</a>
            <a href="#" class="btn-get-quote">Login</a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 top-img" style="padding-left: 120px">
          <img src="/img/TopImage.png" class="img-fluid" alt="">
        </div>
      </div>
    </div>

  </section>

  <main id="main">

    <!-- About -->
    <section id="about" class="about">
      <div class="container">

        <div class="row content">
          <div class="col-lg-6">
            <h2>最高のサーバーホスティング！</h2>
            <h3>当サービスでは、できるだけコストを削減し安価で高性能なサーバーの提供をできるように日々努力しています。</h3>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              当サービスの名称「Hochste」はドイツ語で「最高」という意味が込められた言葉です。お客様へ最高のサービスを提供することを根底に置き当サービスは開始しました。
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> MinecraftやWebなどの専用サーバー</li>
              <li><i class="ri-check-double-line"></i> 馬鹿にならない消費電力</li>
              <li><i class="ri-check-double-line"></i> 最大10Gbpsのネットワーク</li>
            </ul>
            <p class="fst-italic">
              サーバーの使用用途は様々であり、MinecraftなどのゲームサーバーからWebサイトまで多種多様なサービスを低コストで運営することができます。
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- Why US -->
    <section id="why-us" class="why-us">
      <div class="container">

        <div class="row">

          <div class="col-lg-4">
            <div class="box">
              <span>01</span>
              <h4>価格</h4>
              <p>サーバーの維持にかかる最低限の費用のみを利用者様から頂戴しております。</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box">
              <span>02</span>
              <h4>サーバー</h4>
              <p>企業で使用されていたサーバーを買い取り24時間365日稼働できる体制を整えております。</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box">
              <span>03</span>
              <h4>セキュリティ</h4>
              <p>4人のサーバーエンジニアにより高レベルのセキュリティを展開しております。</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Counts -->
    <section id="counts" class="counts section-bg">
      <div class="container">

        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="count-box">
              <i class="bi bi-coin"></i>
              <span class="purecounter">400</span>
              <p>最安値（円）</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div class="count-box">
              <i class="bi bi-server"></i>
              <span class="purecounter">4</span>
              <p>物理サーバー</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div class="count-box">
              <i class="bi bi-headset"></i>
              <span class="purecounter">100%</span>
              <p>満足度</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div class="count-box">
              <i class="bi bi-people"></i>
              <span class="purecounter">1</span>
              <p>スポンサー</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Service -->
    <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2>Services</h2>
          <p>当サービスでは非常に多くのサービスを取り扱っております。<br>初心者の方から上級者の方まで満足できるようなサービスを提供していきたいと考えております。</p>
        </div>

      </div>
    </section>

    <!-- Features -->
    <section id="features" class="features">
      <div class="container">

        <div class="row">
          <div class="col-lg-3 col-md-4">
            <div class="icon-box">
              <i class="ri-store-line" style="color: #ffbb2c;"></i>
              <h3><a href="">?????</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="ri-bar-chart-box-line" style="color: #5578ff;"></i>
              <h3><a href="">?????</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="ri-calendar-todo-line" style="color: #e80368;"></i>
              <h3><a href="">?????</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div class="icon-box">
              <i class="ri-paint-brush-line" style="color: #e361ff;"></i>
              <h3><a href="">?????</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-database-2-line" style="color: #47aeff;"></i>
              <h3><a href="">?????</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-gradienter-line" style="color: #ffa76e;"></i>
              <h3><a href="">?????</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-file-list-3-line" style="color: #11dbcf;"></i>
              <h3><a href="">?????</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-price-tag-2-line" style="color: #4233ff;"></i>
              <h3><a href="">?????</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-anchor-line" style="color: #b2904f;"></i>
              <h3><a href="">?????</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-disc-line" style="color: #b20969;"></i>
              <h3><a href="">?????</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-base-station-line" style="color: #ff5828;"></i>
              <h3><a href="">?????</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-fingerprint-line" style="color: #29cc61;"></i>
              <h3><a href="">?????</a></h3>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Admin -->
    <Admin>
      <AdminItem
        icon="/img/admin/Minidon.jpg"
        name="みにどん"
        role="Owner / Server Engineer"
        >
        <template #social>
          <a href="https://twitter.com/M1n1don" target="_blank"><i class="bi bi-twitter"></i></a>
          <a href="https://youtube.com/c/みにどん" target="_blank"><i class="bi bi-youtube"></i></a>
          <a href="https://discord.gg/B4SYTyW" target="_blank"><i class="bi bi-discord"></i></a>
        </template>
      </AdminItem>

      <AdminItem
        icon="/img/admin/Ak4h4n3.jpg"
        name="赤羽"
        role="Admin / Server Engineer"
        >
        <template #social>
          <a href="https://twitter.com/Ak4h4n3_G4san" target="_blank"><i class="bi bi-twitter"></i></a>
        </template>
      </AdminItem>

      <AdminItem
        icon="/img/admin/RunQ.jpg"
        name="るんく"
        role="Admin / Server Engineer"
        >
        <template #social>
          <a href="https://twitter.com/runq_jp" target="_blank"><i class="bi bi-twitter"></i></a>
        </template>
      </AdminItem>
    </Admin>

    <!-- FAQ -->
    <FAQ>
      <FAQItem
        question="赤羽さんをストーカーするのは犯罪ですか？"
        answer="結論、無罪。"
      />
    </FAQ>

    <!-- Contact -->
    <section id="contact" class="contact section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Contact</h2>
          <p>現在システムの都合により、サービスの購入やサポートはDiscordのチケットからのみとなっております。<br>ご不便をおかけしますがご理解の程よろしくお願い致します。</p>
        </div>

        <div class="row">

          <div class="col-lg-6">

            <div class="row">
              <div class="col-md-12">
                <div class="info-box">
                  <i class="bi bi-discord"></i>
                  <h3>Discord</h3>
                  <a href="https://discord.gg/Jstn8GW4yk" target="_blank">https://discord.gg/Jstn8GW4yk</a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4">
                  <i class="bx bx-envelope"></i>
                  <h3>Email</h3>
                  <p>contact@hochste.net<br><br></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4">
                  <i class="bi bi-headset"></i>
                  <h3>Support</h3>
                  <p>6:00 ~ 24:00（年末は除く）<br><br></p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <iframe src="https://discord.com/widget?id=962541100558610472&theme=dark" width="636" height="384" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>

        </div>

      </div>
    </section>

  </main>

  <!-- Back to top -->
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center" :class="{ 'active': scrollY > 100 }"><i class="bi bi-arrow-up-short"></i></a>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0
    }
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  },
  watch: {
    '$route': function (n, o) {
      if (n.hash.match(/^#/)) {
        document.getElementById(n.hash.replace(/^#/, '')).scrollIntoView()
      }
      console.log('new, old', [n.hash, o.hash])
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    
    if (this.$route.hash.match(/^#/)) {
      document.getElementById(this.$route.hash.replace(/^#/, '')).scrollIntoView()
    }
  }
}
</script>