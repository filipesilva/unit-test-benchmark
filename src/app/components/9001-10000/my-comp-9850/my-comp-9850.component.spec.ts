import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9850Component } from './my-comp-9850.component';

describe('MyComp9850Component', () => {
  let component: MyComp9850Component;
  let fixture: ComponentFixture<MyComp9850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
