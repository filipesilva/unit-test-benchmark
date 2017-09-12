import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8852Component } from './my-comp-8852.component';

describe('MyComp8852Component', () => {
  let component: MyComp8852Component;
  let fixture: ComponentFixture<MyComp8852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
