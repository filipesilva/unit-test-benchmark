import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5852Component } from './my-comp-5852.component';

describe('MyComp5852Component', () => {
  let component: MyComp5852Component;
  let fixture: ComponentFixture<MyComp5852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
