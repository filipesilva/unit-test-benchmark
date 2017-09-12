import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2355Component } from './my-comp-2355.component';

describe('MyComp2355Component', () => {
  let component: MyComp2355Component;
  let fixture: ComponentFixture<MyComp2355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
