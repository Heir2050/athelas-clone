import React from "react"
import { Infinity } from "@/components/infinity-slider"

export function Stories() {
    return(
        <>
            <section className="stories">
                <div className="padding_main">
                    <div className="container_main has-padding">
                        <div className="text-center paddind-bottom">
                            <h2 className="small_hidden section-sub-heading mb-[1.25rem]">Customer&nbsp;Stories</h2>
                            
                            <h3 className="heading-style-h3">
                                <span>Earn </span>
                                <span className="text-highlight_wrap">
                                    <span>10% more revenue.</span>
                                    <span style={{width:"0px"}} className="text-highlight_bg is-1"></span>
                                </span><br/>
                                <span>Save </span>
                                <span className="text-highlight_wrap">
                                    <span>2+ hours per provider.</span>
                                    <span style={{width: "0px"}} className="text-highlight_bg is-2"></span>
                                </span>
                            </h3>
                        </div>
                        <Infinity />
                    </div>
                </div>
            </section>
        </>
    )
}