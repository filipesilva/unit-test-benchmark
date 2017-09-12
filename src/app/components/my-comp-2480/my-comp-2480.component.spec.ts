import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2480Component } from './my-comp-2480.component';

describe('MyComp2480Component', () => {
  let component: MyComp2480Component;
  let fixture: ComponentFixture<MyComp2480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
