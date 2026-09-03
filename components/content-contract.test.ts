import { describe, it, expect } from "vitest";
import {
  hero,
  evening,
  whyHome,
  gallery,
  reviews,
  faq,
  bookingCta,
  contacts,
  footer,
} from "@/data/content";
import { siteConfig } from "@/config/site";

function norm(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

describe("Content contract — Hero", () => {
  it("has full H1", () => {
    expect(hero.h1).toBe("ВЕДУЩИЙ ДОМ СПОРТИВНОГО ПОКЕРА В МОСКВЕ");
  });
  it("has subtitle", () => {
    expect(hero.subtitle).toBe("Покерные вечера на Дизайн-заводе «Флакон»");
  });
  it("has body paragraph", () => {
    expect(norm(hero.body)).toContain("Собственный дом на два этажа");
  });
  it("has 5 facts", () => {
    expect(hero.facts).toHaveLength(5);
    expect(hero.facts).toContain("Не на деньги");
    expect(hero.facts).toContain("Участие 1000 ₽");
    expect(hero.facts).toContain("5 минут пешком от м. Дмитровская");
    expect(hero.facts).toContain("Парковка 200 ₽/час");
    expect(hero.facts).toContain("Свой бар и кухня");
  });
});

describe("Content contract — Evening", () => {
  it("has 5 steps", () => {
    expect(evening.steps).toHaveLength(5);
  });
  it("has exact step titles", () => {
    expect(evening.steps[0].title).toBe("За час до турнира – разбор правил");
    expect(evening.steps[1].title).toBe("После 19:00 – садимся играть");
    expect(evening.steps[2].title).toBe("Весь вечер – кухня и бар рядом");
    expect(evening.steps[3].title).toBe("Вылет из турнира ещё не заканчивает вечер");
    expect(evening.steps[4].title).toBe("К закрытию – новые контакты");
  });
  it("has full step body texts", () => {
    evening.steps.forEach((step) => {
      expect(step.body.length).toBeGreaterThan(40);
    });
    expect(norm(evening.steps[0].body)).toContain("флеш старше стрита");
    expect(norm(evening.steps[1].body)).toContain("техасский холдем");
    expect(norm(evening.steps[2].body)).toContain("Тарелки на сукно");
    expect(norm(evening.steps[3].body)).toContain("Проигранная раздача");
    expect(norm(evening.steps[4].body)).toContain("новыми номерами в телефоне");
  });
});

describe("Content contract — WhyHome", () => {
  it("has 6 features", () => {
    expect(whyHome.features).toHaveLength(6);
  });
  it("has exact feature titles", () => {
    const titles = whyHome.features.map((f) => f.title);
    expect(titles).toEqual([
      "Свой дом на два этажа",
      "Территория Дизайн-завода «Флакон»",
      "5 минут пешком от «Дмитровской»",
      "Парковка на любой вкус",
      "Кухня, бар и кальян",
      "Команда, которую помнят по именам",
    ]);
  });
  it("has full feature body texts", () => {
    expect(norm(whyHome.features[0].body)).toContain("Девять столов");
    expect(norm(whyHome.features[3].body)).toContain("200 ₽/час");
    expect(norm(whyHome.features[5].body)).toContain("поимённо");
  });
});

describe("Content contract — Reviews", () => {
  it("has 6 reviews", () => {
    expect(reviews.items).toHaveLength(6);
  });
  it("has exact authors", () => {
    const authors = reviews.items.map((r) => r.author);
    expect(authors).toEqual([
      "вика беброва",
      "Катерина",
      "Елизавета Решетникова",
      "Ilya Khaushka",
      "Игорь Крупейченко",
      "nastya",
    ]);
  });
  it("has full review texts", () => {
    expect(norm(reviews.items[0].text)).toContain("Лучший покерный клуб");
    expect(norm(reviews.items[1].text)).toContain("отдельный лайк за столики");
    expect(norm(reviews.items[2].text)).toContain("большая редкость");
    expect(norm(reviews.items[3].text)).toContain("интерьер необычный");
    expect(norm(reviews.items[4].text)).toContain("лучший вариант отдыха");
    expect(norm(reviews.items[5].text)).toContain("определённо лучший");
  });
});

describe("Content contract — FAQ", () => {
  it("has 8 questions", () => {
    expect(faq.items).toHaveLength(8);
  });
  it("has exact questions", () => {
    expect(faq.items[0].question).toBe("Это законно?");
    expect(faq.items[1].question).toBe("Сколько стоит участие?");
    expect(faq.items[2].question).toBe("Когда вы играете?");
    expect(faq.items[3].question).toBe("Во что играем?");
    expect(faq.items[4].question).toBe("Я никогда не играл в покер. Меня пустят?");
    expect(faq.items[5].question).toBe("Можно прийти одному?");
    expect(faq.items[6].question).toBe("Где оставить машину?");
    expect(faq.items[7].question).toBe("Как записаться?");
  });
  it("has full answers", () => {
    expect(norm(faq.items[0].answer)).toContain("турнирные фишки");
    expect(norm(faq.items[1].answer)).toContain("1000 ₽ за игру");
    expect(norm(faq.items[7].answer)).toContain("Telegram-бот");
  });
});

describe("Content contract — Booking CTA", () => {
  it("has heading", () => {
    expect(norm(bookingCta.heading)).toContain("Забронируйте место на ближайшую игру");
  });
  it("has full body", () => {
    expect(norm(bookingCta.body)).toContain("Посадка часто заполняется");
    expect(norm(bookingCta.body)).toContain("Ждём вас за столом!");
  });
});

describe("Content contract — Contacts", () => {
  it("has address", () => {
    expect(norm(contacts.address)).toContain("Большая Новодмитровская улица, 36с13");
  });
  it("has metro", () => {
    expect(contacts.metro).toContain("Дмитровская");
  });
  it("has parking", () => {
    expect(contacts.parking).toContain("200 ₽/час");
  });
  it("has hours", () => {
    expect(contacts.hours).toContain("19:00");
    expect(contacts.hours).toContain("18:00");
  });
  it("has 1000 ₽ price in FAQ", () => {
    expect(norm(faq.items[1].answer)).toContain("1000 ₽");
  });
});

describe("Content contract — Links", () => {
  it("bookingUrl is magnum_app_bot", () => {
    expect(siteConfig.bookingUrl).toBe("https://t.me/magnum_app_bot");
  });
  it("telegram is magnum_poker", () => {
    expect(siteConfig.telegram).toBe("https://t.me/magnum_poker");
  });
  it("instagram is correct", () => {
    expect(siteConfig.instagram).toContain("magnum_poker_moscow");
  });
  it("reviewsUrl is correct", () => {
    expect(siteConfig.reviewsUrl).toContain("yandex.ru/maps");
  });
});

describe("Content contract — Forbidden legacy texts", () => {
  const allTexts = [
    hero.h1,
    hero.subtitle,
    hero.body,
    ...hero.facts,
    evening.heading,
    evening.lead,
    ...evening.steps.map((s) => s.title),
    ...evening.steps.map((s) => s.body),
    whyHome.heading,
    whyHome.lead,
    ...whyHome.features.map((f) => f.title),
    ...whyHome.features.map((f) => f.body),
    ...reviews.items.map((r) => r.text),
    ...faq.items.map((q) => q.question),
    ...faq.items.map((q) => q.answer),
    bookingCta.heading,
    bookingCta.body,
    contacts.heading,
    contacts.lead,
    contacts.address,
    footer.tagline,
  ].join(" ");

  it("no ТВОЙ ХОД", () => {
    expect(allTexts).not.toContain("ТВОЙ ХОД");
  });
  it("no ФОРМАТ 01", () => {
    expect(allTexts).not.toContain("ФОРМАТ 01");
  });
  it("no placeholder text", () => {
    expect(allTexts).not.toContain("Описание будет добавлено после согласования");
  });
});

describe("Content contract — Footer", () => {
  it("has exact tagline", () => {
    expect(footer.tagline).toBe(
      "MAGNUM · Ведущий дом спортивного покера в Москве · Дизайн-завод «Флакон»"
    );
  });
});
