import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2495Component } from './my-comp-2495.component';

describe('MyComp2495Component', () => {
  let component: MyComp2495Component;
  let fixture: ComponentFixture<MyComp2495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
