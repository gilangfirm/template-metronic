import React, {useMemo} from "react";
import {AsideMenuList} from "./AsideMenuList";
import {useHtmlClassService} from "../../../_core/MetronicLayout";

export function AsideMenu({disableScroll}) {
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      layoutConfig: uiService.config,
      asideMenuAttr: uiService.getAttributes("aside_menu"),
      ulClasses: uiService.getClasses("aside_menu_nav", true),
      asideClassesFromConfig: uiService.getClasses("aside_menu", true)
    };
  }, [uiService]);

  const theme = layoutProps.layoutConfig.aside.self.theme
  let bgColor = ''
  if(theme === 'light') {
    bgColor = layoutProps.layoutConfig.js.colors.theme.base.white
  }

  console.log('asd', layoutProps.layoutConfig.js.colors.theme.base.light)

  return (
    <>
      {/* begin::Menu Container */}
      <div
        id="kt_aside_menu"
        data-menu-vertical="1"
        style={{backgroundColor: bgColor}}
        className={`aside-menu my-4 ${layoutProps.asideClassesFromConfig}`}
        {...layoutProps.asideMenuAttr}
      >
        <AsideMenuList layoutProps={layoutProps} />
      </div>
      {/* end::Menu Container */}
    </>
  );
}
