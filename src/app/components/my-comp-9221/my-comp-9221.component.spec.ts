import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9221Component } from './my-comp-9221.component';

describe('MyComp9221Component', () => {
  let component: MyComp9221Component;
  let fixture: ComponentFixture<MyComp9221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
