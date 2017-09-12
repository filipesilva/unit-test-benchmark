import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5638Component } from './my-comp-5638.component';

describe('MyComp5638Component', () => {
  let component: MyComp5638Component;
  let fixture: ComponentFixture<MyComp5638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
