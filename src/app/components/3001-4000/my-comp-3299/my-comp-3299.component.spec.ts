import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3299Component } from './my-comp-3299.component';

describe('MyComp3299Component', () => {
  let component: MyComp3299Component;
  let fixture: ComponentFixture<MyComp3299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
