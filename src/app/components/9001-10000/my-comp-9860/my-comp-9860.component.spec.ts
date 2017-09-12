import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9860Component } from './my-comp-9860.component';

describe('MyComp9860Component', () => {
  let component: MyComp9860Component;
  let fixture: ComponentFixture<MyComp9860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
