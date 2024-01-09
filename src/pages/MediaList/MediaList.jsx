import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listActions } from "../../_actions";
import { FilteredList, ListSummary, CategoryTabs } from "../../_components";
import './mediaList.scss';
import { Button } from "react-bootstrap";

function MediaList() {
  const [isGridMode, setGridMode] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector((state) => state?.list?.data?.results || []);

  const countByType = list.reduce((acc, item) => {
    // Initialize count for the type if not already present
    acc[item.Type] = [...acc[item.Type] || [], item]
    return acc;
  }, {});

  useEffect(() => {
    dispatch(listActions.getMediaList());
  }, []);

  const toggleView = () => {
    setGridMode(!isGridMode);
  };

  return (
    <div className="container">
      <CategoryTabs countByType={countByType} />
      <div className="row">
        <div className="col-2">
          <ListSummary countByType={countByType} />
          <div>
            <Button variant="danger" className="w-100" onClick={toggleView}>Change View</Button>
          </div>
        </div>
        <div className="col-10">
          <FilteredList isGridMode={isGridMode} />
        </div>
      </div>
    </div>
  );
}

export { MediaList };
