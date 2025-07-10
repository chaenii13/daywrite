import React from "react";
import BasicButton from '../../components/button/BasicButton';
import P from "./logoutpopup.style";
import { filledButtonCSS, outlineButtonCSS } from '../../components/button/style';

const LogoutPopup = ({ 
  title, 
  onClose, 
  onConfirm, 
  showCancel = false 
}) => {
  return (
    <P.ModalBackdrop onClick={onClose}>
      <P.ModalBox onClick={e => e.stopPropagation()}>
        <P.PopupTitle>{title}
          <P.CloseIcon onClick={onClose}>
            <img src={process.env.PUBLIC_URL + '/assets/images/icons/close.png'} alt="닫기" />
          </P.CloseIcon>
        </P.PopupTitle>
        <P.ButtonWrapper>
          {showCancel && (
            <BasicButton
              type="button"
              customStyle={outlineButtonCSS}
              onClick={onClose}
            >
              아니요
            </BasicButton>
          )}
          <BasicButton
            type="button"
            customStyle={filledButtonCSS}
            onClick={onConfirm}
          >
            네
          </BasicButton>
        </P.ButtonWrapper>
        </P.ModalBox>
    </P.ModalBackdrop>
  );
};

export default LogoutPopup;
