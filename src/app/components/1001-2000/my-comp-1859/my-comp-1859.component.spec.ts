import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1859Component } from './my-comp-1859.component';

describe('MyComp1859Component', () => {
  let component: MyComp1859Component;
  let fixture: ComponentFixture<MyComp1859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
