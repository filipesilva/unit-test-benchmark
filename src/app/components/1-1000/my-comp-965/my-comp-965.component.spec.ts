import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp965Component } from './my-comp-965.component';

describe('MyComp965Component', () => {
  let component: MyComp965Component;
  let fixture: ComponentFixture<MyComp965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
