import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2091Component } from './my-comp-2091.component';

describe('MyComp2091Component', () => {
  let component: MyComp2091Component;
  let fixture: ComponentFixture<MyComp2091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
