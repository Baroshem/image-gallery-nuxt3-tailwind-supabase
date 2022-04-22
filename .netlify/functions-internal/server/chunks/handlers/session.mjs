import { defineEventHandler, assertMethod, useBody, setCookie } from 'h3';
import { u as useRuntimeConfig } from '../nitro/netlify-builder.mjs';
import '@netlify/functions';
import 'unenv/runtime/polyfill/fetch.node';
import 'ufo';
import 'ohmyfetch';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'unstorage';

const config = useRuntimeConfig().public;
const session = defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  const body = await useBody(event);
  const cookieOptions = config.supabase.cookies;
  const { event: signEvent, session } = body;
  if (!event) {
    throw new Error("Auth event missing!");
  }
  if (signEvent === "SIGNED_IN") {
    if (!session) {
      throw new Error("Auth session missing!");
    }
    setCookie(event, `${cookieOptions.name}-access-token`, session.access_token, {
      domain: cookieOptions.domain,
      maxAge: cookieOptions.lifetime ?? 0,
      path: cookieOptions.path,
      sameSite: cookieOptions.sameSite
    });
  }
  if (signEvent === "SIGNED_OUT") {
    setCookie(event, `${cookieOptions.name}-access-token`, "", {
      maxAge: -1,
      path: cookieOptions.path
    });
  }
  return "auth cookie set";
});

export { session as default };
