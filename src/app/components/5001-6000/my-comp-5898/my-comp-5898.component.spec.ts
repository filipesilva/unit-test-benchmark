import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5898Component } from './my-comp-5898.component';

describe('MyComp5898Component', () => {
  let component: MyComp5898Component;
  let fixture: ComponentFixture<MyComp5898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
