class OrdinaryUser {
    buy() {
        console.log('普通用户购买');
    }
}

class MemberUser {
    buy() {
        console.log('会员用户购买');
    }
}

class VipUser {
    buy() {
        console.log('vip用户购买');
    }
}
var u1 = new OrdinaryUser();
u1.buy();
var u2 = new MemberUser();
u2.buy();
var u3 = new VipUser();
u3.buy();