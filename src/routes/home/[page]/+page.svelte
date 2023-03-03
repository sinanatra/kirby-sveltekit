<script>
	export let data;
	console.log(data);
</script>

<div>
	{#if data.posts.status == "error"}
		<p>404</p>
	{:else}
		<p>{data.posts.result.title}</p>
	{/if}
</div>
