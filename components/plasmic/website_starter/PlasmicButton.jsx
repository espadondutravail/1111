// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ukrWx5Mw3z6DC37mxx9Wtf
// Component: 4Tum6jYkzOZr
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as pp from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: ukrWx5Mw3z6DC37mxx9Wtf/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: 4Tum6jYkzOZr/css
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: EZ8NVn6VOt_M/icon

createPlasmicElementProxy;

export const PlasmicButton__VariantProps = new Array(
  "showStartIcon",
  "showEndIcon",
  "color",
  "iconOnly",
  "outline",
  "bgDifference",
  "round",
  "large",
  "flat",
  "extraSmallShadow",
  "isDisabled",
  "small"
);

export const PlasmicButton__ArgProps = new Array(
  "startIcon",
  "children",
  "endIcon",
  "link",
  "submitsForm"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButton__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "iconOnly",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconOnly
      },
      {
        path: "outline",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.outline
      },
      {
        path: "bgDifference",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.bgDifference
      },
      {
        path: "round",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.round
      },
      {
        path: "large",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.large
      },
      {
        path: "flat",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.flat
      },
      {
        path: "extraSmallShadow",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.extraSmallShadow
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "small",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.small
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <Stack__
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootbgDifference]: hasVariant(
            $state,
            "bgDifference",
            "bgDifference"
          ),
          [sty.rootcolor_blueBorder]: hasVariant($state, "color", "blueBorder"),
          [sty.rootcolor_blue]: hasVariant($state, "color", "blue"),
          [sty.rootcolor_clear]: hasVariant($state, "color", "clear"),
          [sty.rootcolor_darkGray]: hasVariant($state, "color", "darkGray"),
          [sty.rootcolor_footerButton]: hasVariant(
            $state,
            "color",
            "footerButton"
          ),
          [sty.rootcolor_green]: hasVariant($state, "color", "green"),
          [sty.rootcolor_indigo]: hasVariant($state, "color", "indigo"),
          [sty.rootcolor_navLinkBlue]: hasVariant(
            $state,
            "color",
            "navLinkBlue"
          ),
          [sty.rootcolor_navLink]: hasVariant($state, "color", "navLink"),
          [sty.rootcolor_red]: hasVariant($state, "color", "red"),
          [sty.rootcolor_smaillWhite]: hasVariant(
            $state,
            "color",
            "smaillWhite"
          ),
          [sty.rootcolor_white]: hasVariant($state, "color", "white"),
          [sty.rootextraSmallShadow]: hasVariant(
            $state,
            "extraSmallShadow",
            "extraSmallShadow"
          ),
          [sty.rootflat]: hasVariant($state, "flat", "flat"),
          [sty.rooticonOnly]: hasVariant($state, "iconOnly", "iconOnly"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootlarge]: hasVariant($state, "large", "large"),
          [sty.rootoutline]: hasVariant($state, "outline", "outline"),
          [sty.rootround]: hasVariant($state, "round", "round"),
          [sty.rootshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.rootsmall]: hasVariant($state, "small", "small")
        }
      )}
    >
      {(
        hasVariant($state, "iconOnly", "iconOnly")
          ? true
          : hasVariant($state, "color", "blue")
          ? false
          : hasVariant($state, "showStartIcon", "showStartIcon")
          ? true
          : false
      )
        ? renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__oNi3X)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),
              [sty.slotTargetStartIconcolor_darkGray]: hasVariant(
                $state,
                "color",
                "darkGray"
              ),
              [sty.slotTargetStartIconcolor_green]: hasVariant(
                $state,
                "color",
                "green"
              ),
              [sty.slotTargetStartIconcolor_indigo]: hasVariant(
                $state,
                "color",
                "indigo"
              ),
              [sty.slotTargetStartIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetStartIconcolor_navLink]: hasVariant(
                $state,
                "color",
                "navLink"
              ),
              [sty.slotTargetStartIconcolor_red]: hasVariant(
                $state,
                "color",
                "red"
              ),
              [sty.slotTargetStartIconcolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),
              [sty.slotTargetStartIconiconOnly]: hasVariant(
                $state,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetStartIconisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetStartIconshowEndIcon_color_green]:
                hasVariant($state, "showEndIcon", "showEndIcon") &&
                hasVariant($state, "color", "green"),
              [sty.slotTargetStartIconshowEndIcon_color_green_showStartIcon]:
                hasVariant($state, "showStartIcon", "showStartIcon") &&
                hasVariant($state, "showEndIcon", "showEndIcon") &&
                hasVariant($state, "color", "green"),
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
      {(hasVariant($state, "iconOnly", "iconOnly") ? false : true)
        ? renderPlasmicSlot({
            defaultContents: "Label",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildrenbgDifference]: hasVariant(
                $state,
                "bgDifference",
                "bgDifference"
              ),
              [sty.slotTargetChildrencolor_blueBorder]: hasVariant(
                $state,
                "color",
                "blueBorder"
              ),
              [sty.slotTargetChildrencolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),
              [sty.slotTargetChildrencolor_clear]: hasVariant(
                $state,
                "color",
                "clear"
              ),
              [sty.slotTargetChildrencolor_darkGray]: hasVariant(
                $state,
                "color",
                "darkGray"
              ),
              [sty.slotTargetChildrencolor_footerButton]: hasVariant(
                $state,
                "color",
                "footerButton"
              ),
              [sty.slotTargetChildrencolor_green]: hasVariant(
                $state,
                "color",
                "green"
              ),
              [sty.slotTargetChildrencolor_indigo]: hasVariant(
                $state,
                "color",
                "indigo"
              ),
              [sty.slotTargetChildrencolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetChildrencolor_navLinkBlue]: hasVariant(
                $state,
                "color",
                "navLinkBlue"
              ),
              [sty.slotTargetChildrencolor_navLink]: hasVariant(
                $state,
                "color",
                "navLink"
              ),
              [sty.slotTargetChildrencolor_red]: hasVariant(
                $state,
                "color",
                "red"
              ),
              [sty.slotTargetChildrencolor_smaillWhite]: hasVariant(
                $state,
                "color",
                "smaillWhite"
              ),
              [sty.slotTargetChildrencolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),
              [sty.slotTargetChildreniconOnly]: hasVariant(
                $state,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetChildrenisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetChildrenlarge]: hasVariant(
                $state,
                "large",
                "large"
              ),
              [sty.slotTargetChildrenoutline]: hasVariant(
                $state,
                "outline",
                "outline"
              ),
              [sty.slotTargetChildrenshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              ),
              [sty.slotTargetChildrenshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              ),
              [sty.slotTargetChildrensmall]: hasVariant(
                $state,
                "small",
                "small"
              )
            })
          })
        : null}
      {(
        hasVariant($state, "iconOnly", "iconOnly")
          ? false
          : hasVariant($state, "showEndIcon", "showEndIcon")
          ? true
          : hasVariant($state, "showStartIcon", "showStartIcon")
          ? false
          : false
      )
        ? renderPlasmicSlot({
            defaultContents: (
              <ChevronRightIcon
                className={classNames(projectcss.all, sty.svg__s8HKe)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),
              [sty.slotTargetEndIconcolor_darkGray]: hasVariant(
                $state,
                "color",
                "darkGray"
              ),
              [sty.slotTargetEndIconcolor_green]: hasVariant(
                $state,
                "color",
                "green"
              ),
              [sty.slotTargetEndIconcolor_indigo]: hasVariant(
                $state,
                "color",
                "indigo"
              ),
              [sty.slotTargetEndIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetEndIconcolor_navLink]: hasVariant(
                $state,
                "color",
                "navLink"
              ),
              [sty.slotTargetEndIconcolor_red]: hasVariant(
                $state,
                "color",
                "red"
              ),
              [sty.slotTargetEndIconcolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),
              [sty.slotTargetEndIconiconOnly]: hasVariant(
                $state,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetEndIconisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              ),
              [sty.slotTargetEndIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
    </Stack__>
  );
}

function useBehavior(props, ref) {
  const b = pp.useButton(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );
  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = PlasmicLink__;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,
    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
