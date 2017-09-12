import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6501Component } from './my-comp-6501.component';

describe('MyComp6501Component', () => {
  let component: MyComp6501Component;
  let fixture: ComponentFixture<MyComp6501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
