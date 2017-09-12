import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7325Component } from './my-comp-7325.component';

describe('MyComp7325Component', () => {
  let component: MyComp7325Component;
  let fixture: ComponentFixture<MyComp7325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
