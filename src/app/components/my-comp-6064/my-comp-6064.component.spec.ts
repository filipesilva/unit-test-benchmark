import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6064Component } from './my-comp-6064.component';

describe('MyComp6064Component', () => {
  let component: MyComp6064Component;
  let fixture: ComponentFixture<MyComp6064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
