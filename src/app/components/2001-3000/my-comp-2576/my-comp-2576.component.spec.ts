import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2576Component } from './my-comp-2576.component';

describe('MyComp2576Component', () => {
  let component: MyComp2576Component;
  let fixture: ComponentFixture<MyComp2576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
