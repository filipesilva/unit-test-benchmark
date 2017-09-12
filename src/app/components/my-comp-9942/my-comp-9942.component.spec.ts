import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9942Component } from './my-comp-9942.component';

describe('MyComp9942Component', () => {
  let component: MyComp9942Component;
  let fixture: ComponentFixture<MyComp9942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
