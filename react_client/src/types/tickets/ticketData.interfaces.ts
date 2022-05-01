export interface Segment {
  id: string;
  origin: CityCodes;
  destination: CityCodes;
  dateStart: string;
  dateEnd: string;
  stops: CityCodes[];
  duration: number;
}

export interface Ticket {
  id: string;
  price: number;
  companyId: string;
  segments: Segment[];
}

type CityCodes =
  | "MOW"
  | "HKT"
  | "HKG"
  | "JNB"
  | "PTB"
  | "ARH"
  | "TRN"
  | "KRS"
  | "SRT"
  | "LOS"
  | "EKV"
  | "EKT";

export interface TicketApiResponse {
  tickets: Ticket[];
  pages: number;
}
