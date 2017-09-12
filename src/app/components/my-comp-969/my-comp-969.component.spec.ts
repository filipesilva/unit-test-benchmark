import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp969Component } from './my-comp-969.component';

describe('MyComp969Component', () => {
  let component: MyComp969Component;
  let fixture: ComponentFixture<MyComp969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
