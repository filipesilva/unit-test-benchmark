import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7785Component } from './my-comp-7785.component';

describe('MyComp7785Component', () => {
  let component: MyComp7785Component;
  let fixture: ComponentFixture<MyComp7785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
