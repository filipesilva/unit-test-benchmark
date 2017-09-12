import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2489Component } from './my-comp-2489.component';

describe('MyComp2489Component', () => {
  let component: MyComp2489Component;
  let fixture: ComponentFixture<MyComp2489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
