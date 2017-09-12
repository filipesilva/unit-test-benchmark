import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8438Component } from './my-comp-8438.component';

describe('MyComp8438Component', () => {
  let component: MyComp8438Component;
  let fixture: ComponentFixture<MyComp8438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
