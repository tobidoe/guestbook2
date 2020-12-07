<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserForUserInfoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'created_at' =>\Carbon\Carbon::parse($this->created_at)->format('Y-m-d'),
            'comments' => CommentResource::collection($this->whenLoaded('comments')),
            'posts' => PostResource::collection($this->whenLoaded('posts')),
            ];
    }
}
