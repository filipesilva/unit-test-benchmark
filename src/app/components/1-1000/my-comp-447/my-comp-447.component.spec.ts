import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp447Component } from './my-comp-447.component';

describe('MyComp447Component', () => {
  let component: MyComp447Component;
  let fixture: ComponentFixture<MyComp447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
