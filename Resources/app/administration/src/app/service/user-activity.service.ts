/**
 * @private
 */
export default class UserActivityService {
    updateLastUserActivity(date?: Date): void {
        const cookieStorage = SnapAdmin.Service('loginService').getStorage();

        if (date === undefined) {
            date = new Date();
        }

        cookieStorage.setItem('lastActivity', `${Math.round(+date / 1000)}`);
    }
}
