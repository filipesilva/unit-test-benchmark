import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4158Component } from './my-comp-4158.component';

describe('MyComp4158Component', () => {
  let component: MyComp4158Component;
  let fixture: ComponentFixture<MyComp4158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
