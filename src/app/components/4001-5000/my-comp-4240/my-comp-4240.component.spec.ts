import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4240Component } from './my-comp-4240.component';

describe('MyComp4240Component', () => {
  let component: MyComp4240Component;
  let fixture: ComponentFixture<MyComp4240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
