import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp109Component } from './my-comp-109.component';

describe('MyComp109Component', () => {
  let component: MyComp109Component;
  let fixture: ComponentFixture<MyComp109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
