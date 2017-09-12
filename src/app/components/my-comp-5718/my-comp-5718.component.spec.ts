import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5718Component } from './my-comp-5718.component';

describe('MyComp5718Component', () => {
  let component: MyComp5718Component;
  let fixture: ComponentFixture<MyComp5718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
