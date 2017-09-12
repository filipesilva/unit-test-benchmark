import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp852Component } from './my-comp-852.component';

describe('MyComp852Component', () => {
  let component: MyComp852Component;
  let fixture: ComponentFixture<MyComp852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
