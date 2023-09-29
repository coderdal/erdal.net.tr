import moment from "moment";

export function slugify(text: string): string {
    text = text.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ")
    .toLowerCase();

    text = text.replace(/^\s+|\s+$/gm,"");

    text = text.replace(/\s+/g, "-");

    const turkishCharsMap: Record<string, string> = {
      "Ğ":"G",
      "Ü":"U",
      "Ş":"S",
      "İ":"I",
      "Ö":"O",
      "Ç":"C",
      "ğ":"g",
      "ü":"u",
      "ş":"s",
      "ı":"i",
      "ö":"o",
      "ç":"c"
    };

    text = text.replace(/[ĞÜŞİÖÇğüşıöç]/g, (letter) => turkishCharsMap[letter]);

    return text;
}

export function formatDate(date: string, format: string): string {
    return moment(date).format(format);
}

export function groupBy(arr: Array<any>, property: string) {
  return arr.reduce(function (memo, x) {
    if (!memo[x[property]]) {
      memo[x[property]] = [];
    }
    memo[x[property]].push(x);
    return memo;
  }, {});
}