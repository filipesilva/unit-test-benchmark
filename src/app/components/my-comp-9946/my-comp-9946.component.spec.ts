import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9946Component } from './my-comp-9946.component';

describe('MyComp9946Component', () => {
  let component: MyComp9946Component;
  let fixture: ComponentFixture<MyComp9946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
