import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7294Component } from './my-comp-7294.component';

describe('MyComp7294Component', () => {
  let component: MyComp7294Component;
  let fixture: ComponentFixture<MyComp7294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
