import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4006Component } from './my-comp-4006.component';

describe('MyComp4006Component', () => {
  let component: MyComp4006Component;
  let fixture: ComponentFixture<MyComp4006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
