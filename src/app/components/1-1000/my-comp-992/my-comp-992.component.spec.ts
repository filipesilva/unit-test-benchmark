import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp992Component } from './my-comp-992.component';

describe('MyComp992Component', () => {
  let component: MyComp992Component;
  let fixture: ComponentFixture<MyComp992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
