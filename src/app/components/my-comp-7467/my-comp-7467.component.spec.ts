import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7467Component } from './my-comp-7467.component';

describe('MyComp7467Component', () => {
  let component: MyComp7467Component;
  let fixture: ComponentFixture<MyComp7467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
