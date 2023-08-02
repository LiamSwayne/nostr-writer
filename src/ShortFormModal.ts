import {
	App,
	ButtonComponent,
	Modal,
	Notice,
	TextAreaComponent,
} from "obsidian";
import NostrService from "./nostr/NostrService";

export default class ShortFormModal extends Modal {
	constructor(app: App, private nostrService: NostrService) {
		super(app);
	}

	async onOpen() {
		let { contentEl } = this;
		contentEl.createEl("h2", { text: `Write A Short Note` });
		let summaryText = new TextAreaComponent(contentEl)
			.setPlaceholder("Write a Nostr message here...")
			.setValue("");

		contentEl.createEl("p", {
			text: `Are you sure you want to send this message to Nostr?`,
		});

		let publishButton = new ButtonComponent(contentEl)
			.setButtonText("Confirm and Send")
			.setCta()
			.onClick(async () => {
				// Disable the button and change the text to show a loading state
				if (summaryText.getValue().length > 1) {
					publishButton.setButtonText("Sending...").setDisabled(true);
					setTimeout(async () => {
						const summary = summaryText.getValue();
						const success =
							await this.nostrService.publishShortFormNote(
								summary
							);
						if (success) {
							new Notice(`Successfully sent note to Nostr.`);
						} else {
							new Notice(`Failed to send note to Nostr.`);
						}

						// Change the button text back and enable it
						publishButton
							.setButtonText("Confirm and Publish")
							.setDisabled(false);

						this.close();
					}, 3000);
				} else {
					new Notice(`Please enter text to publish to Nostr`);
				}
			});

		contentEl.classList.add("short-form-modal-content");
		publishButton.buttonEl.classList.add("short-form-modal-button");
		summaryText.inputEl.classList.add("short-form-modal-input");
	}
}
