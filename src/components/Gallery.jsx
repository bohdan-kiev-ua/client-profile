'use client'

import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import slides from "@/data/slides";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({gallery}) {
    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);

    const toggleOpen = (state) => () => setOpen(state);

    const updateIndex = ({ index: current }) =>
        setIndex(current);


    return (
        <>
            <Lightbox
                index={index}
                slides={gallery}
                plugins={[Inline]}
                on={{
                    view: updateIndex,
                    click: toggleOpen(true),
                }}
                carousel={{
                    padding: 0,
                    spacing: 0,
                    imageFit: "cover",
                }}
                inline={{
                    style: {
                        width: "100%",
                        maxWidth: "238px",
                        aspectRatio: "238 / 320",
                        margin: "0 auto",
                        zIndex: '100',
                    },
                }}
            />

            <Lightbox
                open={open}
                close={toggleOpen(false)}
                index={index}
                slides={gallery}
                on={{ view: updateIndex }}
                animation={{ fade: 0 }}
                controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
            />
        </>
    );
}