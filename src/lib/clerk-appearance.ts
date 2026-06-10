export const clerkAppearance = {
  variables: {
    colorPrimary: "#4169E1",
    colorBackground: "#0a0a0a",
    colorText: "#ffffff",
    colorTextSecondary: "#a1a1aa",
    colorInputBackground: "#18181b",
    colorInputText: "#ffffff",
    colorNeutral: "#ffffff",
  },
  elements: {
    card: "bg-black/50 border border-[#4169E1]/30 shadow-[0_0_60px_rgba(65,105,225,0.15)]",
    headerTitle: "text-white",
    headerSubtitle: "text-zinc-400",
    socialButtonsBlockButton:
      "border border-[#4169E1]/30 bg-zinc-950 text-white hover:bg-[#4169E1]/20",
    formButtonPrimary: "bg-[#4169E1] hover:bg-[#3558c9] text-white",
    footerActionLink: "text-[#4169E1] hover:text-[#3558c9]",
  },
};

export const accountMenuAppearance = {
  variables: clerkAppearance.variables,
  elements: {
    ...clerkAppearance.elements,
    userButtonPopoverCard:
      "bg-zinc-950 border border-[#4169E1]/30 shadow-[0_0_40px_rgba(65,105,225,0.12)]",
    userButtonPopoverActions: "border-t border-[#4169E1]/20",
    userButtonPopoverActionButton:
      "text-white hover:bg-[#4169E1]/20 focus:bg-[#4169E1]/20",
    userButtonPopoverActionButtonText: "text-white",
    userButtonPopoverActionButtonIcon: "text-[#4169E1]",
    userButtonPopoverFooter: "hidden",
    userButtonTrigger: "focus:shadow-[0_0_0_3px_rgba(65,105,225,0.35)]",
    modalBackdrop: "bg-black/70",
    modalContent: "bg-zinc-950 border border-[#4169E1]/30",
    navbar: "bg-black border-b border-[#4169E1]/20",
    navbarButton: "text-white hover:bg-[#4169E1]/20",
    navbarButtonIcon: "text-[#4169E1]",
    pageScrollBox: "bg-zinc-950",
    profileSectionTitle: "text-white",
    profileSectionContent: "text-zinc-300",
    profileSectionPrimaryButton: "text-[#4169E1] hover:text-[#3558c9]",
    accordionTriggerButton: "text-white hover:bg-[#4169E1]/10",
    formFieldInput:
      "bg-zinc-900 border border-[#4169E1]/30 text-white focus:border-[#4169E1]",
    formFieldLabel: "text-zinc-300",
    dividerLine: "bg-[#4169E1]/20",
    menuButton: "text-white hover:bg-[#4169E1]/20",
    menuList: "bg-zinc-950 border border-[#4169E1]/30",
  },
};
