import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9852Component } from './my-comp-9852.component';

describe('MyComp9852Component', () => {
  let component: MyComp9852Component;
  let fixture: ComponentFixture<MyComp9852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
