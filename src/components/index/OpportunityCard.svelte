<script>
  export let name;
  export let id;
</script>

<div class="card job-line-first">
  <div class="card-header" id="heading1">
    <a
      href={`/apply/${id}`}
      class="a-btn ltc-white">{name}</a
    >
    <a
    href={`/apply/${id}`}
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
