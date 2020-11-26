<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
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
            'body' => $this->body,
            'created_at' =>\Carbon\Carbon::parse($this->created_at)->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::parse($this->updated_at)->format('Y-m-d H:i:s'),
            'comments' => CommentResource::collection($this->whenLoaded('comments')),
            'user' => new UserResource($this->whenLoaded('user')),


        ];
    }
}
