/**
 * BZ server API interface
 */
export interface RemoteServer {

  /**
   * Version
   */
  v: string;

  /**
   * Game Time
   */
  gtm: number;

  /**
   * Id ?
   */
  g: string;

  /**
   * Key (1 if has password)
   */
  k: number | null;

  /**
   * Locked (1 if is locked)
   */
  l: number | null;

  /**
   * Map name
   */
  m: string;

  /**
   * Unknown
   */
  mu: string;

  /**
   * Game Type
   */
  gt: number;

  /**
   * Unknown
   */
  gtd: number;

  /**
   * Ping
   */
  pg: number;

  /**
   * Ping Max
   */
  pgm: number;

  /**
   * Unknown
   */
  d: string;

  /**
   * Unknown
   */
  t: number;

  /**
   * Name (base 64 + extra serialized stuff)
   */
  n: string;

  /**
   * Multiplayer mod
   */
  mm: string;

  /**
   * Description ?
   */
  h: string | null;

  /**
   * Player Max
   */
  pm: number;

  /**
   * Players
   */
  pl: RemotePlayer[];

}

interface RemotePlayer {

  /**
   * id ?
   */
  i: string;

  /**
   * Name
   */
  n: string;

  /**
   * Team ?
   */
  t: number;

}
