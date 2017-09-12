import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2310Component } from './my-comp-2310.component';

describe('MyComp2310Component', () => {
  let component: MyComp2310Component;
  let fixture: ComponentFixture<MyComp2310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
