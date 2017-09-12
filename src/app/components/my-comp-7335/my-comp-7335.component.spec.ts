import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7335Component } from './my-comp-7335.component';

describe('MyComp7335Component', () => {
  let component: MyComp7335Component;
  let fixture: ComponentFixture<MyComp7335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
