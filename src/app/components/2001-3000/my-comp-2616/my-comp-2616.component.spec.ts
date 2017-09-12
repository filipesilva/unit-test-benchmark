import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2616Component } from './my-comp-2616.component';

describe('MyComp2616Component', () => {
  let component: MyComp2616Component;
  let fixture: ComponentFixture<MyComp2616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
