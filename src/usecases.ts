import { HISTORY_ORIGIN, historyActions } from "./api";
import { cooled } from "./cool";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const early = cooled(100, 110);

export const USE_CASES: UseCase[] = [
  {
    title: "Swap history is not a cooldown clock",
    detail: `Ten seconds after an attempt at 100, wait ${early.waitSec} more. The history request is not sent and not used as lastSec.`,
    request: historyActions(HISTORY_ORIGIN, "swap.alcor", "eosio.token:transfer", 20),
    transaction: null,
  },
  {
    title: "Ready is not a swap",
    detail: "At 20 seconds the wait is 0. No arbitrage action is built.",
    request: { method: "GET", url: "https://wax.alcor.exchange/api/markets", executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (early.waitSec !== 10 || cooled(100, 120).waitSec !== 0) throw new Error("gap");
}
