import * as sections from "../theme/sections"

export type Setting = { [key: string]: string | number | any };

export type Blocks<T = Setting> = { [key: string]: Section<T> };

export type Section<T = Setting, P = Setting, B = Setting> = {
  _?: keyof typeof sections;
  blocks?: Blocks<B>;
  block_order?: string[];
  settings: T;
};

export type Sections = { [key: string]: Section };

export type Template = {
  sections: Sections;
  order: string[];
};
