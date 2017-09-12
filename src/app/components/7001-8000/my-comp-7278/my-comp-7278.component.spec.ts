import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7278Component } from './my-comp-7278.component';

describe('MyComp7278Component', () => {
  let component: MyComp7278Component;
  let fixture: ComponentFixture<MyComp7278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
