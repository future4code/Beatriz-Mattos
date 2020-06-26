"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';
function createNews(title, content, date) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios_1.default.put(`${baseUrl}/news`, {
            title,
            content,
            date
        });
    });
}
const test = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield createNews("Yog-Sothoth se aproxima da Terra", "Y'AI'NG'NGAH! Abra a janela e ouça os primeiros sussurros.", 1593127559000);
        const returnAllNews = yield axios_1.default.get(`${baseUrl}/news/all`);
        console.log(returnAllNews);
    }
    catch (err) {
        console.log(err);
    }
});
test();
