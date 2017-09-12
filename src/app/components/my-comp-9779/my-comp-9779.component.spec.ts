import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9779Component } from './my-comp-9779.component';

describe('MyComp9779Component', () => {
  let component: MyComp9779Component;
  let fixture: ComponentFixture<MyComp9779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
