import * as fs from 'fs';
import { sync as globSync } from 'glob';
import { sync as mkdirpSync } from 'mkdirp';
import Translator from './lib/translator';

const MESSAGES_PATTERN = './messages/**/*.json';
const LANG_DIR = './i18n/';
const LANGS = [
    'en-US',
    'fr-FR',
    'zh-CN',
];

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
let defaultMessages = globSync(MESSAGES_PATTERN)
    .map((filename) => fs.readFileSync(filename, 'utf8'))
    .map((file) => JSON.parse(file))
    .reduce((collection, descriptors) => {
        descriptors.forEach(({id, defaultMessage}) => {
            if (collection.hasOwnProperty(id)) {
                throw new Error(`Duplicate message id: ${id}`);
            }

            collection[id] = defaultMessage;
        });

        return collection;
    }, {});

mkdirpSync(LANG_DIR);

// en-US.json is always created
fs.writeFileSync(LANG_DIR + 'en-US.json', JSON.stringify(defaultMessages, null, 2));

// For all other languages, merge existing translated messages and new ones
LANGS.map((lang) => {
    let messages = Object.assign({}, defaultMessages);
    let path = LANG_DIR + lang + '.json';

    if (fs.existsSync(path)) {
        let file = fs.readFileSync(path, 'utf8');
        let existingMessages = JSON.parse(file);

        Object.keys(messages).forEach((id) => {
            if (existingMessages.hasOwnProperty(id)) {
                messages[id] = existingMessages[id];
            }
        });
    }

    fs.writeFileSync(path, JSON.stringify(messages, null, 2));
});
