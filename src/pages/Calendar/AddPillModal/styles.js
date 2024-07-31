import styled from "styled-components";

// AddPillModal

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 6.5625rem;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 1.875rem;
`;

export const SearchModal = styled.div`
  width: 21.375rem;
  height: 26rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.875rem;
`;

export const SearchBox = styled.div`
  height: 3.25rem;
  margin: 1.5rem 1.5rem 0.25rem 1.5rem;
  background-color: #f7f6f9;
  border: 0.063rem solid #fff;
  border-radius: 1.875rem;
  display: flex;
  justify-content: space-between;

  input {
    flex-grow: 1;
    padding: 1rem 1.25rem;
    color: #1b1a1f;
    font-family: "SUIT-SemiBold";
    font-size: 0.875rem;
    line-height: 120%;
    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: #adadad;
      font-family: "SUIT-Regular";
      font-size: 0.875rem;
      line-height: 120%;
    }
  }

  img {
    margin-right: 1.25rem;
    width: 1.25rem;
    cursor: pointer;
  }
`;

export const ResultList = styled.ul`
  list-style: none;
  margin: 0 2.25rem;
  flex-grow: 1;
  overflow-y: auto;
  padding: 0 0.25rem;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: #f7f6f9;
    border-radius: 1.25rem;
    width: 0.375rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1.25rem;
    background: #c4f261;
  }
`;

export const ResultItem = styled.li`
  padding: 1.25rem 0;
  border-bottom: 0.063rem solid #e5e4e6;
  font-family: "SUIT-Medium";
  font-size: 0.875rem;
  line-height: 1.2;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

// WarningModal

export const WarningModalContainer = styled.div`
  position: absolute;
  top: 369px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 1.875rem;
  width: 263px;
  height: 72px;
  align-items: center;
`;

export const WarningMessage = styled.div`
  margin-top: 30px;
  color: #1b1a1f;
  font-family: "SUIT-Medium";
  font-size: 16px;
  line-height: 1;
  display: flex;
  text-align: center;
  align-items: center;
  width: 203px;
  height: 12px;
`;

export const CloseButton = styled.button`
  background-color: #c4f261;
  color: white;
  border: none;
  border-radius: 1.875rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
`;

// DeleteConfirmModal

export const DeleteModalContainer = styled.div`
  position: absolute;
  top: 349px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 1.875rem;
  width: 342px;
  height: 152px;
  align-items: center;
`;

export const DeleteMessage = styled.div`
  margin-top: 30px;
  color: #1b1a1f;
  font-family: "SUIT-Medium";
  font-size: 16px;
  line-height: 1;
  text-align: left;
  width: 282px;
  height: 12px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

export const CancelButton = styled.div`
  width: 136px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.6px solid #d9d9d9;
  background: white;
  border-radius: 20px;
  color: #1b1a1f;
  cursor: pointer;
`;

export const ConfirmButton = styled.div`
  width: 136px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b1a1f;
  border-radius: 20px;
  color: white;
  cursor: pointer;
`;