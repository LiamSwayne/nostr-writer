# Obsidian Nostr Writer
> Directly publish from Obsidian to Nostr 

## A Match Made..
**Obsidian** is an amazing markdown editor, word processor, note organiser, and idea synthesiser: the perfect tool for writers. 

**Nostr** represents the future of how we communicate and distribute the written word: decentralised, free, independent, incorruptable. 

They seem to me to be a match made in heaven...
[![Did We Just Become Best Friends?](./docs/stepbros.png)](https://www.youtube.com/watch?v=3-ZUDtaGf3I)

## For Writers
> This tool is low-friction..
1. Add your Nostr private key (once on set-up).
2. Write in Obsidian
3. Hit publish to Nostr, and that's it. 

## A Quiet Place
> Avoid the web browser and all it's distractions!

This tool is completely abstracted from Nostr, allowing you to stay focused - the plugin does not read Nostr messages or give you any view into the public space. It just publishes what you've written. Stay focused on your work and disconnected from the noise. 

<a href="https://www.buymeacoffee.com/jamesmagoo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

### Long-Form Content
On Nostr you can write messages specifically tagged as "long-form". This tool publishes messages of this kind. Long-form content aggregators and clients such as www.habla.news specifically channel these messages to readers. There'll be much more in the future.. 😉

### Short-Form Content
This tool focuses on publishing full Obsidian .md files in the long-form, however if you've got a short note to send out there - an idea or a quip - a short-form writer for the job is in the works. 

## Security Notice
This plugin stores your private key within your local Obsidian settings file, specifically in:
```
<Vault Directory>/.obsidian/plugins/obsidian-nostr-writer/data.json
```

It is not transmitted elsewhere, but its security is fundamentally tied to the security of your device and Obsidian files.

Please be aware that if an unauthorized person gains access to your device or your Obsidian files, they might be able to access your private key. The plugin obscures the key in its settings interface but this doesn't equate to strong encryption or secured storage.

Therefore, it's important to ensure the overall security of your device and your Obsidian files to keep your private key safe. 

> Remember, the security of your private key is your responsibility.