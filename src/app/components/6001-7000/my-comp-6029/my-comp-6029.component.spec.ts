import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6029Component } from './my-comp-6029.component';

describe('MyComp6029Component', () => {
  let component: MyComp6029Component;
  let fixture: ComponentFixture<MyComp6029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
