import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9499Component } from './my-comp-9499.component';

describe('MyComp9499Component', () => {
  let component: MyComp9499Component;
  let fixture: ComponentFixture<MyComp9499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
