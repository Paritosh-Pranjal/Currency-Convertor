export interface CountryType {
  code: string;
  label: string;
}

export const BASE_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies'

export const ConvertorCardText = {
    heading: 'Currency Convertor',
    subTitle: 'Enter your Amount',
    footerText: 'Converted Amount',
    button: 'Get Exchange'
}

export const countryList: CountryType[] = [
  { code: "AED", label: "AE" },
  { code: "AFN", label: "AF" },
  { code: "XCD", label: "AG" },
  { code: "ALL", label: "AL" },
  { code: "AMD", label: "AM" },
  { code: "ANG", label: "AN" },
  { code: "AOA", label: "AO" },
  { code: "AQD", label: "AQ" },
  { code: "ARS", label: "AR" },
  { code: "AUD", label: "AU" },
  { code: "AZN", label: "AZ" },
  { code: "BAM", label: "BA" },
  { code: "BBD", label: "BB" },
  { code: "BDT", label: "BD" },
  { code: "XOF", label: "BE" },
  { code: "BGN", label: "BG" },
  { code: "BHD", label: "BH" },
  { code: "BIF", label: "BI" },
  { code: "BMD", label: "BM" },
  { code: "BND", label: "BN" },
  { code: "BOB", label: "BO" },
  { code: "BRL", label: "BR" },
  { code: "BSD", label: "BS" },
  { code: "NOK", label: "BV" },
  { code: "BWP", label: "BW" },
  { code: "BYR", label: "BY" },
  { code: "BZD", label: "BZ" },
  { code: "CAD", label: "CA" },
  { code: "CDF", label: "CD" },
  { code: "XAF", label: "CF" },
  { code: "CHF", label: "CH" },
  { code: "CLP", label: "CL" },
  { code: "CNY", label: "CN" },
  { code: "COP", label: "CO" },
  { code: "CRC", label: "CR" },
  { code: "CUP", label: "CU" },
  { code: "CVE", label: "CV" },
  { code: "CYP", label: "CY" },
  { code: "CZK", label: "CZ" },
  { code: "DJF", label: "DJ" },
  { code: "DKK", label: "DK" },
  { code: "DOP", label: "DO" },
  { code: "DZD", label: "DZ" },
  { code: "ECS", label: "EC" },
  { code: "EEK", label: "EE" },
  { code: "EGP", label: "EG" },
  { code: "ETB", label: "ET" },
  { code: "EUR", label: "FR" },
  { code: "FJD", label: "FJ" },
  { code: "FKP", label: "FK" },
  { code: "GBP", label: "GB" },
  { code: "GEL", label: "GE" },
  { code: "GGP", label: "GG" },
  { code: "GHS", label: "GH" },
  { code: "GIP", label: "GI" },
  { code: "GMD", label: "GM" },
  { code: "GNF", label: "GN" },
  { code: "GTQ", label: "GT" },
  { code: "GYD", label: "GY" },
  { code: "HKD", label: "HK" },
  { code: "HNL", label: "HN" },
  { code: "HRK", label: "HR" },
  { code: "HTG", label: "HT" },
  { code: "HUF", label: "HU" },
  { code: "IDR", label: "ID" },
  { code: "ILS", label: "IL" },
  { code: "INR", label: "IN" },
  { code: "IQD", label: "IQ" },
  { code: "IRR", label: "IR" },
  { code: "ISK", label: "IS" },
  { code: "JMD", label: "JM" },
  { code: "JOD", label: "JO" },
  { code: "JPY", label: "JP" },
  { code: "KES", label: "KE" },
  { code: "KGS", label: "KG" },
  { code: "KHR", label: "KH" },
  { code: "KMF", label: "KM" },
  { code: "KPW", label: "KP" },
  { code: "KRW", label: "KR" },
  { code: "KWD", label: "KW" },
  { code: "KYD", label: "KY" },
  { code: "KZT", label: "KZ" },
  { code: "LAK", label: "LA" },
  { code: "LBP", label: "LB" },
  { code: "LKR", label: "LK" },
  { code: "LRD", label: "LR" },
  { code: "LSL", label: "LS" },
  { code: "LTL", label: "LT" },
  { code: "LVL", label: "LV" },
  { code: "LYD", label: "LY" },
  { code: "MAD", label: "MA" },
  { code: "MDL", label: "MD" },
  { code: "MGA", label: "MG" },
  { code: "MKD", label: "MK" },
  { code: "MMK", label: "MM" },
  { code: "MNT", label: "MN" },
  { code: "MOP", label: "MO" },
  { code: "MRO", label: "MR" },
  { code: "MTL", label: "MT" },
  { code: "MUR", label: "MU" },
  { code: "MVR", label: "MV" },
  { code: "MWK", label: "MW" },
  { code: "MXN", label: "MX" },
  { code: "MYR", label: "MY" },
  { code: "MZN", label: "MZ" },
  { code: "NAD", label: "NA" },
  { code: "XPF", label: "NC" },
  { code: "NGN", label: "NG" },
  { code: "NIO", label: "NI" },
  { code: "NPR", label: "NP" },
  { code: "NZD", label: "NZ" },
  { code: "OMR", label: "OM" },
  { code: "PAB", label: "PA" },
  { code: "PEN", label: "PE" },
  { code: "PGK", label: "PG" },
  { code: "PHP", label: "PH" },
  { code: "PKR", label: "PK" },
  { code: "PLN", label: "PL" },
  { code: "PYG", label: "PY" },
  { code: "QAR", label: "QA" },
  { code: "RON", label: "RO" },
  { code: "RSD", label: "RS" },
  { code: "RUB", label: "RU" },
  { code: "RWF", label: "RW" },
  { code: "SAR", label: "SA" },
  { code: "SBD", label: "SB" },
  { code: "SCR", label: "SC" },
  { code: "SDG", label: "SD" },
  { code: "SEK", label: "SE" },
  { code: "SGD", label: "SG" },
  { code: "SKK", label: "SK" },
  { code: "SLL", label: "SL" },
  { code: "SOS", label: "SO" },
  { code: "SRD", label: "SR" },
  { code: "STD", label: "ST" },
  { code: "SVC", label: "SV" },
  { code: "SYP", label: "SY" },
  { code: "SZL", label: "SZ" },
  { code: "THB", label: "TH" },
  { code: "TJS", label: "TJ" },
  { code: "TMT", label: "TM" },
  { code: "TND", label: "TN" },
  { code: "TOP", label: "TO" },
  { code: "TRY", label: "TR" },
  { code: "TTD", label: "TT" },
  { code: "TWD", label: "TW" },
  { code: "TZS", label: "TZ" },
  { code: "UAH", label: "UA" },
  { code: "UGX", label: "UG" },
  { code: "USD", label: "US" },
  { code: "UYU", label: "UY" },
  { code: "UZS", label: "UZ" },
  { code: "VEF", label: "VE" },
  { code: "VND", label: "VN" },
  { code: "VUV", label: "VU" },
  { code: "YER", label: "YE" },
  { code: "ZAR", label: "ZA" },
  { code: "ZMK", label: "ZM" },
  { code: "ZWD", label: "ZW" },
];