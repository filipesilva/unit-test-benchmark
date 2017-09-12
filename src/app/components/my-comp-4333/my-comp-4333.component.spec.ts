import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4333Component } from './my-comp-4333.component';

describe('MyComp4333Component', () => {
  let component: MyComp4333Component;
  let fixture: ComponentFixture<MyComp4333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
