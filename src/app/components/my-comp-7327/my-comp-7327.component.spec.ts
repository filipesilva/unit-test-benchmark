import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7327Component } from './my-comp-7327.component';

describe('MyComp7327Component', () => {
  let component: MyComp7327Component;
  let fixture: ComponentFixture<MyComp7327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
