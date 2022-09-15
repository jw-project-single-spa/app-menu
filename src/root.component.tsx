import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { navigateToUrl } from "single-spa";

export default function Root(props) {
  const navigate1Teste = () => {
    navigateToUrl("/");
  };

  const navigate2Teste = () => {
    navigateToUrl("/grupos");
  };

  return (
    <ProSidebar>
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          header
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<>s</>}>Dashboard</MenuItem>
          <SubMenu title="Components" icon={<>a</>}>
            <MenuItem onClick={navigate1Teste}>Component 1</MenuItem>
            <MenuItem onClick={navigate2Teste}>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              footer
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
}
