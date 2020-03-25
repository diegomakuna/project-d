import { TimelineMax as Timeline, Power1 } from 'gsap';

export const play = (pathname, node, appears) => {
 // console.log("----------------------")
 // console.log(pathname, node, appears)
    const delay = appears ? 0 : 0.3
    let timeline
  
    if (pathname === '/')
      //timeline = getHomeTimeline(node, delay)
      timeline = getDefaultTimeline(node, delay)
    else
      timeline = getDefaultTimeline(node, delay)
  
    timeline.play()
  }

  const getHomeTimeline = (node, delay) => {
    
    const timeline = new Timeline({ paused: true });
    const texts = node.querySelectorAll('h1 > div');
  
    timeline
      .from(node, 0, { display: 'none', autoAlpha: 0, delay })
      .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);
  
    return timeline
  }
  const getDefaultTimeline = (node, delay) => {
    console.log(node)
    node.classList.add('animation-active')
    const timeline = new Timeline({ paused: true });
    const content = node.querySelector('.content');
    const contentInner = node.querySelector('.content--inner');
  
    timeline
      .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
      .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
      .from(contentInner, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });
  
    return timeline;
  }