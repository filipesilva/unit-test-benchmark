import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2852Component } from './my-comp-2852.component';

describe('MyComp2852Component', () => {
  let component: MyComp2852Component;
  let fixture: ComponentFixture<MyComp2852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
