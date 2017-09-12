import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2715Component } from './my-comp-2715.component';

describe('MyComp2715Component', () => {
  let component: MyComp2715Component;
  let fixture: ComponentFixture<MyComp2715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
