import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2841Component } from './my-comp-2841.component';

describe('MyComp2841Component', () => {
  let component: MyComp2841Component;
  let fixture: ComponentFixture<MyComp2841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
