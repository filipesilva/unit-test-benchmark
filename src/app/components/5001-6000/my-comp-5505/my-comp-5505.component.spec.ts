import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5505Component } from './my-comp-5505.component';

describe('MyComp5505Component', () => {
  let component: MyComp5505Component;
  let fixture: ComponentFixture<MyComp5505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
