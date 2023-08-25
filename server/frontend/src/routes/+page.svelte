<script>
	import { ENDPOINT } from '$lib/constants';
	import toast from 'svelte-french-toast';

	const interventions = ['force-login', 'gradual-grayscale', 'time-limit', 'tap-to-scroll'];
	let selectedIntervention = '';
	let submitted = false;

	let formData = {
		email: ''
	};

	const downloadExtension = (name = 'force-login') => {
		window.open(
			`https://github.com/keeyank/Invisible-Interventions/raw/main/extensions/_crx/${name}.crx`,
			'_self'
		);

		toast.success(
			'Add the extension by tapping on the three vertical dots in the top-right corner to open the menu and selecting "Extensions".',
			{
				duration: 10000
			}
		);
	};

	const getRandomInt = (max) => {
		return Math.floor(Math.random() * max);
	};

	const submitForm = async () => {
		if (formData.email !== '') {
			const res = await fetch(`${ENDPOINT}/tracking/users/signup`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email: formData.email })
			})
				.then(async (res) => {
					if (!res.ok) throw await res.json();
					return await res.json();
				})
				.catch((err) => {
					console.log(err);
					toast.error(err.detail);
					return null;
				});

			if (res && res.id) {
				// 1,2,3,4
				submitted = true;
				selectedIntervention = interventions[res.id % 4];
			}
		} else {
			toast.error('Please complete all required form inputs.');
		}
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

	{#if submitted}
		<div class="text-center text-gray-700 text-2xl font-semibold">
			Thanks for signing up!<br />

			<div class="">
				You've been assigned with the '{selectedIntervention}' intervention
			</div>
			<br />
			<div
				class="my-3 text-sm text-center font-semibold w-full rounded-lg py-4 px-5 text-green-800 bg-green-100 hover:bg-green-300 transition-all cursor-pointer"
				on:click={() => {
					downloadExtension(selectedIntervention);
				}}
			>
				Download {selectedIntervention} Intervention
			</div>
		</div>
	{:else}
		<form on:submit={submitForm}>
			<div class=" my-6">
				<label for="email" class="block mb-2 text-sm text-gray-900">Participant Email</label>
				<input
					type="email"
					id="email"
					bind:value={formData.email}
					class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 disabled:text-gray-500 disabled:bg-gray-200 block w-full p-3"
					placeholder="Your email address"
					required
					autocomplete="email"
				/>
				<div class="mt-2 text-xs text-gray-500 text-right">
					<span>REQUIRED</span>
				</div>
			</div>

			<div class="flex justify-end my-6">
				<div>
					<button
						class="flex text-sm w-full font-normal rounded-lg py-1.5 px-3 bg-blue-500 hover:bg-blue-600 text-white transition-all cursor-pointer"
						type="submit"
					>
						<div class="">Submit</div>

						<div class="my-auto ml-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-4 h-4"
							>
								<path
									d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"
								/>
							</svg>
						</div>
					</button>

					<!-- <button
				type="submit"
				class="mt-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
				>Submit</button
			> -->
				</div>
			</div>
		</form>

		<!-- <div class="">
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
	</div> -->
	{/if}
</div>
