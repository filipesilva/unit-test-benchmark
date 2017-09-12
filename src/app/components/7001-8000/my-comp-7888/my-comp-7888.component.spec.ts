import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7888Component } from './my-comp-7888.component';

describe('MyComp7888Component', () => {
  let component: MyComp7888Component;
  let fixture: ComponentFixture<MyComp7888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
