import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5925Component } from './my-comp-5925.component';

describe('MyComp5925Component', () => {
  let component: MyComp5925Component;
  let fixture: ComponentFixture<MyComp5925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
