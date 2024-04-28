<script lang="ts">

</script>

<header>
    <h1>My Svelte App</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/blogs">Blog</a>
    </nav>
</header>

<style lang="scss">
    header {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        justify-content: space-between;
        padding: 1em;
        background-color: #333;
        color: white;
    }

    nav {
        display: grid;
        grid-auto-flow: column;
        gap: 1em;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>