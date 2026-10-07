import { useState } from "react";
import { AppBar, Button, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import { NAV_ITEMS } from "../data/portfolio";
import { scrollToSection } from "../utils/scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <AppBar position="fixed" elevation={0} className="!bg-navy border-b border-white/10">
      <Toolbar className="mx-auto w-full max-w-6xl">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); go("home"); }}
          className="mr-auto font-display text-lg font-semibold text-leaf no-underline"
        >
          Shreya Kayal
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Button key={item.id} size="small" className="!text-white hover:!bg-white/10 hover:!text-leaf" onClick={() => go(item.id)}>
              {item.label}
            </Button>
          ))}
        </nav>

        <IconButton className="lg:!hidden !text-white" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} slotProps={{ paper: { className: "!bg-navy !text-white" } }}>
        <div className="w-64 p-2">
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)} className="!text-white">
            <Close />
          </IconButton>
          <List>
            {NAV_ITEMS.map((item) => (
              <ListItemButton key={item.id} onClick={() => go(item.id)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
