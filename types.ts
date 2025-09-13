export interface QuranicChar {
  char: string;
  unicode: string;
  name?: string;
  description?: string;
}

export interface CharGroup {
  title: string;
  characters: QuranicChar[];
}
