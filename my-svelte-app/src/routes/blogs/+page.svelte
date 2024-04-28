<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blog page" />
</svelte:head>

<section>
	<h2>Blog</h2>
	<p>This is the blog page.</p>
	{#each data.blogList.contents as blog}
		<article>
			<a href="/blogs/blog/{blog.id}"><h2>{blog.title}</h2></a>
		</article>
	{/each}
</section>

<style>
	section {
		display: grid;
		gap: 1em;
		padding: 1em;
	}
</style>
