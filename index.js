const zodiacDescriptions = {
  Aries: "Aries is known for its fiery enthusiasm, confidence, and leadership qualities. They are adventurous and passionate, often taking initiative and pursuing new challenges.",
  Taurus: "Taurus values stability, comfort, and reliability. They are known for their practical approach to life, loyalty, and appreciation for the finer things.",
  Gemini: "Gemini is characterized by their adaptability, curiosity, and sociability. They are versatile and love to explore new ideas and experiences.",
  Cancer: "Cancer is known for its emotional depth, intuition, and nurturing nature. They are protective of their loved ones and find comfort in home and family.",
  Leo: "Leo is associated with confidence, creativity, and a love for the spotlight. They are generous and enjoy leading and inspiring others.",
  Virgo: "Virgo is known for its attention to detail, practicality, and analytical nature. They are hardworking and strive for perfection in their endeavors.",
  Libra: "Libra values balance, harmony, and fairness. They are known for their diplomatic skills and desire for beauty and meaningful relationships.",
  Scorpio: "Scorpio is characterized by its intensity, passion, and determination. They are known for their depth of emotion and powerful presence.",
  Sagittarius: "Sagittarius is known for its adventurous spirit, optimism, and love for freedom. They are philosophical and enjoy exploring new horizons.",
  Capricorn: "Capricorn values discipline, responsibility, and ambition. They are practical and determined, often focused on achieving their long-term goals.",
  Aquarius: "Aquarius is known for its originality, humanitarianism, and innovative thinking. They are forward-thinking and value individuality and social progress.",
  Pisces: "Pisces is characterized by its empathy, creativity, and intuitive nature. They are compassionate and often have a strong connection to their inner world."
};

function isValidDate(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(dateString);
}

function calculateAge(birthDate) {
  if (!isValidDate(birthDate)) {
    throw new Error("Invalid date format. Please use YYYY-MM-DD.");
  }

  const today = new Date();
  const birth = new Date(birthDate);

  if (birth > today) {
    throw new Error("Birth date cannot be in the future.");
  }

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();
  let hours = today.getHours() - birth.getHours();
  let minutes = today.getMinutes() - birth.getMinutes();

  if (minutes < 0) {
    hours -= 1;
    minutes += 60;
  }

  if (hours < 0) {
    days -= 1;
    hours += 24;
  }

  if (days < 0) {
    months -= 1;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const zodiacSign = getZodiacSign(birth.getDate(), birth.getMonth() + 1);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    nextBirthday: calculateNextBirthday(birthDate),
    zodiacSign,
    zodiacDescription: zodiacDescriptions[zodiacSign],
    isLeapYear: isLeapYear(birth.getFullYear()),
  };
}

function calculateNextBirthday(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());

  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diff = nextBirthday - today;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes };
}

function getZodiacSign(day, month) {
  const signs = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
    "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
  ];

  const lastDays = [19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];

  return day > lastDays[month - 1] ? signs[month] : signs[month - 1];
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
module.exports = { calculateAge };
      
