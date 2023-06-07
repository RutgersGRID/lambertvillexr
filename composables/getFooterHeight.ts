const footerHeight = ref(0);

const resizeEventListener = () => {
  const footer = document.getElementById('footer');
  footerHeight.value = footer?.clientHeight ?? 0;
};

export default function getFooterHeight() {
  onMounted(() => {
    resizeEventListener();
    window.addEventListener('resize', resizeEventListener);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', resizeEventListener);
  });

  return { footerHeight };
}
