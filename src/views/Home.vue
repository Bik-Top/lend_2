<template>
    <div class="section" id="Home">

        <div class="wrap">
            <div class="box">
                <!-- SECTION HOME CONTENT -->
                <h1>The online search is now <br><strong>a treasure hunt</strong></h1>
                <h3 font color = "#ff6633"> <strong>300,000 listings and counting
                </strong>- is your biz here?.</h3>
                <!---->
                <form role="form" method="post" id="contact-form">
                    <input type="text" placeholder="Business" name="Business" id="business" required>


                    <div id="success"></div>
                </form>

            </div>
            <!-- END SECTION HOME CONTENT -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.fade = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>

</style>
