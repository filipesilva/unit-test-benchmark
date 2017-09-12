import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9772Component } from './my-comp-9772.component';

describe('MyComp9772Component', () => {
  let component: MyComp9772Component;
  let fixture: ComponentFixture<MyComp9772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
