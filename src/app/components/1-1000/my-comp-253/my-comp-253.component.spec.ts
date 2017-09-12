import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp253Component } from './my-comp-253.component';

describe('MyComp253Component', () => {
  let component: MyComp253Component;
  let fixture: ComponentFixture<MyComp253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
