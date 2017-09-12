import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1169Component } from './my-comp-1169.component';

describe('MyComp1169Component', () => {
  let component: MyComp1169Component;
  let fixture: ComponentFixture<MyComp1169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
