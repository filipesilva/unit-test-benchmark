import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9254Component } from './my-comp-9254.component';

describe('MyComp9254Component', () => {
  let component: MyComp9254Component;
  let fixture: ComponentFixture<MyComp9254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
