<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------
namespace app\adminapi\controller\v1\notification\sms;

use crmeb\exceptions\AdminException;
use app\adminapi\controller\AuthController;
use crmeb\services\{sms\Sms};

/**
 * 短信购买
 * Class SmsPay
 * @package app\admin\controller\sms
 */
class SmsPay extends AuthController
{
    /**
     * @var Sms
     */
    protected $smsHandle;

    public function initialize()
    {
        parent::initialize(); // TODO: Change the autogenerated stub
        $this->smsHandle = new Sms('yunxin', [
            'sms_account' => sys_config('sms_account'),
            'sms_token' => sys_config('sms_token'),
            'site_url' => sys_config('site_url')
        ]);
        if (!$this->smsHandle->isLogin()) {
            throw new AdminException('请先填写短息配置');
        }
    }

    /**
     *  获取账号信息
     */
    public function number()
    {
        $countInfo = $this->smsHandle->count();
        if ($countInfo['status'] == 400) return app('json')->fail($countInfo['msg']);
        $info['account'] = sys_config('sms_account');
        $info['number'] = $countInfo['data']['number'];
        $info['send_total'] = $countInfo['data']['send_total'];
        return app('json')->success($info);
    }

    /**
     *  获取支付套餐
     */
    public function price()
    {
        list($page, $limit) = $this->request->getMore([
            ['page', 1],
            ['limit', 20],
        ], true);
        $mealInfo = $this->smsHandle->meal($page, $limit);
        if ($mealInfo['status'] == 400) return app('json')->fail($mealInfo['msg']);
        return app('json')->success($mealInfo['data']);
    }

    /**
     * 获取支付码
     */
    public function pay()
    {
        list($payType, $mealId, $price) = $this->request->postMore([
            ['payType', 'weixin'],
            ['mealId', 0],
            ['price', 0],
        ], true);
        $payInfo = $this->smsHandle->pay($payType, $mealId, $price, $this->adminId);
        if ($payInfo['status'] == 400) return app('json')->fail($payInfo['msg']);
        return app('json')->success($payInfo['data']);
    }
}
