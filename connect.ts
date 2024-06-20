import type { ConnectRouter } from "@connectrpc/connect";
import { ElizaService } from "./gen/eliza_connect";

export default (router: ConnectRouter) => {
  router.service(ElizaService, {
    async say(req, context) {
      return {
        sentence: "",
        count: 0,
        words: [],
        isValid: false
      };
    },
  });
}
