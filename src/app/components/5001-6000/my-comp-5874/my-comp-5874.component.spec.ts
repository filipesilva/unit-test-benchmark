import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5874Component } from './my-comp-5874.component';

describe('MyComp5874Component', () => {
  let component: MyComp5874Component;
  let fixture: ComponentFixture<MyComp5874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
