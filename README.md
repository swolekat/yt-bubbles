# yt-bubbles
A fork of Zaytri's Chat Bubbles SE widget (https://streamelements.com/dashboard/overlays/share/60d90ef30fcb3e75ea529f37) with YouTube support!

Install Chat Bubbles as normal, overwrite the CSS and JS with these scripts, then customize as needed. Enjoy!

### Customizations
Chat user badges - Subscriber (channel membership), verified, channel mod, and broadcaster. Upload your badges as StreamElements assets for best results (you can right click>copy image URL from the SE assets browser!)
Membership color - Border color for new member ("User became a member!") messages.
Tier to Color Map - Custom border colors for Super Chat tiers.
Channel emotes - Makes your custom emoji actually work!!

### Emoji instructions
1. Upload your emoji on YouTube, save and publish.
2. Reopen the emoji screen (Earn>Customize default perks>Emoji), and right click>open your emoji's image(s) to new tab(s). Your emoji's image ID is the long string of random characters after "googleusercontent.com/".
3. Enter the emoji's name (including the family name, if used) in the JS. Be sure to include an underscore in front. (No idea why, it just needs it.)
4. Paste the emoji's corresponding image ID in after its name. Follow the syntax EXACTLY or the code will break.
5. (Optional) To test your emoji, scroll waaaay down to the bottom of the JS and add your emoji to a new test message.
