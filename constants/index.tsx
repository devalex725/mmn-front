const defaultPageTitle = "Marathi Mandal Norway";

exports.GetPageTitle = (subTitle: string) => {
    return defaultPageTitle + " - " + subTitle;
}

exports.FavIcon = [
    { rel: 'icon', url: '/favicon.png' },
];