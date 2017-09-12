import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8169Component } from './my-comp-8169.component';

describe('MyComp8169Component', () => {
  let component: MyComp8169Component;
  let fixture: ComponentFixture<MyComp8169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
