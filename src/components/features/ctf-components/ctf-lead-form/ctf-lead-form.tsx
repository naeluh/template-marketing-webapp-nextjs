import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { AmCtfLeadFormFieldsFragment } from './__generated/ctf-lead-form.generated';
export const CtfLeadForm = (props: AmCtfLeadFormFieldsFragment) => {
  const {
    sys: { id },
    leadFormEmbedCode,
    headerText,
  } = props;
  return (
    <div className="views-element-container contact_us_with_salesforce" id="block-connect-with-us">
      <div>
        <div className="js-view-dom-id-9a6782fa4aed94f74d99212a41d9790999855f9a1aefb8b4b4be0adde53385f3">
          <div className="views-row">
            <article role="article" about="/content/contact-us">
              <div className="am-heading">
                <div style={{}} className="am-heading-head">
                  <div className="am-heading-container">
                    <h1 className="am-heading-title">{headerText}</h1>
                    <div className="am-heading-headline" />
                  </div>
                </div>
              </div>
              <div
                className="am-layout-single"
                dangerouslySetInnerHTML={{
                  __html: leadFormEmbedCode || '',
                }}
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
