<script lang="ts">
	import { onMount } from 'svelte';

	export const calendarsIds = ['c_1lev6oauglb33gst7i85vqbb80@group.calendar.google.com'];

	import.meta.env.BASE_URL;
	const calendarApiUrl = (id: string) =>
		`https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${import.meta.env.PUBLIC_GOOGLE_API_KEY}`;

	onMount(async () => {
		for (const calendarId of calendarsIds) {
			const response = await fetch(calendarApiUrl(calendarId));
		}
	});
</script>
