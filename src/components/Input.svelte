<script>
    export let value = "";
    export let placeholder = "";
    export let required = false;
    export let type = "text";

    /**
     * @param {HTMLInputElement} node
     */
    function typeAction(node) {
        node.type = type;
    }

  </script>

  <input
    class="w-full border-2 rounded-xl ring-1 my-2 py-2 px-4 outline-sky-500"
    bind:value={value}
    use:typeAction
    placeholder={placeholder}
    required={required}
  />
