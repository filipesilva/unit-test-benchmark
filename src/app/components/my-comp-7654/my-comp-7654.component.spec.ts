import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7654Component } from './my-comp-7654.component';

describe('MyComp7654Component', () => {
  let component: MyComp7654Component;
  let fixture: ComponentFixture<MyComp7654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
