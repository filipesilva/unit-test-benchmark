import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5337Component } from './my-comp-5337.component';

describe('MyComp5337Component', () => {
  let component: MyComp5337Component;
  let fixture: ComponentFixture<MyComp5337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
