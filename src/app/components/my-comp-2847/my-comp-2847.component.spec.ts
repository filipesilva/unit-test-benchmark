import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2847Component } from './my-comp-2847.component';

describe('MyComp2847Component', () => {
  let component: MyComp2847Component;
  let fixture: ComponentFixture<MyComp2847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
