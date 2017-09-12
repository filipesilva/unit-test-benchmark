import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3688Component } from './my-comp-3688.component';

describe('MyComp3688Component', () => {
  let component: MyComp3688Component;
  let fixture: ComponentFixture<MyComp3688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
