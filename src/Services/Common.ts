// Utility Functions with Full TypeScript Typings

export type ErrorRef = { value: string };
export type FlagRef = { value: number };

// Scroll to top or specific position smoothly
export function scrollToPosition(position = 0, behavior: ScrollBehavior = "smooth"): void {
  const scrollableDiv = document.querySelector<HTMLElement>(".scrollable-content");
  if (scrollableDiv) {
    scrollableDiv.scrollTo({ top: position, behavior });
  } else {
    window.scrollTo({ top: position, behavior });
  }
}

// Remove "UserCode" query param from URL
export function removeUserCodeFromUrl(): void {
  const url = new URL(window.location.href);
  if (url.searchParams.has("UserCode")) {
    url.searchParams.delete("UserCode");
    window.history.replaceState({}, "", url.toString());
  }
}

// ================== STRING VALIDATION ==================

export function strCheck(
  varString: string | null | undefined,
  errMessageObj: ErrorRef,
  errFlagObj: FlagRef,
  message: string
): number {
  const value = (varString ?? "").toString().trim();
  if (value === "" || value === "0") {
    errMessageObj.value =
      errFlagObj.value === 1 ? `${errMessageObj.value}, ${message}` : message;
    errFlagObj.value = 1;
    return 1;
  }
  return 0;
}

export function strCheckWithZoro(
  varString: string | null | undefined,
  errMessageObj: ErrorRef,
  errFlagObj: FlagRef,
  message: string,
  zeroCheck: boolean
): number {
  const trimmed = (varString || "").trim().toLowerCase();

  const isNullOrEmpty = !varString || trimmed === "";
  const isZero = trimmed === "0" && zeroCheck;
  const hasScriptTags =
    trimmed.includes("<script") || trimmed.includes("script>") || trimmed.includes("alert(");

  if (isNullOrEmpty || isZero || hasScriptTags) {
    errMessageObj.value =
      errFlagObj.value === 1 ? `${errMessageObj.value}, ${message}` : message;
    errFlagObj.value = 1;
    return 1;
  }

  errFlagObj.value = 0;
  return 0;
}

export function simpleStrCheck(varString: string | null | undefined): number {
  const trimmed = (varString || "").trim();
  return trimmed.length > 0 ? 1 : 0;
}

export function specialCharCheck(
  varString: string | null | undefined,
  errMsgObj: ErrorRef,
  errFlagObj: FlagRef,
  message: string,
  allowed = false
): number {
  const value = (varString || "").trim();
  if (!value) {
    errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${message}` : message;
    errFlagObj.value = 1;
    return 1;
  }

  if (!allowed && /[^a-zA-Z0-9 ]/.test(value)) {
    errMsgObj.value = errFlagObj.value
      ? `${errMsgObj.value}, ${message} (should not contain special characters)`
      : `${message} (should not contain special characters)`;
    errFlagObj.value = 1;
    return 1;
  }

  return 0;
}

export function empNameValidationCheck(
  varString: string,
  errMsgObj: ErrorRef,
  errFlagObj: FlagRef,
  message: string
): number {
  const specialChars = "`[]^~\\|!#$%&/()=?»«@£§€{}-;'<>_,:\"\"*+1234567890.";
  if (varString !== "") {
    for (const char of specialChars) {
      if (varString.includes(char) && char !== " ") {
        const errorMessage = `${message} (should not contain special characters)`;
        errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${errorMessage}` : errorMessage;
        errFlagObj.value = 1;
        return 0;
      }
    }
  }
  return 1;
}

// ================== DATE VALIDATION ==================

function parseDDMMYYYY(dateStr: string): Date | null {
  const parts = dateStr?.split("/") ?? [];
  if (parts.length === 3) {
    const [day, month, year] = parts.map(Number);
    const parsed = new Date(year, month - 1, day);
    return isNaN(parsed.getTime()) ? null : parsed;
  }
  return null;
}

function isValidDate(date: unknown): date is Date {
  return date instanceof Date && !isNaN(date.getTime());
}

export function parseAnyDate(dateInput: string | Date | null | undefined): Date | null {
  if (!dateInput) return null;

  if (dateInput instanceof Date) return isValidDate(dateInput) ? dateInput : null;

  if (typeof dateInput === "string") {
    if (dateInput.includes("/")) return parseDDMMYYYY(dateInput);
    const parsed = new Date(dateInput);
    return isValidDate(parsed) ? parsed : null;
  }

  return null;
}

export function simpleDateCheck(
  varDate: string | Date | null | undefined,
  errMsgObj: ErrorRef,
  errFlagObj: FlagRef,
  message: string
): number {
  const parsedDate = parseAnyDate(varDate);
  if (!isValidDate(parsedDate) || parsedDate.getFullYear() < 1900 || parsedDate.getFullYear() > 2079) {
    errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${message}` : message;
    errFlagObj.value = 1;
    return 1;
  }
  return 0;
}

export function dateDiff(
  interval: string,
  date1: string | Date,
  date2: string | Date,
  firstDayOfWeek = 0
): number {
  const d1 = parseAnyDate(date1);
  const d2 = parseAnyDate(date2);
  if (!d1 || !d2) throw new Error("Invalid date format");

  const timeDiff = d2.getTime() - d1.getTime();

  switch (interval.toLowerCase()) {
    case "year":
    case "yyyy":
      return d2.getFullYear() - d1.getFullYear();

    case "quarter":
      return (d2.getFullYear() - d1.getFullYear()) * 4 +
        (Math.floor(d2.getMonth() / 3) - Math.floor(d1.getMonth() / 3));

    case "month":
      return (d2.getFullYear() - d1.getFullYear()) * 12 +
        (d2.getMonth() - d1.getMonth());

    case "day":
    case "dayofyear":
      return Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    case "hour":
      return Math.floor(timeDiff / (1000 * 60 * 60));

    case "minute":
      return Math.floor(timeDiff / (1000 * 60));

    case "second":
      return Math.floor(timeDiff / 1000);

    case "week":
    case "weekday":
    case "weekofyear":
      const adjD1 = new Date(d1);
      const adjD2 = new Date(d2);
      adjD1.setDate(adjD1.getDate() - ((adjD1.getDay() - firstDayOfWeek + 7) % 7));
      adjD2.setDate(adjD2.getDate() - ((adjD2.getDay() - firstDayOfWeek + 7) % 7));
      return Math.floor((adjD2.getTime() - adjD1.getTime()) / (1000 * 60 * 60 * 24 * 7));

    default:
      throw new Error(`Unsupported interval: ${interval}`);
  }
}

export async function globalDateCompareCheck(
  FDate: string | Date,
  TDate: string | Date,
  GlobalValue: number,
  errMsgObj: ErrorRef,
  errFlagObj: FlagRef,
  Message: string
): Promise<number> {
  try {
    const fromDate = typeof FDate === "string" ? parseDDMMYYYY(FDate) : FDate;
    const toDate = typeof TDate === "string" ? parseDDMMYYYY(TDate) : TDate;

    if (!fromDate || !toDate) throw new Error("Invalid date format");

    const monthDiff = dateDiff("month", fromDate, toDate);

    if (monthDiff >= 0 && GlobalValue > 0) {
      if (monthDiff < GlobalValue) {
        errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${Message}` : Message;
        errFlagObj.value = 1;
      }
    } else {
      errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${Message}` : Message;
      errFlagObj.value = 1;
    }

    return errFlagObj.value;
  } catch (error) {
    errFlagObj.value = 1;
    errMsgObj.value = (error as Error).message;
    return errFlagObj.value;
  }
}

// ================== NUMBER / FORMAT CHECKS ==================

export function phoneNoCheck(
  varString: string,
  maxLen: number,
  other: string | null,
  errMsgObj: ErrorRef,
  errFlagObj: FlagRef,
  message: string
): number {
  const trimmed = (varString || "").trim();

  if (!trimmed.length) {
    errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${message}` : message;
    errFlagObj.value = 1;
    return 0;
  }

  if (trimmed.length > maxLen) {
    const msg = `${message} (Should not be greater than ${maxLen})`;
    errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${msg}` : msg;
    errFlagObj.value = 1;
    return 0;
  }

  if (!other) {
    if (!/^\d+$/.test(trimmed)) {
      const msg = `${message} (Should be Numeric)`;
      errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${msg}` : msg;
      errFlagObj.value = 1;
      return 0;
    }
    return 1;
  }

  const allowedChars = new Set([...other, ..."0123456789"]);
  for (const ch of trimmed) {
    if (!allowedChars.has(ch)) {
      const msg = `${message} (Only numbers and '${other}' allowed)`;
      errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${msg}` : msg;
      errFlagObj.value = 1;
      return 0;
    }
  }

  return 1;
}

export function aadhaarCheck(
  varString: string,
  errFlagObj: FlagRef,
  errMsgObj: ErrorRef,
  message: string
): number {
  const trimmed = (varString || "").trim();
  if (!trimmed) return 1;

  if (!/^\d{12}$/.test(trimmed)) {
    const msg = `${message} (Aadhaar must be a 12-digit number)`;
    errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${msg}` : msg;
    errFlagObj.value = 1;
    return 0;
  }
  return 1;
}

export function panCheck(
  varString: string,
  errFlagObj: FlagRef,
  errMsgObj: ErrorRef,
  message: string
): number {
  const trimmed = (varString || "").trim();
  if (!trimmed) return 1;

  if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(trimmed.toUpperCase())) {
    const msg = `${message} (PAN must be in format ABCDE1234F)`;
    errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${msg}` : msg;
    errFlagObj.value = 1;
    return 0;
  }
  return 1;
}

export function emailCheck(
  varString: string,
  errMsgObj: ErrorRef,
  errFlagObj: FlagRef,
  message: string
): number {
  const trimmed = (varString || "").trim();
  if (!trimmed) {
    errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${message}` : message;
    errFlagObj.value = 1;
    return 0;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    const msg = `${message} (Invalid Email Format)`;
    errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${msg}` : msg;
    errFlagObj.value = 1;
    return 0;
  }

  return 1;
}

export function numCheck(
  varString: string,
  errMsgObj: ErrorRef,
  errFlagObj: FlagRef,
  message: string,
  required = true
): number {
  const trimmed = (varString || "").trim();

  if (required && !trimmed) {
    errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${message}` : message;
    errFlagObj.value = 1;
    return 0;
  }

  if (trimmed && !/^\d+$/.test(trimmed)) {
    const msg = `${message} (Only numbers allowed)`;
    errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${msg}` : msg;
    errFlagObj.value = 1;
    return 0;
  }

  return 1;
}

export function checkBit(
  value: unknown,
  errMsgObj: ErrorRef,
  errFlagObj: FlagRef,
  message: string
): number {
  if (value === null || value === undefined || value === "") {
    errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${message}` : message;
    errFlagObj.value = 1;
    return 0;
  }
  return 1;
}

export function lenCheck(
  varString: string | null | undefined,
  errMsgObj: ErrorRef,
  errFlagObj: FlagRef,
  message: string,
  maxVal = 1
): number {
  const value = (varString ?? "").toString().trim();
  if (value.length > maxVal) {
    errMsgObj.value = errFlagObj.value ? `${errMsgObj.value}, ${message}` : message;
    errFlagObj.value = 1;
    return 1;
  }
  return 0;
}

// ================== EXPORT AGGREGATE ==================

const CommonTs = {
  scrollToPosition,
  strCheck,
  strCheckWithZoro,
  simpleStrCheck,
  specialCharCheck,
  simpleDateCheck,
  dateDiff,
  parseAnyDate,
  globalDateCompareCheck,
  phoneNoCheck,
  aadhaarCheck,
  panCheck,
  empNameValidationCheck,
  emailCheck,
  numCheck,
  checkBit,
  lenCheck,
};

export default CommonTs;
