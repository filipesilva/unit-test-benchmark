import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp808Component } from './my-comp-808.component';

describe('MyComp808Component', () => {
  let component: MyComp808Component;
  let fixture: ComponentFixture<MyComp808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
