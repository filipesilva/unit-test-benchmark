import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7210Component } from './my-comp-7210.component';

describe('MyComp7210Component', () => {
  let component: MyComp7210Component;
  let fixture: ComponentFixture<MyComp7210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
