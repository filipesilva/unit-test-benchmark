import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp294Component } from './my-comp-294.component';

describe('MyComp294Component', () => {
  let component: MyComp294Component;
  let fixture: ComponentFixture<MyComp294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
