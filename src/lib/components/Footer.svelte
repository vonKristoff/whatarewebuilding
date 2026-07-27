<script>
    import Icon from "./Icon.svelte";
</script>
<footer class="bg-amber-300 px-8 py-16">
	<div class="flex items-center justify-between gap-2">
		<Icon src="shapes" ctx="hand-1" size="5em" />
		<span class="">&copy; {new Date().getFullYear()} whatarewebuilding. All rights reserved.</span>
		<aside class="text-text-200 text-wash-300 flex flex-col justify-end text-right text-sm">
			<span>Built by humans</span>
			<a href="https://threejjjs.xyz">
				<h5 class="m-0 text-right font-tertiary text-xl md:text-3xl">
					three<span class="opacity-55">jjj</span>s
					<br />
				</h5>
			</a>
			<span class="text-xs">Interactive Tech</span>
		</aside>
	</div>
</footer>