import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5585Component } from './my-comp-5585.component';

describe('MyComp5585Component', () => {
  let component: MyComp5585Component;
  let fixture: ComponentFixture<MyComp5585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
