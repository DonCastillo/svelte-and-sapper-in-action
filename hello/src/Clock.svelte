<script>
	export let color = 'blue';
	let hhmmss = '';
	setInterval(() => {
		hhmmss = new Date().toLocaleTimeString();
	}, 1000);
</script>

<div>
	I will be a clock.
</div>
<span style="color: {color}">{hhmmss}</span>
