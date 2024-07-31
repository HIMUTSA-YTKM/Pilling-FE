import React, { useState } from "react";
import {
  TopBar,
  TagList,
  TagItem,
  SaveButton,
  Title,
  BackButton,
  TagXBtn,
  InputBox,
  AddTagButton,
  TagModalWrapper,
  ReasonText,
} from "./styles";
import WarningModal from "../WarningModal";
import DeleteConfirmModal from "../DeleteConfirmModal"; // 삭제 확인 모달
import arrowLeft from "./../../../../assets/Calendar/arrow-left.svg";
import tagXBtn from "./../../../../assets/Calendar/tagXBtn.svg";
import tagXBtnGray from "./../../../../assets/Calendar/tagXBtnGray.svg";

const TagModal = ({
  selectedPill,
  onSave,
  onClose,
  onBack,
  customTags,
  setCustomTags,
}) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isAddingTag, setIsAddingTag] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const [isDeleteConfirmModalOpen, setIsDeleteConfirmModalOpen] =
    useState(false);
  const [tagToDelete, setTagToDelete] = useState(null);

  const tags = [
    "감기",
    "복통",
    "소화불량",
    "두통",
    "발열",
    "알러지",
    "여드름",
    "항생제",
    "내과",
    "치과",
    "정신과",
    "안과",
    "한의원",
    "피부과",
    "정형외과",
    "성형외과",
    "산부인과",
    "비뇨기과",
    "신경외과",
  ];

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleSave = () => {
    onSave(selectedPill, selectedTags);
    onClose();
  };

  const handleAddCustomTag = () => {
    if (newTag.trim() && newTag.length <= 6 && !/\s/.test(newTag)) {
      if (customTags.length < 3) {
        setCustomTags((prevTags) => [...prevTags, newTag]);
        setIsAddingTag(false);
        setNewTag("");
      } else {
        setIsWarningModalOpen(true);
      }
    }
  };

  const handleDeleteCustomTag = () => {
    setCustomTags((prevTags) => prevTags.filter((t) => t !== tagToDelete));
    setSelectedTags((prevTags) => prevTags.filter((t) => t !== tagToDelete));
    setIsDeleteConfirmModalOpen(false);
    setTagToDelete(null);
  };

  const handleDeleteButtonClick = (e, tag) => {
    e.stopPropagation(); // 이벤트 전파 중단
    setTagToDelete(tag);
    setIsDeleteConfirmModalOpen(true);
  };

  const handleNewTagChange = (e) => {
    const value = e.target.value;
    if (value.length <= 6 && !/\s/.test(value)) {
      setNewTag(value);
    }
  };

  const handleBackFromAddTag = () => {
    setIsAddingTag(false);
    setNewTag(""); // 입력 값 초기화
  };

  return (
    <>
      {isAddingTag ? (
        <>
          <TopBar>
            <BackButton onClick={handleBackFromAddTag}></BackButton>
            <Title>새로운 태그 추가</Title>
            <div style={{ width: "1.25rem" }} />
          </TopBar>
          <InputBox>
            <input
              type="text"
              value={newTag}
              onChange={handleNewTagChange}
              placeholder="태그를 입력하세요"
            />
          </InputBox>
          <AddTagButton onClick={handleAddCustomTag} disabled={!newTag.trim()}>
            추가
          </AddTagButton>
        </>
      ) : (
        <TagModalWrapper>
          <TopBar>
            <BackButton onClick={onBack}>
              <img src={arrowLeft} alt="backBtn" />
            </BackButton>
            <Title>{selectedPill}</Title>
            <div style={{ width: "1.25rem" }} />
          </TopBar>
          <ReasonText>복용사유를 선택하세요</ReasonText>
          <TagList>
            {tags.map((tag, index) => (
              <TagItem
                key={index}
                selected={selectedTags.includes(tag)}
                onClick={() => handleTagClick(tag)}
              >
                <span>{tag}</span>
              </TagItem>
            ))}
            {/* 사용자 등록 태그 */}
            {customTags.map((tag, index) => (
              <TagItem
                key={index + tags.length}
                selected={selectedTags.includes(tag)}
                onClick={() => handleTagClick(tag)}
              >
                <span>{tag}</span>
                <TagXBtn onClick={(e) => handleDeleteButtonClick(e, tag)}>
                  <img
                    src={selectedTags.includes(tag) ? tagXBtn : tagXBtnGray}
                    alt="tagXBtn"
                  />
                </TagXBtn>
              </TagItem>
            ))}
            <TagItem
              onClick={() =>
                customTags.length >= 3
                  ? setIsWarningModalOpen(true)
                  : setIsAddingTag(true)
              }
            >
              <span>+</span>
            </TagItem>
          </TagList>
          <SaveButton onClick={handleSave} disabled={selectedTags.length === 0}>
            <span>등록 완료</span>
          </SaveButton>
        </TagModalWrapper>
      )}
      {isWarningModalOpen && (
        <WarningModal
          message="태그는 3개까지 추가 가능합니다"
          onClose={() => setIsWarningModalOpen(false)}
        />
      )}
      {isDeleteConfirmModalOpen && (
        <DeleteConfirmModal
          message="해당 태그를 삭제하시겠습니까?"
          onCancel={() => {
            setIsDeleteConfirmModalOpen(false);
            setTagToDelete(null); // 삭제 태그 초기화
          }}
          onConfirm={handleDeleteCustomTag}
        />
      )}
    </>
  );
};

export default TagModal;