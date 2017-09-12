import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5596Component } from './my-comp-5596.component';

describe('MyComp5596Component', () => {
  let component: MyComp5596Component;
  let fixture: ComponentFixture<MyComp5596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
