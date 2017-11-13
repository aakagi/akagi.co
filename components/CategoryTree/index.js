import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { silverDark } from 'utils/colors'
import Folder from './Folder'
import File from './File'

import FOLDER_STATE from './FOLDER_STATE'

/*
CategoryTree Spec

Details:
This component is a filetree which consists of folders and files
Folders only go 1 level deep (no nested folders)


// This is not final - let me know if you think there is a better way of structuring
Data: [
  {
    folderId,
    folderName,
    isOpen,
    files: [{
      fileId,
      fileName,
      ... maybe more shit later
    }],
  },
]


Functionality
- Clicking on a folder toggles it open/closed
  - Animation for this would be great
- Dragging a folder, at a certain point, should show some kind of drag interface
- When you let go, it should put the folder or file in the new location
- And then call onFileDragged or onFolderDragged

 */


const CategoryTreeWrapper = styled.div`
  width: calc(100% - 73px);
  text-align: center;
  border-right: 1px ${silverDark} solid;
`

const CategoryTreeTitle = styled.h3`
  font-size: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: 100;
  border-bottom: 1px ${silverDark} solid;
`

const CategoryToggle = styled.div`
  height: 36px;
  border-bottom: 1px ${silverDark} solid;
`

const FoldersWrapper = styled.div`
  // padding: 12px;
  // padding-right: 12px;
`

const CategoryTree = ({
  productName = 'THOUGHTS',
  // category = 'folder',
  category = 'version',
  folders = FOLDER_STATE[category],
  foldersDraggable = true,
  filesDraggable = true,
}) => (
  <CategoryTreeWrapper>
    <CategoryTreeTitle>
      {productName}
    </CategoryTreeTitle>
    <CategoryToggle />
    <FoldersWrapper>
      {folders.map(({ files, ...folder }, index) => (
        <Folder
          {...folder}
          draggable={foldersDraggable}
          onDrag={(e) => console.log('here', e)}
          icon={category}
          key={'folder-' + index}
        >
          {files.map((file, fileIndex) => (
            <File
              {...file}
              draggable={filesDraggable}
              key={'file-' + fileIndex}
            />
          ))}
        </Folder>
      ))}
    </FoldersWrapper>
  </CategoryTreeWrapper>
)

CategoryTree.propTypes = {
  productName: PropTypes.string,
  foldersDraggable: PropTypes.bool,
  filesDraggable: PropTypes.bool,
  // category:
  // folders: 
  // - onFolderDragged({ folderId, folderDropIndex })
  // - onFileDragged({ fileId, dropFolderId, dropFolderIndex })
  //   - This is called when a file is dragged and placed in a new location
}

export default CategoryTree
