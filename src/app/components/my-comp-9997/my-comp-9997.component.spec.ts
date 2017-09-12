import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9997Component } from './my-comp-9997.component';

describe('MyComp9997Component', () => {
  let component: MyComp9997Component;
  let fixture: ComponentFixture<MyComp9997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
