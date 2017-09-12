import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7179Component } from './my-comp-7179.component';

describe('MyComp7179Component', () => {
  let component: MyComp7179Component;
  let fixture: ComponentFixture<MyComp7179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
