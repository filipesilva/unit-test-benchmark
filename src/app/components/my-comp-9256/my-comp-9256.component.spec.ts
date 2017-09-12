import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9256Component } from './my-comp-9256.component';

describe('MyComp9256Component', () => {
  let component: MyComp9256Component;
  let fixture: ComponentFixture<MyComp9256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
