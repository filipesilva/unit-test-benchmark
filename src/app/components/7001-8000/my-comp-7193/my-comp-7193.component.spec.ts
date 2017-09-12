import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7193Component } from './my-comp-7193.component';

describe('MyComp7193Component', () => {
  let component: MyComp7193Component;
  let fixture: ComponentFixture<MyComp7193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
