import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9029Component } from './my-comp-9029.component';

describe('MyComp9029Component', () => {
  let component: MyComp9029Component;
  let fixture: ComponentFixture<MyComp9029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
