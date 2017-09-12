import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9451Component } from './my-comp-9451.component';

describe('MyComp9451Component', () => {
  let component: MyComp9451Component;
  let fixture: ComponentFixture<MyComp9451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
