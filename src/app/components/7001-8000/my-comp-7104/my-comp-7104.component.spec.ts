import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7104Component } from './my-comp-7104.component';

describe('MyComp7104Component', () => {
  let component: MyComp7104Component;
  let fixture: ComponentFixture<MyComp7104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
