import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6889Component } from './my-comp-6889.component';

describe('MyComp6889Component', () => {
  let component: MyComp6889Component;
  let fixture: ComponentFixture<MyComp6889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6889Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
