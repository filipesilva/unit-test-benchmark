import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6143Component } from './my-comp-6143.component';

describe('MyComp6143Component', () => {
  let component: MyComp6143Component;
  let fixture: ComponentFixture<MyComp6143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
