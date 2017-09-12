import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9816Component } from './my-comp-9816.component';

describe('MyComp9816Component', () => {
  let component: MyComp9816Component;
  let fixture: ComponentFixture<MyComp9816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
