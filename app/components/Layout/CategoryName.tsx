import useEnvStore from "~/stores/env_variables";

export const CATEGORY_NAME: { [key: string]: number | string } = {
  sports: 5,
  entertainment: 10,
  gadgets: 30,
  swirlster: 80,
  health: 77,
  food: 4,
  auto: 39,
  news: 1,
  khabar: 1,
  world: 50,
  profit: 2,
  lifestyle:43,
  offbeat:49,
};

export const CATEGORY_LIST_SideNav = () => {
  const basepath = useEnvStore((state) => state.basePath);
  return [
    {
      title: "Entertainment",
      link: `${basepath}/category/entertainment`,
    },
    {
      title: "Food",
      link: `${basepath}/category/food`,
    },
    {
      title: "Auto",
      link: `${basepath}/category/auto`,
    },
    {
      title: "Health",
      link: `${basepath}/category/health`,
    },
    {
      title: "Sports",
      link: `${basepath}/category/sports`,
    },
    {
      title: "Swirlster",
      link: `${basepath}/category/swirlster`,
    },
    {
      title: "Gadgets",
      link: `${basepath}/category/gadgets`,
    },
    {
      title: "World",
      link: `${basepath}/category/world`,
    },
    {
      title: "Profit",
      link: `${basepath}/category/profit`,
    },
  ];
};

export const CATEGORY_LIST_HINDI = () => {
  const basepath = useEnvStore((state) => state.basePath);
  return [
    {
      title: "लाइफस्टाइल",
      link: `${basepath}/category/lifestyle`,
    },
    {
      title: "मनोरंजन",
      link: `${basepath}/category/entertainment`,
    },
    {
      title: "ख़बरें",
      link: `${basepath}/category/khabar`,
    },
    // {
    //   title: "ज़रा हटके",
    //   link: `${basepath}/category/offbeat`,
    // },
    {
      title: "हेल्थ",
      link: `${basepath}/category/health`,
    },
  ];
};

export const CATEGORY_LIST = () => {
  const basepath = useEnvStore((state) => state.basePath);
  return [
    {
      title: "All",
      link: `${basepath}`,
    },
    {
      title: "Entertainment",
      link: `${basepath}/category/entertainment`,
    },
    {
      title: "Food",
      link: `${basepath}/category/food`,
    },
    // {
    //   title: "Auto",
    //   link: `${basepath}/category/auto`,
    // },
    {
      title: "Health",
      link: `${basepath}/category/health`,
    },
    {
      title: "News",
      link: `${basepath}/category/news`,
    },
    {
      title: "Sports",
      link: `${basepath}/category/sports`,
    },
    // {
    //   title: "Swirlster",
    //   link: `${basepath}/category/swirlster`,
    // },
    {
      title: "Gadgets",
      link: `${basepath}/category/gadgets`,
    },
    // {
    //   title: "World",
    //   link: `${basepath}/category/world`,
    // },
    {
      title: "Profit",
      link: `${basepath}/category/profit`,
    },
  ];
};

export const CATEGORY_LIST_RESP = () => {
  const basepath = useEnvStore((state) => state.basePath);

  return [
    {
      title: "Entertainment",
      link: `${basepath}/category/entertainment`,
    },
    {
      title: "Food",
      link: `${basepath}/category/food`,
    },
    {
      title: "Auto",
      link: `${basepath}/category/auto`,
    },
    {
      title: "Health",
      link: `${basepath}/category/health`,
    },
    {
      title: "Sports",
      link: `${basepath}/category/sports`,
    },
    {
      title: "Swirlster",
      link: `${basepath}/category/swirlster`,
    },
    {
      title: "Gadgets",
      link: `${basepath}/category/gadgets`,
    },
    {
      title: "World",
      link: `${basepath}/category/world`,
    },
    {
      title: "Profit",
      link: `${basepath}/category/profit`,
    },
  ];
};

export const Category_List_Left_Main = () => {
  const basepath = useEnvStore((state) => state.basePath);

  return [
    {
      title: "Entertainment",
      link: `${basepath}/category/entertainment`,
    },
    {
      title: "Food",
      link: `${basepath}/category/food`,
    },
    {
      title: "Auto",
      link: `${basepath}/category/auto`,
    },
    {
      title: "Profit",
      link: `${basepath}/category/profit`,
    },
    {
      title: "World",
      link: `${basepath}/category/world`,
    },


  ];
};
export const Category_List_Right_Main = () => {
  const basepath = useEnvStore((state) => state.basePath);

  return [
    {
      title: "Health",
      link: `${basepath}/category/health`,
    },
    {
      title: "Sports",
      link: `${basepath}/category/sports`,
    },
    {
      title: "Swirlster",
      link: `${basepath}/category/swirlster`,
    },
    {
      title: "Gadgets",
      link: `${basepath}/category/gadgets`,
    },
  ];
};
