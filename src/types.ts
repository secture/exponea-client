export type PathParameter<TPath extends string> = TPath extends `${infer Head}/{${infer Parameter}}${infer Tail}`
  ? [pathParameter: string, ...params: PathParameter<Tail>]
  : [];
