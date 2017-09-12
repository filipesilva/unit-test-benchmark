import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4738Component } from './my-comp-4738.component';

describe('MyComp4738Component', () => {
  let component: MyComp4738Component;
  let fixture: ComponentFixture<MyComp4738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
