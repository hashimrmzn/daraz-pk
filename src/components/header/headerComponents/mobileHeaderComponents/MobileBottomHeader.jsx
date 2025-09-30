import React from 'react'
import SearchField from '../../../searchfield/SearchField';
function MobileBottomHeader() {
  return (
    <>
        <SearchField
                        outlined={false}
                        showLabel={false}
                        placeholder="Search in Daraz"
                        width="100%"
                        padding="0px 0px 0px 19px"
                        iconColor="#f85606"
                    />
    </>
  )
}

export default MobileBottomHeader