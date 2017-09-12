import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7934Component } from './my-comp-7934.component';

describe('MyComp7934Component', () => {
  let component: MyComp7934Component;
  let fixture: ComponentFixture<MyComp7934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
