import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4085Component } from './my-comp-4085.component';

describe('MyComp4085Component', () => {
  let component: MyComp4085Component;
  let fixture: ComponentFixture<MyComp4085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
