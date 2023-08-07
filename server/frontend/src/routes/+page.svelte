<svelte:head>
	<title>Invisible Interventions | SFU</title>
</svelte:head>

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
			class="mb-3 text-sm text-center font-semibold w-full rounded-lg py-4 px-5 text-red-800 bg-green-100 hover:bg-green-300 transition-all cursor-pointer"
			on:click={() => {
				window.open(
					'https://github.com/keeyank/Invisible-Interventions/raw/main/extensions/_zips/force-login.zip',
					'_self'
				);
			}}
		>
			Force Login Intervention
		</div>

		<div
			class="mb-3 text-sm text-center font-semibold w-full rounded-lg py-4 px-5 text-red-800 bg-green-100 hover:bg-green-300 transition-all cursor-pointer"
			on:click={() => {
				window.open(
					'https://github.com/keeyank/Invisible-Interventions/raw/main/extensions/_zips/gradual-grayscale.zip',
					'_self'
				);
			}}
		>
			Gradual Grayscale Intervention
		</div>

		<div
			class="mb-3 text-sm text-center font-semibold w-full rounded-lg py-4 px-5 text-red-800 bg-green-100 hover:bg-green-300 transition-all cursor-pointer"
			on:click={() => {
				window.open(
					'https://github.com/keeyank/Invisible-Interventions/raw/main/extensions/_zips/tap-to-scroll.zip',
					'_self'
				);
			}}
		>
			Tap To Scroll Intervention
		</div>

		<div
			class="mb-3 text-sm text-center font-semibold w-full rounded-lg py-4 px-5 text-red-800 bg-green-100 hover:bg-green-300 transition-all cursor-pointer"
			on:click={() => {
				window.open(
					'https://github.com/keeyank/Invisible-Interventions/raw/main/extensions/_zips/time-limit.zip',
					'_self'
				);
			}}
		>
			Time Limit Intervention
		</div>
	</div>
</div>
