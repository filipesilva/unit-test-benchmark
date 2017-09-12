import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5478Component } from './my-comp-5478.component';

describe('MyComp5478Component', () => {
  let component: MyComp5478Component;
  let fixture: ComponentFixture<MyComp5478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
