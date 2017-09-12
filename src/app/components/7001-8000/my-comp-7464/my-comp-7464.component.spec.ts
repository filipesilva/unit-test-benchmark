import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7464Component } from './my-comp-7464.component';

describe('MyComp7464Component', () => {
  let component: MyComp7464Component;
  let fixture: ComponentFixture<MyComp7464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
