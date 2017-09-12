import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4372Component } from './my-comp-4372.component';

describe('MyComp4372Component', () => {
  let component: MyComp4372Component;
  let fixture: ComponentFixture<MyComp4372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
