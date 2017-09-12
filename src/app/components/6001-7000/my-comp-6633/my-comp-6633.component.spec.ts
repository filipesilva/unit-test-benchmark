import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6633Component } from './my-comp-6633.component';

describe('MyComp6633Component', () => {
  let component: MyComp6633Component;
  let fixture: ComponentFixture<MyComp6633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
