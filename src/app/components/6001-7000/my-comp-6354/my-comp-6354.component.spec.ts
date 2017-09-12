import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6354Component } from './my-comp-6354.component';

describe('MyComp6354Component', () => {
  let component: MyComp6354Component;
  let fixture: ComponentFixture<MyComp6354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
