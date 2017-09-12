import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9903Component } from './my-comp-9903.component';

describe('MyComp9903Component', () => {
  let component: MyComp9903Component;
  let fixture: ComponentFixture<MyComp9903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
