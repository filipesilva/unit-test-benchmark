import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7451Component } from './my-comp-7451.component';

describe('MyComp7451Component', () => {
  let component: MyComp7451Component;
  let fixture: ComponentFixture<MyComp7451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
