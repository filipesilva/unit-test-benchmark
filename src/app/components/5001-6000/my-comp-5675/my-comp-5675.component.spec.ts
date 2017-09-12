import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5675Component } from './my-comp-5675.component';

describe('MyComp5675Component', () => {
  let component: MyComp5675Component;
  let fixture: ComponentFixture<MyComp5675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
