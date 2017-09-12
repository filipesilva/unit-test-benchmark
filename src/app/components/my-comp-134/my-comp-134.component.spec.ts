import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp134Component } from './my-comp-134.component';

describe('MyComp134Component', () => {
  let component: MyComp134Component;
  let fixture: ComponentFixture<MyComp134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
