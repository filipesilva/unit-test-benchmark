import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4853Component } from './my-comp-4853.component';

describe('MyComp4853Component', () => {
  let component: MyComp4853Component;
  let fixture: ComponentFixture<MyComp4853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
