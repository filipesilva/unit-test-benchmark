import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2652Component } from './my-comp-2652.component';

describe('MyComp2652Component', () => {
  let component: MyComp2652Component;
  let fixture: ComponentFixture<MyComp2652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
