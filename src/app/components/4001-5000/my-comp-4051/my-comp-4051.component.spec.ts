import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4051Component } from './my-comp-4051.component';

describe('MyComp4051Component', () => {
  let component: MyComp4051Component;
  let fixture: ComponentFixture<MyComp4051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
