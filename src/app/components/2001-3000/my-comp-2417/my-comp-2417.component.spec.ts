import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2417Component } from './my-comp-2417.component';

describe('MyComp2417Component', () => {
  let component: MyComp2417Component;
  let fixture: ComponentFixture<MyComp2417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
