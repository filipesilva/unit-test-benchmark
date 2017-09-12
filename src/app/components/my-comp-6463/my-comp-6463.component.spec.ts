import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6463Component } from './my-comp-6463.component';

describe('MyComp6463Component', () => {
  let component: MyComp6463Component;
  let fixture: ComponentFixture<MyComp6463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
