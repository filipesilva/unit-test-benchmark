import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4770Component } from './my-comp-4770.component';

describe('MyComp4770Component', () => {
  let component: MyComp4770Component;
  let fixture: ComponentFixture<MyComp4770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
