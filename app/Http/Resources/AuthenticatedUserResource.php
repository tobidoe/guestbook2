<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AuthenticatedUserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if(!$this->exists) {
            return [
                '_exists' => false
            ];
        }


        return [
            '_exists' => true,
            'id'=>$this->id,
            'name'=>$this->name,
            'email'=>$this->email,
            'profile_photo'=>$this->profile_photo,
        ];
    }
}
