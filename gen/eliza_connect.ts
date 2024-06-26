// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file eliza.proto (package eliza, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SayRequest, SayResponse } from "./eliza_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service eliza.ElizaService
 */
export const ElizaService = {
  typeName: "eliza.ElizaService",
  methods: {
    /**
     * @generated from rpc eliza.ElizaService.Say
     */
    say: {
      name: "Say",
      I: SayRequest,
      O: SayResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

