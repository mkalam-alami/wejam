import { BookshelfModel } from "bookshelf";
import * as React from "preact";
import { nunjuckMacro } from "server/macros/nunjucks-macros";

const TEMPLATE_PATH = "event/manage/event-manage.macros.html";

export interface EventCountdownOffset {
  d: number;
  h: number;
  m: number;
}

export function linksForm(eventDetails: BookshelfModel) {
  return <div dangerouslySetInnerHTML={nunjuckMacro(TEMPLATE_PATH, "linksForm", [eventDetails])}></div>;
}

export function countdownForm(event: BookshelfModel, options: {countdownOffset?: EventCountdownOffset} = {}) {
  return <div dangerouslySetInnerHTML={nunjuckMacro(TEMPLATE_PATH, "countdownForm", [event, options])}></div>;
}

export function stateForm(event: BookshelfModel) {
  return <div dangerouslySetInnerHTML={nunjuckMacro(TEMPLATE_PATH, "stateForm", [event])}></div>;
}

export function jamConfigForm(event: BookshelfModel, eventDetails: BookshelfModel) {
  return <div dangerouslySetInnerHTML={nunjuckMacro(TEMPLATE_PATH, "jamConfigForm", [event, eventDetails])}></div>;
}
