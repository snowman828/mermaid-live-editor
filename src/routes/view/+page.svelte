<script lang="ts">
  import View from '$lib/components/View.svelte';
  import { initHandler } from '$lib/util/util';
  import { onMount } from 'svelte';
  onMount(initHandler);
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<View />
