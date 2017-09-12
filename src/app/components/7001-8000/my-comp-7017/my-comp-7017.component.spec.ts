import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7017Component } from './my-comp-7017.component';

describe('MyComp7017Component', () => {
  let component: MyComp7017Component;
  let fixture: ComponentFixture<MyComp7017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
