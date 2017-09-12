import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5169Component } from './my-comp-5169.component';

describe('MyComp5169Component', () => {
  let component: MyComp5169Component;
  let fixture: ComponentFixture<MyComp5169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
