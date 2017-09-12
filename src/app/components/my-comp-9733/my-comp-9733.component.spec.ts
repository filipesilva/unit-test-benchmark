import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9733Component } from './my-comp-9733.component';

describe('MyComp9733Component', () => {
  let component: MyComp9733Component;
  let fixture: ComponentFixture<MyComp9733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
