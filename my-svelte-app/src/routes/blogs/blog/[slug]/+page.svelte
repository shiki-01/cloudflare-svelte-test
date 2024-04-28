<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<section>
  <h1>{data.detail.title}</h1>
  <div><span>{@html data.detail.content}</span></div>
</section>

<style lang="scss">
  section {
    padding: 1em 5em;

    h1 {
      font-family: "M PLUS 1p", sans-serif;
      font-weight: 100;
      margin: 1em 0;
      margin-bottom: 1.5em;
      background-color: #f3db00;
      padding: 0.5em 1em;
      color: #1f1f1f;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  :global(p) {
    line-height: 1.5em;
    margin: 2em 0;
  }

  :global(a) {
    color: #0070f3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  :global(img) {
    max-width: 50%;
    height: auto;
  }

  :global(h1) {
    font-size: 2.5em;
  }
  :global(h2) {
    margin: 1em 0;
    &::before {
      content: "#";
      margin-right: 0.5em;
    }
  }
  :global(h3) {
    &::before {
      content: "##";
      margin-right: 0.5em;
    }
  }

  :global(counter-style unordered-list) {
    system: cyclic;
    symbols: "-";
    suffix: " ";
  }

  :global(ul > li) {
    list-style-type: unordered-list;
  }

  :global(counter-style ordered-list) {
    system: cyclic;
    symbols: "1";
    suffix: ". ";
  }

  :global(ol > li) {
    list-style-type: ordered-list;
  }

  :global(ul),
  :global(ol) {
    list-style-position: inside;
  }

  :global(pre > code::before) {
    content: "```" attr(data-lang);
  }

  :global(pre > code::after) {
    content: "```";
  }

  :global(hr::after) {
    content: "* * *";
  }

  :global(hr) {
    border: none;
  }
</style>
