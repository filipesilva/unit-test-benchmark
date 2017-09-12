import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp223Component } from './my-comp-223.component';

describe('MyComp223Component', () => {
  let component: MyComp223Component;
  let fixture: ComponentFixture<MyComp223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
