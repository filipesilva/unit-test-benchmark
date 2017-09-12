import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp507Component } from './my-comp-507.component';

describe('MyComp507Component', () => {
  let component: MyComp507Component;
  let fixture: ComponentFixture<MyComp507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
