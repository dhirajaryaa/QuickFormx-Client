import React, { useState } from 'react';
import { FieldSelector } from '..';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

function FormField({ dynamicField: { id, name, label, required, placeholder }, handleDynamicFieldRemove }) {
    const [fieldType, setFieldType] = useState("text");
    const [isFocused, setIsFocused] = useState(false);
    const [labelName, setLabelName] = useState(label || "");
    const [placeholderText, setPlaceholderText] = useState(placeholder || "");
    const [isRequired, setIsRequired] = useState(required || false);

    return (
        <div className="w-full p-4 mt-3 rounded-md border relative">
            <Button type="button" onClick={() => handleDynamicFieldRemove(id)} size="sm" variant='destructive' className={"absolute right-3 bottom-3"}>
                <Trash2 />
            </Button>
            <div className="grid grid-cols-2 gap-4 items-start">
                {/* Field Label & Placeholder */}
                <div className="space-y-3">
                    {/* Short Label Input */}
                    <div>
                        <Label className="text-sm ml-2 text-muted-foreground">
                            Field Name <span className="text-destructive">*</span>
                        </Label>
                        {isFocused ? (
                            <Input
                                placeholder="e.g. Full Name"
                                value={labelName}
                                onChange={(e) => setLabelName(e.target.value)}
                                onBlur={() => setIsFocused(false)}
                                autoFocus
                                className="border-0 border-b  outline rounded-none text-sm mt-1"
                            />
                        ) : (
                            <div
                                className="border-b border-muted px-2 py-1 cursor-pointer text-muted-foreground hover:border-primary text-sm"
                                onClick={() => setIsFocused(true)}
                            >
                                {labelName || "Click to name this field"}
                            </div>
                        )}
                    </div>

                    {/* Placeholder Input */}
                    <div>
                        <Label className="text-sm ml-2 text-muted-foreground">Hint Text</Label>
                        <Input
                            placeholder="e.g. John"
                            value={placeholderText}
                            onChange={(e) => setPlaceholderText(e.target.value)}
                            className="border-0 mt-1 border-b  outline rounded-none text-sm"
                        />
                    </div>

                    {/* Required Toggle */}
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="required-switch"
                            checked={isRequired}
                            onCheckedChange={setIsRequired}
                        />
                        <Label htmlFor="required-switch" className="text-sm">
                            Required
                        </Label>
                    </div>
                </div>

                {/* Field Type Selector */}
                <div>
                    <Label className="text-sm text-muted-foreground mb-1 block">
                        Answer Type
                    </Label>
                    <FieldSelector fieldType={fieldType} setFieldType={setFieldType} />
                </div>
            </div>
        </div>
    );
}

export default FormField;
