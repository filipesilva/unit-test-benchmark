import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4468Component } from './my-comp-4468.component';

describe('MyComp4468Component', () => {
  let component: MyComp4468Component;
  let fixture: ComponentFixture<MyComp4468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
