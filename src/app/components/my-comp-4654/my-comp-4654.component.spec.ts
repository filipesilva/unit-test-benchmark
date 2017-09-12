import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4654Component } from './my-comp-4654.component';

describe('MyComp4654Component', () => {
  let component: MyComp4654Component;
  let fixture: ComponentFixture<MyComp4654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
