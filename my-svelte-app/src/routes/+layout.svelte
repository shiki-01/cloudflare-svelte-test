<script lang="ts">
	import Header from "$lib/compo/Header.svelte";
	import Footer from "$lib/compo/Footer.svelte";
</script>

<main>
	<Header />
	<slot></slot>
	<Footer />
</main>

<style lang="scss">
	main {
		display: grid;
		align-items: center;
		justify-content: center;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		height: 100vh;
		min-height: 100vh;
		width: 100%;
		font-size: 1.5em;
	}
</style>
