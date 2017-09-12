import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2002Component } from './my-comp-2002.component';

describe('MyComp2002Component', () => {
  let component: MyComp2002Component;
  let fixture: ComponentFixture<MyComp2002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
