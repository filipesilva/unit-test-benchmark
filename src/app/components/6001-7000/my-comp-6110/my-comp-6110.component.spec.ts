import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6110Component } from './my-comp-6110.component';

describe('MyComp6110Component', () => {
  let component: MyComp6110Component;
  let fixture: ComponentFixture<MyComp6110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
