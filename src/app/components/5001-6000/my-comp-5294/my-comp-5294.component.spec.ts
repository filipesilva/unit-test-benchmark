import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5294Component } from './my-comp-5294.component';

describe('MyComp5294Component', () => {
  let component: MyComp5294Component;
  let fixture: ComponentFixture<MyComp5294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
