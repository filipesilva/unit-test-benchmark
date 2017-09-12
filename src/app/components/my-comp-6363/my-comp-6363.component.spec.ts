import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6363Component } from './my-comp-6363.component';

describe('MyComp6363Component', () => {
  let component: MyComp6363Component;
  let fixture: ComponentFixture<MyComp6363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
