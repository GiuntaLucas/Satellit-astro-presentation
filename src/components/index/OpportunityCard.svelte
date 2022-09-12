<script>
  export let name;
</script>

<div class="card job-line-first">
  <div class="card-header" id="heading1">
    <a
      href="apply.html?jobId=eddef470-af6c-40dd-9aff-29ec8affa5e5"
      class="a-btn ltc-white">{name}</a
    >
    <a
      href="apply.html?jobId=eddef470-af6c-40dd-9aff-29ec8affa5e5"
      class="a-btn a-block link-right">Apply<br /></a
    >
  </div>
</div>

<style>
  a {
    color: white !important;
  }
  .ltc-white {
    flex-grow: 99;
    text-decoration: none;
  }
  .card-header {
    display: flex;
  }
  .job-line-first {
    border-style: solid;
    border-color: #ffffff !important;
    background-color: #000000;
    color: #ffffff !important;
    font-size: 18px;
    font-weight: 700;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 0px 0px 0px 0px;
    border-width: 1px 0px 1px 0px;
  }
</style>
