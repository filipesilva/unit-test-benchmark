import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1852Component } from './my-comp-1852.component';

describe('MyComp1852Component', () => {
  let component: MyComp1852Component;
  let fixture: ComponentFixture<MyComp1852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
