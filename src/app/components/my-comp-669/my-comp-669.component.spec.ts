import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp669Component } from './my-comp-669.component';

describe('MyComp669Component', () => {
  let component: MyComp669Component;
  let fixture: ComponentFixture<MyComp669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
