import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5482Component } from './my-comp-5482.component';

describe('MyComp5482Component', () => {
  let component: MyComp5482Component;
  let fixture: ComponentFixture<MyComp5482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
