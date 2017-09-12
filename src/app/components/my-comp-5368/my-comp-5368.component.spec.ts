import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5368Component } from './my-comp-5368.component';

describe('MyComp5368Component', () => {
  let component: MyComp5368Component;
  let fixture: ComponentFixture<MyComp5368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
