import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4493Component } from './my-comp-4493.component';

describe('MyComp4493Component', () => {
  let component: MyComp4493Component;
  let fixture: ComponentFixture<MyComp4493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
