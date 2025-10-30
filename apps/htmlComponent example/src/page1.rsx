<Screen
  id="page1"
  _customShortcuts={[]}
  _hashParams={[]}
  _searchParams={[]}
  browserTitle=""
  title="Page 1"
  urlSlug=""
  uuid="4278d412-3bbc-48a7-ab92-6d44f227064e"
>
  <JavascriptQuery
    id="query1"
    isMultiplayerEdited={false}
    query={include("../lib/query1.js", "string")}
    resourceName="JavascriptQuery"
    runWhenPageLoads={true}
  />
  <Frame
    id="$main"
    enableFullBleed={false}
    isHiddenOnDesktop={false}
    isHiddenOnMobile={false}
    padding="8px 12px"
    type="main"
  >
    <HTML id="html1" html="{{ query1.data }}" />
  </Frame>
</Screen>
