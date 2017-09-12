import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2366Component } from './my-comp-2366.component';

describe('MyComp2366Component', () => {
  let component: MyComp2366Component;
  let fixture: ComponentFixture<MyComp2366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
