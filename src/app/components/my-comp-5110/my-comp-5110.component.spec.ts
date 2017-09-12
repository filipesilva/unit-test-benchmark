import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5110Component } from './my-comp-5110.component';

describe('MyComp5110Component', () => {
  let component: MyComp5110Component;
  let fixture: ComponentFixture<MyComp5110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
