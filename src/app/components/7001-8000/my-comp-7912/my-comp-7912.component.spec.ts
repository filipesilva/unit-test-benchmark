import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7912Component } from './my-comp-7912.component';

describe('MyComp7912Component', () => {
  let component: MyComp7912Component;
  let fixture: ComponentFixture<MyComp7912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
