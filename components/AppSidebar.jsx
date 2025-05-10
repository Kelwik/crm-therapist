'use client';

import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  BookHeart,
  CircleUserRound,
} from 'lucide-react';
import { SidebarFooter, useSidebar } from '@/components/ui/sidebar';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Card, CardContent } from './ui/card';

// Menu items.
const items = [
  {
    title: 'Dashboard',
    url: '#',
    icon: Home,
  },
  {
    title: 'Pasien',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Jadwal',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Email',
    url: '#',
    icon: Search,
  },
];

export function AppSidebar() {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className={open ? '' : 'hidden'}>
        <SidebarMenu>
          <SidebarMenuItem className="p-2">
            <p className="text-2xl font-medium">
              <span className="text-primary">Therapy</span>Care
            </p>
            <p className="text-base text-gray-500">CRM Dashboard</p>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <hr />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon size={24} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={open ? '' : 'hidden'}>
        <SidebarMenu>
          <SidebarMenuItem className="flex content-end items-center p-2 gap-4 overflow-hidden">
            <CircleUserRound size={32} />
            <div className="flex flex-col w-fit">
              <p className="text-base font-normal">Dr. Johnson Kennedy</p>
              <p className="text-sm text-gray-500">Psychiatrist</p>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
