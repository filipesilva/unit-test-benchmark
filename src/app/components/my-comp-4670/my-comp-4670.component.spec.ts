import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4670Component } from './my-comp-4670.component';

describe('MyComp4670Component', () => {
  let component: MyComp4670Component;
  let fixture: ComponentFixture<MyComp4670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
