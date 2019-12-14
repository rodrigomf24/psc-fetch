// Type definitions for PSC-Fetch 0.0.7
// Project: https://github.com/mfpiccolo/psc-fetch
// Definitions by: Rodrigo Morales <https://github.com/rodrigomf24>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: figure out what search is used for
type SubscribeOptions = {
  hostMatcher: RegExp;
  pathnameMatcher: RegExp;
  search: any;
};
// TODO: find the type of event and the output
type SubscribeCallbacks = {
  [key: string]: (event: any) => any;
};

type CachePublishFetchOptions = {};

declare function cachePublishFetch(
  url: string,
  opts: cachePublishFetch.Opts
): Promise<Response>;

declare namespace cachePublishFetch {
  interface Opts extends RequestInit {
    expiry: number;
  }

  interface Subscribe {
    subscribe(
      options: SubscribeOptions,
      callbacks: SubscribeCallbacks[]
    ): PubSubJS.Subscribe;
  }

  interface Unsubscribe {
    unsubscribe(tokenOrFunction: any): void;
  }
}

export = cachePublishFetch;
