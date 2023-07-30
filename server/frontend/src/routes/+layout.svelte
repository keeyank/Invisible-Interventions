<script>
	import '../tailwind.css';
	import '../app.css';

	import { Toaster } from 'svelte-french-toast';
</script>

<div class="flex justify-center">
	<div class="min-h-screen w-screen max-w-lg">
		<slot />
	</div>
</div>
<Toaster />
