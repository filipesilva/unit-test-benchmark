import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4630Component } from './my-comp-4630.component';

describe('MyComp4630Component', () => {
  let component: MyComp4630Component;
  let fixture: ComponentFixture<MyComp4630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
