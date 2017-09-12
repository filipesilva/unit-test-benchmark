import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6266Component } from './my-comp-6266.component';

describe('MyComp6266Component', () => {
  let component: MyComp6266Component;
  let fixture: ComponentFixture<MyComp6266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
