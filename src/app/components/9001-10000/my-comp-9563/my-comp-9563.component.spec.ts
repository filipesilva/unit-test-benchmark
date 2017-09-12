import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9563Component } from './my-comp-9563.component';

describe('MyComp9563Component', () => {
  let component: MyComp9563Component;
  let fixture: ComponentFixture<MyComp9563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
