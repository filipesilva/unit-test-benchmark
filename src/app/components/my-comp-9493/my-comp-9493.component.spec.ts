import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9493Component } from './my-comp-9493.component';

describe('MyComp9493Component', () => {
  let component: MyComp9493Component;
  let fixture: ComponentFixture<MyComp9493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
