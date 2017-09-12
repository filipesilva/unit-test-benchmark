import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7584Component } from './my-comp-7584.component';

describe('MyComp7584Component', () => {
  let component: MyComp7584Component;
  let fixture: ComponentFixture<MyComp7584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
