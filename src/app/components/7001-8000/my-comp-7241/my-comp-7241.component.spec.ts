import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7241Component } from './my-comp-7241.component';

describe('MyComp7241Component', () => {
  let component: MyComp7241Component;
  let fixture: ComponentFixture<MyComp7241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
