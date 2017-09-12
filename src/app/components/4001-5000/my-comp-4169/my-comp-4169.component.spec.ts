import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4169Component } from './my-comp-4169.component';

describe('MyComp4169Component', () => {
  let component: MyComp4169Component;
  let fixture: ComponentFixture<MyComp4169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
