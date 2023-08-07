<script>
	import toast from 'svelte-french-toast';

	const downloadExtension = (name = 'force-login') => {
		window.open(
			`https://github.com/keeyank/Invisible-Interventions/raw/main/extensions/_zips/${name}.zip`,
			'_self'
		);

		toast.success(
			'Add the extension by tapping on the three vertical dots in the top-right corner to open the menu and selecting "Extensions".',
			{
				duration: 10000
			}
		);
	};
</script>

<svelte:head>
	<title>Invisible Interventions | SFU</title>
</svelte:head>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="mx-4 mb-20">
	<div class="">
		<div class="flex justify-center">
			<img src="/sfu.png" alt="sfu logo" />
		</div>
		<div class="text-xl text-gray-600 font-semibold">Download Extensions</div>
		<div class="mt-2 text-sm text-gray-600 break-words">
			Comparing Invisible Interventions with Empowering Interventions: How Can Reduced Visibility or
			Enhanced Agency allow Users to Take Control of their Social Media Usage?
		</div>
	</div>

	<hr class="my-6" />

	<div class="">
		<div
			class="mb-3 text-sm text-center font-semibold w-full rounded-lg py-4 px-5 text-green-800 bg-green-100 hover:bg-green-300 transition-all cursor-pointer"
			on:click={() => {
				downloadExtension('force-login');
			}}
		>
			Download Force Login Intervention
		</div>

		<div
			class="mb-3 text-sm text-center font-semibold w-full rounded-lg py-4 px-5 text-green-800 bg-green-100 hover:bg-green-300 transition-all cursor-pointer"
			on:click={() => {
				downloadExtension('gradual-grayscale');
			}}
		>
			Download Gradual Grayscale Intervention
		</div>

		<div
			class="mb-3 text-sm text-center font-semibold w-full rounded-lg py-4 px-5 text-green-800 bg-green-100 hover:bg-green-300 transition-all cursor-pointer"
			on:click={() => {
				downloadExtension('tap-to-scroll');
			}}
		>
			Download Tap To Scroll Intervention
		</div>

		<div
			class="mb-3 text-sm text-center font-semibold w-full rounded-lg py-4 px-5 text-green-800 bg-green-100 hover:bg-green-300 transition-all cursor-pointer"
			on:click={() => {
				downloadExtension('time-limit');
			}}
		>
			Download Time Limit Intervention
		</div>
	</div>
</div>
