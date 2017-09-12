import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9837Component } from './my-comp-9837.component';

describe('MyComp9837Component', () => {
  let component: MyComp9837Component;
  let fixture: ComponentFixture<MyComp9837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
