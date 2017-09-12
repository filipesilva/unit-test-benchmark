import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7507Component } from './my-comp-7507.component';

describe('MyComp7507Component', () => {
  let component: MyComp7507Component;
  let fixture: ComponentFixture<MyComp7507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
