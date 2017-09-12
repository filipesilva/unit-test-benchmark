import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4842Component } from './my-comp-4842.component';

describe('MyComp4842Component', () => {
  let component: MyComp4842Component;
  let fixture: ComponentFixture<MyComp4842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
