import { InvertedBoxes } from "./Inverted-boxes";


export function Product() {
    return(
        <>
            <div className="product text-black">
                <div className="padding_main ">
                    <div className="container_main has-padding">
                        <div className="text-center paddind-bottom">
                            <h2 className="small_hidden section-sub-heading mb-[1.25rem]">Customer&nbsp;Stories</h2>
                            
                            <h3 className="heading-style-h3">
                                Three mighty products.<br/>
                                One brilliant package.
                            </h3>
                        </div>
                        {/* cards */}
                        <InvertedBoxes />
                    </div>
                </div>
            </div>
        </>
    )
}