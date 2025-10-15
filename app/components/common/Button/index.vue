<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    :type="type"
    :aria-disabled="disabled || loading"
    :aria-label="ariaLabel"
    @click="handleClick"
  >
    <!-- Loading spinner -->
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>

    <!-- Button content -->
    <span :class="{ 'opacity-0': loading }">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  ariaLabel?: string;
}

interface ButtonEmits {
  click: [event: MouseEvent];
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "md",
  type: "button",
  disabled: false,
  loading: false,
  fullWidth: false,
});

const emit = defineEmits<ButtonEmits>();

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit("click", event);
  }
};

const buttonClasses = computed(() => {
  const baseClasses = [
    "inline-flex",
    "items-center",
    "justify-center",
    "font-medium",
    "rounded-lg",
    "transition-all",
    "duration-200",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "relative",
  ];

  // Size classes
  const sizeClasses = {
    sm: ["px-3", "py-1.5", "text-sm"],
    md: ["px-4", "py-2", "text-sm"],
    lg: ["px-6", "py-3", "text-base"],
  };

  // Variant classes
  const variantClasses = {
    primary: [
      "bg-blue-600",
      "text-white",
      "hover:bg-blue-700",
      "focus:ring-blue-500",
      "active:bg-blue-800",
    ],
    secondary: [
      "bg-gray-600",
      "text-white",
      "hover:bg-gray-700",
      "focus:ring-gray-500",
      "active:bg-gray-800",
    ],
    outline: [
      "border",
      "border-gray-300",
      "bg-white",
      "text-gray-700",
      "hover:bg-gray-50",
      "focus:ring-blue-500",
      "active:bg-gray-100",
    ],
    ghost: [
      "bg-transparent",
      "text-gray-700",
      "hover:bg-gray-100",
      "focus:ring-gray-500",
      "active:bg-gray-200",
    ],
    danger: [
      "bg-red-600",
      "text-white",
      "hover:bg-red-700",
      "focus:ring-red-500",
      "active:bg-red-800",
    ],
  };

  // Full width class
  const fullWidthClass = props.fullWidth ? ["w-full"] : [];

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...variantClasses[props.variant],
    ...fullWidthClass,
  ];
});
</script>
