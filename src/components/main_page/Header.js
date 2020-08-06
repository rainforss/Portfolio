import React, { useState, useEffect, useRef } from "react";

import Button from "../common/Button";
import Pagination from "../common/Pagination";
import AboutCover from "./AboutCover";
import HomeCover from "./HomeCover";
import ProjectCover from "./ProjectCover";
import BlogCover from "./BlogCover";
import ContactCover from "./ContactCover";
import MenuToggle from "../common/MenuToggle";
import NavMenu from "../common/NavMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageScrollTranslate, setPageScrollTranslate] = useState(-100);
  const [pageIndex, setPageIndex] = useState(1);
  const [animations, setAnimations] = useState({ slide: {}, pop: {} });
  const [toggleDisable, setToggleDisable] = useState(false);
  const [startAnimation, setStartAnimation] = useState(true);

  useEffect(() => {
    if (!menuOpen) {
      setAnimations({
        slide: {
          transform: "translate(100%,0)",
        },
        pop: { transform: "translate(0,0)" },
      });
      setToggleDisable(true);
      const resetEffect = setTimeout(
        () =>
          setAnimations({
            slide: {
              transform: "translate(-100%,0)",
              transition: "none",
            },
          }),
        1000
      );
      const disableToggle = setTimeout(() => setToggleDisable(false), 1000);
      return () => {
        clearTimeout(resetEffect);
        clearTimeout(disableToggle);
      };
    } else {
      setAnimations({
        slide: {
          transform: "translate(0,0)",
        },
        pop: { transform: "translate(0,-100%)" },
      });
      setToggleDisable(true);
      const resetEffect = setTimeout(
        () =>
          setAnimations({
            pop: { transform: "translate(0,100%)", transition: "none" },
          }),
        2000
      );
      const disableToggle = setTimeout(() => setToggleDisable(false), 1000);
      return () => {
        clearTimeout(resetEffect);
        clearTimeout(disableToggle);
      };
    }
  }, [menuOpen]);

  useEffect(() => {
    if (pageIndex >= 1 && pageIndex < 5) {
      setPageScrollTranslate(-100 * pageIndex);
    } else if (pageIndex === 5) {
      setPageScrollTranslate(-100 * pageIndex);
      const reset = setTimeout(() => setPageIndex(6), 490);
      return () => {
        clearTimeout(reset);
      };
    } else if (pageIndex === 6) {
      const reset = setTimeout(() => setPageScrollTranslate(0), 0);

      return () => {
        clearTimeout(reset);
      };
    } else if (pageIndex === 7) {
      setPageScrollTranslate(-500);
      const reset = setTimeout(() => setPageIndex(4), 15);
      return () => {
        clearTimeout(reset);
      };
    }
  }, [pageIndex]);

  var thrott = 800;
  var time = Date.now();

  const onMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollPage = (e) => {
    var now = Date.now();
    if (now - time < thrott) return;

    if (e.deltaY < 0) {
      if (pageIndex === 1) {
        return;
      } else if (pageIndex === 6) {
        setPageIndex(7);
      } else {
        setPageIndex(pageIndex - 1);
      }
    } else if (e.deltaY > 0) {
      if (pageIndex === 6) {
        setPageIndex(1);
      } else {
        setPageIndex(pageIndex + 1);
      }
    }
  };

  const clickScroll = () => {
    if (pageIndex <= 5) {
      setPageIndex(pageIndex + 1);
    } else {
      setPageIndex(1);
    }
  };

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const currentPage =
    pageScrollTranslate === 0 ? 5 : -pageScrollTranslate / 100;
  const prevPage = usePrevious(currentPage);

  return (
    <>
      <header className="header"> </header>
      <div className="overlay" onWheel={scrollPage}>
        <MenuToggle
          onMenuToggle={onMenuToggle}
          menuOpen={menuOpen}
          toggleDisable={toggleDisable}
        />
        <NavMenu menuOpen={menuOpen} animations={animations} />

        <div className="content-wrapper">
          <div
            className={
              "scroll-body " +
              (pageIndex === 6 || pageIndex === 7 ? "notransition" : "")
            }
            style={{ transform: `translateY(${pageScrollTranslate}%)` }}
          >
            <ContactCover menuOpen={menuOpen} />
            <HomeCover menuOpen={menuOpen} startAnimation={startAnimation} />
            <AboutCover menuOpen={menuOpen} animations={animations} />
            <ProjectCover menuOpen={menuOpen} startAnimation={startAnimation} />
            <BlogCover menuOpen={menuOpen} />
            <ContactCover menuOpen={menuOpen} startAnimation={startAnimation} />
          </div>
        </div>

        <Button onClick={clickScroll} pageTranslate={pageScrollTranslate} />

        <Pagination
          currentPage={currentPage}
          prevPage={prevPage}
          totalPage={5}
          startAnimation={startAnimation}
        />
      </div>
    </>
  );
};

export default Header;
