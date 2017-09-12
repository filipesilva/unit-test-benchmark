import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4852Component } from './my-comp-4852.component';

describe('MyComp4852Component', () => {
  let component: MyComp4852Component;
  let fixture: ComponentFixture<MyComp4852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
