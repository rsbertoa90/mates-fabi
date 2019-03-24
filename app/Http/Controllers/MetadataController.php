<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Metadata;
use Illuminate\Support\Facades\Cache;


class MetadataController extends Controller
{
    //

    public function update(Request $request)
    {
        $meta = Metadata::findOrCreate($request->page);
        $cacheCode = 'meta-'.$meta;
        Cache::forget($cacheCode);
        
        $field = $request->field;

        $meta->$field = $request->value;

        $meta->save();

        return;
    }


    public function getAll(){
        $pages = ['home',
                  'cotizador',
                  'franquicia',
                  'regalos empresariales',
                  'contacto',
                  'sucursales'];
        
        $res = [];

        foreach ($pages as $page)
        {
            $res[] = Metadata::findOrCreate($page);
        }

        return $res;
    }
}
