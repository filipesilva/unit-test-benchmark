import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6728Component } from './my-comp-6728.component';

describe('MyComp6728Component', () => {
  let component: MyComp6728Component;
  let fixture: ComponentFixture<MyComp6728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
