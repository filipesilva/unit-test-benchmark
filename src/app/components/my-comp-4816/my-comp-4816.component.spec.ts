import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4816Component } from './my-comp-4816.component';

describe('MyComp4816Component', () => {
  let component: MyComp4816Component;
  let fixture: ComponentFixture<MyComp4816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
