import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7060Component } from './my-comp-7060.component';

describe('MyComp7060Component', () => {
  let component: MyComp7060Component;
  let fixture: ComponentFixture<MyComp7060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
