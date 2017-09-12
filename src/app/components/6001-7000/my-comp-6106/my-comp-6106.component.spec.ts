import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6106Component } from './my-comp-6106.component';

describe('MyComp6106Component', () => {
  let component: MyComp6106Component;
  let fixture: ComponentFixture<MyComp6106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
