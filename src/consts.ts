export const SITE_TITLE = 'Frontend Cozy Corner';
export const SITE_DESCRIPTION = 'Welcome to my website! I am Liza and I am software engineer. I write about frontend related topics and things I find interestings.';


export const tagSlug = (tag: string) => {
	return tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/ ^-|-$/g, '');
}