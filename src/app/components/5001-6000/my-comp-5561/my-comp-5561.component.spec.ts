import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5561Component } from './my-comp-5561.component';

describe('MyComp5561Component', () => {
  let component: MyComp5561Component;
  let fixture: ComponentFixture<MyComp5561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
