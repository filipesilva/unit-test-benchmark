import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4018Component } from './my-comp-4018.component';

describe('MyComp4018Component', () => {
  let component: MyComp4018Component;
  let fixture: ComponentFixture<MyComp4018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
