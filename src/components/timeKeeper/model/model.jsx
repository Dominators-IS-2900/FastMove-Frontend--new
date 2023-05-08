import React from "react";

const SaveModal = (props) => {
    const { modelStatus, title, children, onSubmit, submitLoader, buttonName } = props;

    return (
        <>
            <div className="modal" aria-hidden="true" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="close" data-dismiss="modal" onClick={()=>{modelStatus(false)}} aria-label="Close" >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            {
                                !submitLoader &&
                                <button type="submit" className="btn btn-primary btn-block" onClick={onSubmit}>{buttonName}</button>
                            }
                            {
                                submitLoader &&
                                <button
                                    disabled
                                    className="btn btn-primary btn-block"
                                >
                                    <i className="fa fa-spinner fa-spin" />
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>
    );
}
export default SaveModal;