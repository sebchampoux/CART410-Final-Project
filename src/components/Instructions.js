
const Instructions = () => (
	<>
		<h3>Disabilities simulator</h3>
		<p>The <b>disabilities simulator</b> is accessible with the button at the top-right of your screen. It enables you to simulate the experience of:</p>
		<ul>
			<li>Blind users;</li>
			<li>Color-blind users;</li>
			<li>Users with motor disabilities.</li>
		</ul>
		<p>Note that this window is always accessible "normally" even if one or multiple disabilities are enabled.</p>
		<h3>Navigation</h3>
		<p>Here is how to navigate a website with your keyboard:</p>
		<ul>
			<li><b>Tab</b>: Go to the next interactive element;</li>
			<li><b>Shift + Tab</b>: Go to the previous interactive element;</li>
			<li><b>Space/Enter</b>: Interact with the current interactive element.</li>
		</ul>
		<p>The "tab" component uses additional keys, in accordance with the <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel" target="_blank" rel="noreferrer">W3C's ARIA authoring practices</a>. These are:</p>
		<ul>
			<li><b>Left/right arrows</b>: Navigate between the tabs;</li>
			<li><b>Home</b>: Open the first tab;</li>
			<li><b>ESC</b>: Open the last tab.</li>
		</ul>
		<p>The "modal" component uses one additional key, in accordance with the <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal" target="_blank" rel="noreferrer">W3C's authoring practices</a>.<br />Pressing <b>ESC</b> will close the modal.</p>
		<h3>Screenreader</h3>
		<p>The screenreader is an OS feature, enabling it depends on your operating system. See:</p>
		<ul>
			<li><a href="https://support.microsoft.com/en-us/windows/start-or-stop-narrator-99c201e7-fa7a-9b0b-f947-dee965c1375b" target="_blank" rel="noreferrer">Turning on your screenreader on Windows</a></li>
			<li><a href="https://www.imore.com/how-enable-voiceover-mac" target="_blank" rel="noreferrer">Turning on your screenreader on MacOS</a></li>
		</ul>
	</>
);
export default Instructions;
