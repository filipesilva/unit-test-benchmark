import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5743Component } from './my-comp-5743.component';

describe('MyComp5743Component', () => {
  let component: MyComp5743Component;
  let fixture: ComponentFixture<MyComp5743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
