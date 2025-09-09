const LS_PREFIX = "her_";

function getLocal(key, fallback) {
    const raw = localStorage.getItem(LS_PREFIX + key);
    return raw ? JSON.parse(raw) : fallback;
}
function setLocal(key, val) {
    localStorage.setItem(LS_PREFIX + key, JSON.stringify(val));
}

function encodeShare(obj) {
    // kompakter, aber simpel: JSON -> URI -> Base64
    const txt = encodeURIComponent(JSON.stringify(obj));
    return btoa(txt).replace(/=+$/, ''); // kürzer ohne '='
}
function decodeShare(code) {
    const json = decodeURIComponent(atob(code));
    return JSON.parse(json);
}

export const storage = {
    // Shape
    empty() { return { gallery: [], todos: [], coupons: { available: [], used: [] } }; },

    async load() {
        return getLocal("data", this.empty());
    },

    async save(mutator) {
        const cur = await this.load();
        const next = mutator ? mutator(structuredClone(cur)) : cur;
        setLocal("data", next);
        return next;
    },

    // Geräteübergreifend per Code
    async export() {
        const data = await this.load();
        return encodeShare(data);
    },
    async import(code) {
        const data = decodeShare(code.trim());
        setLocal("data", data);
        return data;
    },

    // optional: alles löschen
    async clear() {
        setLocal("data", this.empty());
    }
};
