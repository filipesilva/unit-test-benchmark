import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2554Component } from './my-comp-2554.component';

describe('MyComp2554Component', () => {
  let component: MyComp2554Component;
  let fixture: ComponentFixture<MyComp2554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
