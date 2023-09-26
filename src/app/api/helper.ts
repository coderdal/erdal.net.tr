export function slugify(text: string): string {
    text = text.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ")
    .toLowerCase();

    text = text.replace(/^\s+|\s+$/gm,"");

    text = text.replace(/\s+/g, "-");
    return text;
}