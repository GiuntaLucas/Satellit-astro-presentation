<script>
    import { onMount } from "svelte";
  
    let show = false;
  
    onMount(() => {
      window.onscroll = () => {
        show = window.scrollY > 0;
      };
    });
  
    const handleAnchorClick = (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  </script>
  
  <span class="scroll-top" class:display={show === true} on:click={handleAnchorClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 32 32"
      ><path class="scroll-to-top-btn-icon" d="M30,22.656l-14-13-14,13" /></svg
    >
  </span>
  
  <style>
    .scroll-top {
      width: 36px;
      height: 36px;
      padding: 5px;
      position: fixed;
      bottom: 20px;
      right: 20px;
      opacity: 0;
      z-index: 999;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      color: #fff;
      background: rgba(0, 0, 0, 0.3);
    }
    .display {
      opacity: 1;
    }
    svg {
      fill: none;
      stroke: #fff;
      stroke-width: 2px;
      fill-rule: evenodd;
      stroke-linecap: round;
    }
  </style>
  