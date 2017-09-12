import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7478Component } from './my-comp-7478.component';

describe('MyComp7478Component', () => {
  let component: MyComp7478Component;
  let fixture: ComponentFixture<MyComp7478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
