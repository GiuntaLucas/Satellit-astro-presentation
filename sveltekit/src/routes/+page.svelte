<script>
  import Header from "../components/Header.svelte";
  import Special from "../components/Special.svelte";
  import Banner from "../components/Banner.svelte";
  import BusinessExplanation from "../components/BusinessExplanation.svelte";
  import Opportunities from "../components/Opportunities.svelte";
  import TalkHeader from "../components/TalkHeader.svelte";
  import LetsTalk from "../components/LetsTalk.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap&subset=latin,latin-ext"
    rel="stylesheet"
    type="text/css"
  />
  <title>Satellit - Sveltekit</title>
</svelte:head>

<Header />
<Special />
<Banner />
<BusinessExplanation />

<Opportunities />

<TalkHeader />
<LetsTalk />
