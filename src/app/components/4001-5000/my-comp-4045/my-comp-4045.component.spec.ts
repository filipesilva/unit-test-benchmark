import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4045Component } from './my-comp-4045.component';

describe('MyComp4045Component', () => {
  let component: MyComp4045Component;
  let fixture: ComponentFixture<MyComp4045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
