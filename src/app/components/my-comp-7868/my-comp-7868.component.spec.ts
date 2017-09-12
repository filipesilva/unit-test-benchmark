import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7868Component } from './my-comp-7868.component';

describe('MyComp7868Component', () => {
  let component: MyComp7868Component;
  let fixture: ComponentFixture<MyComp7868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
