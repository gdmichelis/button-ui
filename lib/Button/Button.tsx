import styled, { css } from "styled-components";
import React from "react";
import type { ElementType, ComponentPropsWithoutRef, JSX } from "react";
import "./style.css";

const sizes = {
  small: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  `,

  medium: css`
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.2rem;
  `,

  large: css`
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  `,
};

const variations = {
  /** Solid Variations */
  primary: css`
    background-color: var(--bg-primary);
    color: var(--bg-white);

    &:hover {
      background-color: var(--bg-dark-blue);
      color: var(--bg-white);
    }
  `,

  secondary: css`
    background-color: var(--bg-secondary);
    color: var(--bg-white);

    &:hover {
      background-color: var(--bg-dark-green);
    }
  `,

  success: css`
    background-color: var(--bg-success);
    color: var(--bg-white);

    &:hover {
      background-color: var(--bg-dark-brown);
    }
  `,

  danger: css`
    background-color: var(--bg-danger);
    color: var(--bg-white);

    &:hover {
      background-color: var(--bg-dark-red);
    }
  `,

  warning: css`
    background-color: var(--bg-warning);
    color: var(--bg-dark);

    &:hover {
      background-color: var(--bg-light-orange);
    }
  `,

  info: css`
    background-color: var(--bg-info);
    color: var(--bg-dark);

    &:hover {
      background-color: var(--bg-light-purple);
    }
  `,

  light: css`
    background-color: var(--bg-light);
    color: var(--bg-dark);

    &:hover {
      background-color: var(--bg-light-gray);
    }
  `,

  dark: css`
    background-color: var(--bg-dark);
    color: var(--bg-white);
  `,

  /** Outlined Variations */
  primaryOutline: css`
    background-color: transparent;
    color: var(--bg-primary);
    border: 2px solid var(--bg-primary);

    &:hover {
      background-color: var(--bg-primary);
      color: var(--bg-white);
    }
  `,

  secondaryOutline: css`
    background-color: transparent;
    color: var(--bg-secondary);
    border: 2px solid var(--bg-secondary);

    &:hover {
      background-color: var(--bg-secondary);
      color: var(--bg-white);
    }
  `,

  successOutline: css`
    background-color: transparent;
    color: var(--bg-success);
    border: 2px solid var(--bg-success);

    &:hover {
      background-color: var(--bg-success);
      color: var(--bg-white);
    }
  `,

  dangerOutline: css`
    background-color: transparent;
    color: var(--bg-danger);
    border: 2px solid var(--bg-danger);

    &:hover {
      background-color: var(--bg-danger);
      color: var(--bg-white);
    }
  `,

  warningOutline: css`
    background-color: transparent;
    color: var(--bg-warning);
    border: 2px solid var(--bg-warning);

    &:hover {
      background-color: var(--bg-warning);
      color: var(--bg-dark);
    }
  `,

  infoOutline: css`
    background-color: transparent;
    color: var(--bg-info);
    border: 2px solid var(--bg-info);

    &:hover {
      background-color: var(--bg-info);
      color: var(--bg-dark);
    }
  `,

  lightOutline: css`
    background-color: transparent;
    color: var(--bg-dark);
    border: 2px solid var(--bg-dark);

    &:hover {
      background-color: var(--bg-light);
      color: var(--bg-dark);
    }
  `,

  darkOutline: css`
    background-color: transparent;
    color: var(--bg-dark);
    border: 2px solid var(--bg-dark);

    &:hover {
      background-color: var(--bg-dark);
      color: var(--bg-white);
    }
  `,
};

/** PseudoState variables*/
const btnDisabled = css`
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.6;
`;

const btnHover = css`
  opacity: 0.9;
  transform: translateY(-1px);
`;

const btnFocus = css`
  box-shadow: 0 0 3px 6px rgb(131, 238, 255);
`;

const btnLoading = css`
  cursor: wait;
`;

const btnActive = css`
  transform: scale(0.98);

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 1px;
    left: 1px;
    right: 1px;
    height: 55%;
    background: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.75)
    );
    border-radius: 14px 14px 14px 14px/ 4px 4px 100px 100px;
  }
`;

interface StyledButtonProps extends React.ComponentProps<"button"> {
  $size?: string;
  $variation?: string;
  $loading?: boolean;
  $disabled?: boolean;
  $completed?: boolean;
  $background?: string;
  $color?: string;
  $border?: string;
  $borderRadius?: string;
  $margin?: string;
  $padding?: string;
  as?: React.ElementType;
  onClick?: () => void;
}

const StyledButton = styled.button<StyledButtonProps>`
  all: unset;
  border: 0;
  font-weight: 500;
  transition: all 0.15s ease-in-out;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  font: inherit;

  &:hover {
    ${({ $disabled, $loading, $completed }) =>
      !$disabled && !$loading && !$completed && btnHover}
  }

  &:focus {
    ${({ $disabled, $loading, $completed }) =>
      !$disabled && !$loading && !$completed && btnFocus}
  }

  &:active {
    ${({ $disabled, $loading, $completed }) =>
      !$disabled && !$loading && !$completed && btnActive}
  }

  ${({ $background }) =>
    $background &&
    css`
      background-color: ${$background};
    `}

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}

    ${({ $border }) =>
    $border &&
    css`
      border: ${$border};
    `}

   ${({ $borderRadius }) =>
    $borderRadius &&
    css`
      border-radius: ${$borderRadius};
    `}

    ${({ $padding }) =>
    $padding &&
    css`
      padding: ${$padding};
    `}
   
    ${({ $margin }) =>
    $margin &&
    css`
      margin: ${$margin};
    `}

  ${({ $loading }) => $loading && btnLoading}

  ${({ $disabled }) => $disabled && btnDisabled}

  ${({ $size }) => sizes[$size as keyof typeof sizes]}
  
  ${({ $variation }) => variations[$variation as keyof typeof variations]}
`;

type ButtonProps<T extends ElementType> = {
  renderAs?: T;
  children: React.ReactNode;
  $size?: string;
  $variation?: string;
  $loading?: boolean;
  $disabled?: boolean;
  $completed?: boolean;
  $background?: string;
  $color?: string;
  $border?: string;
  $borderRadius?: string;
  $margin?: string;
  $padding?: string;
  onClick?: () => void;
} & ComponentPropsWithoutRef<T>;

/** Polymorphic Button Component */
function Button<T extends ElementType = "button">({
  renderAs,
  $size,
  $variation,
  $loading,
  $disabled,
  $completed,
  $background,
  $color,
  $border,
  $borderRadius,
  $padding,
  $margin,
  children,
  onClick,
  tabIndex,
  ...props
}: ButtonProps<T>): JSX.Element {
  return (
    <StyledButton
      {...props}
      as={renderAs as React.ElementType}
      $size={$size}
      $variation={$variation}
      $loading={$loading}
      $disabled={$disabled}
      $completed={$completed}
      $background={$background}
      $color={$color}
      $border={$border}
      $borderRadius={$borderRadius}
      $padding={$padding}
      $margin={$margin}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {children}
    </StyledButton>
  );
}

export { Button };
