import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp563Component } from './my-comp-563.component';

describe('MyComp563Component', () => {
  let component: MyComp563Component;
  let fixture: ComponentFixture<MyComp563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
