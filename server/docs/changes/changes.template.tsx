import React, { JSX } from "preact";
import base from "server/base.template";
import { CommonLocals } from "server/common.middleware";
import { markdown } from "server/core/templating-filters";
import { ifSet } from "server/macros/jsx-utils";
import * as sidebarMacros from "server/docs/components/article-sidebar.component";

export default function render(context: CommonLocals & { changes: string }): JSX.Element {
  return base(context,
    <div class="container">
      <div class="row">
        {ifSet(context.sidebar, () =>
          <div class="col-sm-4 col-md-3">
            {sidebarMacros.sidebar(context.sidebar, context.path, { class: "articles-sidebar" })}
          </div>
        )}
        <div class="col-sm-8 col-md-9" dangerouslySetInnerHTML={markdown(context.changes)} />
      </div>
    </div>);
}
